const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Tamanho do favicon (32x32 é o mais comum)
const size = 32;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Fundo branco
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 0, size, size);

// Desenha um círculo laranja com borda azul
ctx.beginPath();
ctx.arc(size/2, size/2, size/2 - 2, 0, Math.PI * 2);
ctx.fillStyle = '#F97316'; // Laranja
ctx.fill();
ctx.strokeStyle = '#2563EB'; // Azul
ctx.lineWidth = 1.5;
ctx.stroke();

// Texto CM
ctx.font = `bold ${size * 0.5}px Arial`;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillStyle = '#2563EB'; // Azul
ctx.fillText('CM', size/2, size/2 + 1);

// Salva como favicon.ico
const out = fs.createWriteStream(path.join(__dirname, 'public', 'favicon.ico'));
const stream = canvas.createPNGStream();
const pngData = [];

stream.on('data', chunk => pngData.push(chunk));
stream.on('end', () => {
  const png = Buffer.concat(pngData);
  const ico = require('@fiahfy/ico-convert');
  ico.convert([png]).then(buf => {
    fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), buf);
    console.log('Favicon gerado com sucesso em public/favicon.ico');
  });
});
