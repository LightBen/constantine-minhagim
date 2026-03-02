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

const files = walk('src');

const imgAssets = [
    { name: 'imgRabbinsSocial', file: 'rabbins-social.jpg' },
    { name: 'imgRabbins', file: 'rabbins.png' },
    { name: 'imgHazaneSocial', file: 'hazane-social.jpg' },
    { name: 'imgHazane', file: 'hazane.png' },
    { name: 'imgMealSocial', file: 'meal-social.jpg' },
    { name: 'imgMeal', file: 'meal.png' },
    { name: 'imgPeopleSocial', file: 'people-parchment-social.jpg' },
    { name: 'imgPeople', file: 'people-parchment.png' },
    { name: 'imgConstantineJlm', file: 'constantine-jlm.png' },
    { name: 'imgConstantineJlmSocial', file: 'constantine-jlm-social.jpg' }
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    const relSrc = path.relative(path.dirname(file), path.join('src', 'assets', 'img')).replace(/\\/g, '/');
    const importBase = relSrc.startsWith('.') ? relSrc : './' + relSrc;

    imgAssets.forEach(v => {
        // Check if the variable is used in the file
        // Use a regex to match the variable followed by .src or used in a property
        const usedRegex = new RegExp(`\\b${v.name}\\b`, 'g');
        if (usedRegex.test(content)) {
            // Check if it's already imported
            const importRegex = new RegExp(`import\\s+${v.name}\\s+from\\s+`, 'g');
            if (!importRegex.test(content)) {
                // Add import at the beginning of the frontmatter
                content = content.replace(/^---\r?\n/, `---\nimport ${v.name} from "${importBase}/${v.file}";\n`);
                changed = true;
            }
        }
    });

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Added missing imports to ${file}`);
    }
});
