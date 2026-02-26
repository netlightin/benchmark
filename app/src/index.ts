import fs from 'fs';
import path from 'path';

interface DataEntry {
  duration: string;
  size: string;
  responseTime: string;
  language: string;
  text: string;
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
  }> = [];

  // Process each model folder
  for (const modelFolder of modelFolders) {
    const modelPath = path.join(dataDir, modelFolder);
    const jsonFiles = fs
      .readdirSync(modelPath)
      .filter((file: string) => file.endsWith('.json'));

    let sampleText = '';
    const durationStats = new Map<string, { total: number; count: number }>();

    // Read all JSON files in the model folder
    for (const jsonFile of jsonFiles) {
      const filePath = path.join(modelPath, jsonFile);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const entries: DataEntry[] = JSON.parse(fileContent);

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

        // Capture first text sample if not already set
        if (!sampleText && entry.text) {
          sampleText = entry.text;
        }
      }
    }

    modelData.push({
      name: modelFolder,
      text: sampleText,
      durationStats,
    });
  }

  // Sort by model name for consistent output
  modelData.sort((a, b) => a.name.localeCompare(b.name));

  // Sort durations for consistent column order
  const sortedDurations = Array.from(allDurations).sort(
    (a, b) => parseFloat(a) - parseFloat(b)
  );

  // Generate markdown table
  let markdown = '# Model Benchmark Report\n\n';
  let headerRow = '| Model Name | Text |';
  let separatorRow = '|---|---|';

  for (const duration of sortedDurations) {
    headerRow += ` Avg Response Time (${duration}s) |`;
    separatorRow += '---|';
  }

  markdown += headerRow + '\n';
  markdown += separatorRow + '\n';

  for (const model of modelData) {
    let row = `| ${model.name} | ${model.text} |`;

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