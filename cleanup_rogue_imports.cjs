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

    // Look for the bug where import is just after ---
    const regex = /---\r?\nimport img[A-Za-z]+ from ".*?";\r?\n/g;

    if (regex.test(content)) {
        const newContent = content.replace(regex, '---\n');
        fs.writeFileSync(file, newContent, 'utf8');
        console.log("Cleaned up " + file);
        count++;
    }
});

console.log("Total files fixed: " + count);
