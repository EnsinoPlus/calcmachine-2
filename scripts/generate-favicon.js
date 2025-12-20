import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicon() {
  try {
    const inputPath = join(__dirname, '../public/favicon.svg');
    const outputPath = join(__dirname, '../public/favicon-192.png');
    
    await sharp(inputPath)
      .resize(192, 192)
      .png()
      .toFile(outputPath);
      
    console.log('Favicon gerado com sucesso em:', outputPath);
  } catch (error) {
    console.error('Erro ao gerar favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
