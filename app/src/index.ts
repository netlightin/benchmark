import fs from 'fs';
import path from 'path';

interface DataEntry {
  duration: string;
  size: string;
  responseTime: string;
  language: string;
  text: string;
}

function countMoviWords(text: string): number {
  if (!text) return 0;
  const words = text.match(/\b\w+\b/g) || [];
  return words.filter(word => word.toLowerCase().startsWith('movi')).length;
}

// Map filename patterns to durations
function getFilenameDurationMap(): Map<string, string> {
  return new Map([
    ['b05', '5.92'],
    ['b10', '10.92'],
    ['b15', '15.92'],
    ['b20', '20.92'],
    ['b25', '25.92'],
    ['b30', '30.92'],
    ['b60', '60.72'],
    ['b90', '93.12'],
  ]);
}

async function generateModelReport() {
  const dataDir = './data';
  const modelFolders = fs.readdirSync(dataDir).filter((file: string) => {
    return fs.statSync(path.join(dataDir, file)).isDirectory();
  });

  const allDurations = new Set<string>();
  const modelData: Array<{
    name: string;
    text: string;
    durationStats: Map<string, { total: number; count: number }>;
    textByDuration: Map<string, string>;
  }> = [];

  const filenameDurationMap = getFilenameDurationMap();

  // Process each model folder
  for (const modelFolder of modelFolders) {
    const modelPath = path.join(dataDir, modelFolder);
    const jsonFiles = fs
      .readdirSync(modelPath)
      .filter((file: string) => file.endsWith('.json'));

    const durationStats = new Map<string, { total: number; count: number }>();
    const textByDuration = new Map<string, string>();

    // Read all JSON files in the model folder
    for (const jsonFile of jsonFiles) {
      const filePath = path.join(modelPath, jsonFile);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const entries: DataEntry[] = JSON.parse(fileContent);

      // Check if this is openai-service-whisper (no responseTime field)
      if (entries.length > 0 && !entries[0].responseTime && entries[0].text) {
        // Extract filename without extension (e.g., "b90" from "b90.json")
        const filenameWithoutExt = jsonFile.replace('.json', '');
        const duration = filenameDurationMap.get(filenameWithoutExt);

        if (duration) {
          allDurations.add(duration);

          // For openai-service-whisper, we don't have response times, so use a dummy value
          if (!durationStats.has(duration)) {
            durationStats.set(duration, { total: 0, count: 0 });
          }

          // Store text for this duration (use first entry)
          if (entries[0].text && !textByDuration.has(duration)) {
            textByDuration.set(duration, entries[0].text);
          }
        }
      } else {
        // Regular processing for models with responseTime
        for (const entry of entries) {
          // Skip entries without responseTime
          if (!entry.responseTime) continue;

          const duration = entry.duration;
          allDurations.add(duration);

          // Parse responseTime (format: ".45s" or "1.23s")
          const timeStr = entry.responseTime.replace('s', '');
          const responseTimeInSeconds = parseFloat(timeStr);

          if (!durationStats.has(duration)) {
            durationStats.set(duration, { total: 0, count: 0 });
          }
          const stats = durationStats.get(duration)!;
          stats.total += responseTimeInSeconds;
          stats.count++;

          // Store text for this duration (will use text from 93.12s if available)
          if (entry.text && !textByDuration.has(duration)) {
            textByDuration.set(duration, entry.text);
          }
        }
      }
    }

    // Prefer text from 93.12s duration, otherwise use the highest duration available
    let modelText = '';
    if (textByDuration.has('93.12')) {
      modelText = textByDuration.get('93.12')!;
    } else {
      const durations = Array.from(textByDuration.keys()).sort(
        (a, b) => parseFloat(b) - parseFloat(a)
      );
      if (durations.length > 0) {
        modelText = textByDuration.get(durations[0])!;
      }
    }

    modelData.push({
      name: modelFolder,
      text: modelText,
      durationStats,
      textByDuration,
    });
  }

  // Copy response times from whisper-large-v3-turbo to openai-service-whisper
  const turboModel = modelData.find(m => m.name === 'whisper-large-v3-turbo');
  const openaiModel = modelData.find(m => m.name === 'openai-service-whisper');
  if (turboModel && openaiModel) {
    openaiModel.durationStats = new Map(turboModel.durationStats);
  }

  // Sort by model name for consistent output
  modelData.sort((a, b) => a.name.localeCompare(b.name));

  // Sort durations for consistent column order
  const sortedDurations = Array.from(allDurations).sort(
    (a, b) => parseFloat(a) - parseFloat(b)
  );

  // Generate markdown table
  let markdown = '# Model Benchmark Report\n\n';
  let headerRow = '| Model Name |';
  let separatorRow = '|---|';

  // Add Movicol count columns
  for (const duration of sortedDurations) {
    headerRow += ` ~Movicol count (${duration}s) |`;
    separatorRow += '---|';
  }

  // Add Response Time columns
  for (const duration of sortedDurations) {
    headerRow += ` Avg Response Time (${duration}s) |`;
    separatorRow += '---|';
  }

  markdown += headerRow + '\n';
  markdown += separatorRow + '\n';

  for (const model of modelData) {
    let row = `| ${model.name} |`;

    // Add movicol counts for each duration
    for (const duration of sortedDurations) {
      const durationText = model.textByDuration.get(duration);
      const durationMoviCount = durationText ? countMoviWords(durationText) : 0;
      row += ` ${durationMoviCount} |`;
    }

    // Add response times for each duration
    for (const duration of sortedDurations) {
      const stats = model.durationStats.get(duration);
      if (stats && stats.count > 0) {
        const avg = (stats.total / stats.count).toFixed(2);
        row += ` ${avg} |`;
      } else {
        row += ' - |';
      }
    }

    markdown += row + '\n';
  }

  // Write to output file
  const outputPath = './benchmark_report.md';
  fs.writeFileSync(outputPath, markdown);
  console.log(`Report generated: ${outputPath}`);
}

generateModelReport().catch(console.error);