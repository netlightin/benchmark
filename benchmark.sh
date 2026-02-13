#!/bin/bash

# Benchmarking script for transcription API
# Usage: ./benchmark.sh

set -e

AUDIO_DIR="${1:-./audio}"
ENDPOINT="${2:-http://loud-meadow-alb-652623339.eu-west-1.elb.amazonaws.com/transcribe}"
OUTPUT_DIR="${3:-./output}"

# Validate directory exists
if [ ! -d "$AUDIO_DIR" ]; then
    echo "Error: Directory '$AUDIO_DIR' does not exist"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Counter for progress
count=0

# Process each audio file
for audio_file in "$AUDIO_DIR"/*; do
    # Skip if not a file
    [ -f "$audio_file" ] || continue

    # Check if it looks like audio (common extensions)
    case "$audio_file" in
        *.mp3|*.wav|*.m4a|*.ogg|*.flac|*.aac)
            ;;
        *)
            continue
            ;;
    esac

    count=$((count + 1))
    filename=$(basename "$audio_file")
    basename_no_ext="${filename%.*}"
    echo "[$(date '+%H:%M:%S')] Processing ($count): $filename"

    # Get file size in KB
    file_size=$(stat -f%z "$audio_file" 2>/dev/null || stat -c%s "$audio_file" 2>/dev/null)
    file_size_kb=$(echo "scale=1; $file_size / 1024" | bc)

    # Array to store all 10 attempts
    attempts=()

    # Make 10 requests for this audio file
    for attempt in {1..10}; do
        echo "  [Attempt $attempt/10]"

        # Measure response time and make request
        start_time=$(date +%s%N)

        response=$(curl -s \
            -w "\n%{http_code}" \
            -F "audio=@$audio_file" \
            "$ENDPOINT")

        end_time=$(date +%s%N)

        # Extract HTTP status code
        http_code=$(echo "$response" | tail -n1)
        json_response=$(echo "$response" | sed '$d')

        # Check for errors
        if [ "$http_code" != "200" ]; then
            echo "    Error: HTTP $http_code"
            continue
        fi

        # Calculate response time in seconds
        response_time_ms=$(( (end_time - start_time) / 1000000 ))
        response_time_s=$(echo "scale=2; $response_time_ms / 1000" | bc)

        # Parse JSON response
        text=$(echo "$json_response" | jq -r '.text // empty')
        language=$(echo "$json_response" | jq -r '.language // empty')
        duration=$(echo "$json_response" | jq -r '.duration // empty')

        # Validate we got required fields
        if [ -z "$text" ]; then
            echo "    Warning: No text in response"
            continue
        fi

        # Build benchmark entry
        entry=$(jq -n \
            --arg duration "$duration" \
            --arg size "${file_size_kb}kb" \
            --arg responseTime "${response_time_s}s" \
            --arg language "$language" \
            --arg text "$text" \
            '{
                duration: $duration,
                size: $size,
                responseTime: $responseTime,
                language: $language,
                text: $text
            }')

        attempts+=("$entry")
    done

    # Write all attempts to file
    if [ ${#attempts[@]} -gt 0 ]; then
        output_file="$OUTPUT_DIR/${basename_no_ext}.json"
        printf '%s\n' "${attempts[@]}" | jq -s '.' > "$output_file"
        echo "  ✓ Written $filename with ${#attempts[@]} attempts to: $output_file"
    fi
done

echo ""
echo "✓ Benchmark complete!"
echo "  Processed: $count files"
echo "  Output directory: $OUTPUT_DIR"
