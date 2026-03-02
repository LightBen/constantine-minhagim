const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        if (fs.statSync(file).isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.astro')) results.push(file);
        }
    });
    return results;
}

const files = walk('src/pages');
let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const newContent = content.replace(/image=img([A-Za-z]+)\.src/g, 'image={img$1.src}');

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Fixed syntax in ${file}`);
        count++;
    }
});
console.log(`Total files fixed: ${count}`);
