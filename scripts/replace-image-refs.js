import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getFiles(dir, exts) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res, exts) : res;
  }));
  return Array.prototype.concat(...files).filter(f => exts.includes(path.extname(f)));
}

async function run() {
  const srcDir = path.join(__dirname, '../src');
  const indexHtml = path.join(__dirname, '../index.html');
  
  let files = await getFiles(srcDir, ['.ts', '.tsx', '.css']);
  files.push(indexHtml);
  
  for (const file of files) {
    let content = await fs.readFile(file, 'utf8');
    const newContent = content.replace(/\.(png|jpg|jpeg)/gi, '.webp');
    if (content !== newContent) {
      await fs.writeFile(file, newContent, 'utf8');
      console.log(`Updated ${path.basename(file)}`);
    }
  }
}

run().catch(console.error);
