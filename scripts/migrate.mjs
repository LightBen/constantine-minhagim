// Migration script: Flamelink JSON → Astro content collection Markdown files
// Run: node scripts/migrate.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const JSON_PATH = path.join(ROOT, 'flamelink_constantine-minhagim_2026_02_11_09_23_04.json');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');

console.log('Reading JSON...');
const data = JSON.parse(fs.readFileSync(JSON_PATH, 'utf-8'));
const env = data?.flamelink?.environments?.production;
const content = env?.content;

if (!content) {
    console.error('Could not find content in JSON');
    process.exit(1);
}

// Sanitize a value for YAML frontmatter
function yamlStr(val) {
    if (val === null || val === undefined) return '""';
    const s = String(val).replace(/"/g, '\\"').replace(/\r?\n/g, ' ').trim();
    return '"' + s + '"';
}

// Ensure directory exists
function ensureDir(dir) {
    fs.mkdirSync(dir, { recursive: true });
}

// Convert a Flamelink item to a Markdown file
function writeContentFile(collection, locale, slug, item) {
    if (!slug || !item.title) return;

    const dir = path.join(CONTENT_DIR, collection, locale);
    ensureDir(dir);

    // Sanitize slug for filename (keep Hebrew chars, alphanumeric, hyphens)
    const safeSlug = slug
        .replace(/\s+/g, '-')
        .replace(/[^\w\u0080-\uFFFF-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase();

    if (!safeSlug) return;

    const filePath = path.join(dir, safeSlug + '.md');

    const createdDate = item.__meta__?.createdDate?.seconds
        ? new Date(item.__meta__.createdDate.seconds * 1000).toISOString()
        : (item.date || '2020-01-01T00:00:00.000Z');

    const updatedDate = item.__meta__?.lastModifiedDate?.seconds
        ? new Date(item.__meta__.lastModifiedDate.seconds * 1000).toISOString()
        : createdDate;

    const tags = Array.isArray(item.tags) ? item.tags.filter(Boolean) : [];
    const tagsYaml = '[' + tags.map(t => yamlStr(t)).join(', ') + ']';

    const banner = typeof item.banner === 'string' ? item.banner.trim() : '';
    const thumbnail = typeof item.thumbnail === 'string' ? item.thumbnail.trim() : '';

    let frontmatter = `---
title: ${yamlStr(item.title)}
locale: "${locale}"
flamelinkId: ${yamlStr(item.id || item.__meta__?.fl_id || '')}
date: "${createdDate}"
updatedDate: "${updatedDate}"
author: ${yamlStr(item.author || '')}
description: ${yamlStr(item.description || '')}
banner: ${yamlStr(banner)}
thumbnail: ${yamlStr(thumbnail)}
tags: ${tagsYaml}
videoUrl: ${yamlStr(item.videoUrl || '')}
`;

    // Schema-specific fields
    if (collection === 'cuisine') {
        const foodType = item.foodType || {};
        const dishType = item.dishType || {};
        const event = item.event || {};

        const isActive = v => v === '1' || v === 1 || v === true;
        const foodTypes = Object.entries(foodType).filter(([, v]) => isActive(v)).map(([k]) => k);
        const dishTypes = Object.entries(dishType).filter(([, v]) => isActive(v)).map(([k]) => k);
        const events = Object.entries(event).filter(([, v]) => isActive(v)).map(([k]) => k);

        frontmatter += `foodType: [${foodTypes.map(t => yamlStr(t)).join(', ')}]
dishType: [${dishTypes.map(t => yamlStr(t)).join(', ')}]
events: [${events.map(t => yamlStr(t)).join(', ')}]
`;
    }

    frontmatter += '---\n\n';

    const body = item.content || '';
    fs.writeFileSync(filePath, frontmatter + body, 'utf-8');
}

// Map Flamelink schema keys to our collection names
const SCHEMA_MAP = {
    cuisine: 'cuisine',
    minhag: 'halakha',
    hazanout: 'hazanout',
    articles: 'articles',
    pages: 'pages',
    general: 'general',
    siddur: 'siddur',
};

let totalWritten = 0;
let errors = 0;

for (const [schemaKey, collectionName] of Object.entries(SCHEMA_MAP)) {
    const schemaContent = content[schemaKey];
    if (!schemaContent) {
        console.log(`⚠️  No content for schema: ${schemaKey}`);
        continue;
    }

    // Each locale is a direct sub-key: cuisine.fr.{id: {}}
    for (const [locale, items] of Object.entries(schemaContent)) {
        if (locale === '__meta__' || typeof items !== 'object' || !items) continue;

        for (const [itemId, item] of Object.entries(items)) {
            if (itemId === '__meta__' || !item || typeof item !== 'object') continue;

            const slug = (item.url && item.url !== '0') ? item.url : (item.id || itemId);

            try {
                writeContentFile(collectionName, locale, slug, item);
                totalWritten++;
            } catch (err) {
                console.error(`  ✗ ${collectionName}/${locale}/${slug}: ${err.message}`);
                errors++;
            }
        }
    }
}

console.log(`\n✅ Migration complete!`);
console.log(`   Written: ${totalWritten} files`);
console.log(`   Errors: ${errors}`);
console.log(`   Content directory: ${CONTENT_DIR}`);
