import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, '../public/images');

async function processImages() {
  try {
    const files = await fs.readdir(imgDir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const filePath = path.join(imgDir, file);
        const newFileName = file.substring(0, file.lastIndexOf('.')) + '.webp';
        const newFilePath = path.join(imgDir, newFileName);
        
        // Skip if webp version already exists
        try {
          await fs.access(newFilePath);
          console.log(`Skipping ${file}, ${newFileName} already exists`);
          continue;
        } catch (e) {
          // File does not exist, proceed with conversion
        }

        console.log(`Converting ${file} -> ${newFileName}...`);
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(newFilePath);
          
        console.log(`Successfully converted ${file}`);
        
        // Remove original file to avoid bloated folder since we'll replace all refs
        await fs.unlink(filePath);
      }
    }
    console.log('Image optimization complete!');
  } catch (err) {
    console.error('Error processing images:', err);
  }
}

processImages();
