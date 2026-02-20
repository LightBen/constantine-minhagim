import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
    'constantine-jlm.png',
    'meal.png',
    'rabbins.png',
    'hazane.png',
    'people-parchment.png'
];

const inputDir = 'public/img';
const outputDir = 'public/img';

console.log('Restizing images for social media...');

async function processImages() {
    for (const img of images) {
        const inputPath = path.join(inputDir, img);
        const name = path.parse(img).name;
        const outputPath = path.join(outputDir, `${name}-social.jpg`);

        if (fs.existsSync(inputPath)) {
            try {
                await sharp(inputPath)
                    .resize(1200, 630, {
                        fit: 'cover',
                        position: 'center'
                    })
                    .jpeg({ quality: 80, mozjpeg: true })
                    .toFile(outputPath);
                console.log(`✅ Created ${outputPath}`);
            } catch (err) {
                console.error(`❌ Error processing ${img}:`, err);
            }
        } else {
            console.warn(`⚠️ File not found: ${inputPath}`);
        }
    }
}

processImages();
