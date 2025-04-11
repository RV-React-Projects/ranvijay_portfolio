import * as fs from 'fs';
import * as path from 'path';

const foldersToScan = ['src/assets/svgs'];

const allowedExtensions = ['.ts', '.tsx', '.js', '.jsx'];

foldersToScan.forEach(folder => {
  const absPath = path.resolve(folder);

  if (!fs.existsSync(absPath)) {
    console.error(`❌ Folder not found: ${absPath}`);
    return;
  }

  const files = fs.readdirSync(absPath);

  const exports = files
    .filter(file => {
      const ext = path.extname(file);
      const isIndexFile = /^index\.(ts|tsx|js|jsx)$/.test(file);
      return allowedExtensions.includes(ext) && !isIndexFile;
    })
    .map(file => {
      const name = path.basename(file, path.extname(file));
      return `export { default as ${name} } from './${name}';`;
    });

  if (exports.length > 0) {
    fs.writeFileSync(path.join(absPath, 'index.ts'), exports.join('\n') + '\n');
    console.log(`✅ Updated index.ts in ${folder}`);
  } else {
    console.warn(`⚠️ No valid component files found in ${folder}`);
  }
});
