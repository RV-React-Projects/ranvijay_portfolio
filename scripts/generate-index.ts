import * as fs from 'fs';
import * as path from 'path';

const foldersToScan = [
  'src/assets/svgs', // Focus on the SVG folder
];

foldersToScan.forEach(folder => {
  const absPath = path.resolve(folder);

  // Check if the folder exists
  if (!fs.existsSync(absPath)) {
    console.error(`❌ Folder not found: ${absPath}`);
    return;
  }

  const files = fs.readdirSync(absPath);

  // Filter only SVG-related files (e.g., .tsx files)
  const exports = files
    .filter(file => file.endsWith('.tsx')) // Only include .tsx files
    .filter(file => file !== 'index.ts' && file !== 'index.tsx') // Exclude existing index files
    .map(file => {
      const name = path.basename(file, path.extname(file)); // Get the file name without extension
      return `export { default as ${name} } from './${name}';`;
    });

  // Write the exports to index.ts
  if (exports.length > 0) {
    fs.writeFileSync(path.join(absPath, 'index.ts'), exports.join('\n') + '\n');
    console.log(`✅ Updated index.ts in ${folder}`);
  } else {
    console.warn(`⚠️ No .tsx files found in ${folder}`);
  }
});
