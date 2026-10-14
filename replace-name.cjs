const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/KIRAN STEEL/.gemini/antigravity-ide/scratch/steel-heart-clone/steel-heart-clone-1088';

const filesToProcess = [];

function findFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.vercel') continue;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            findFiles(fullPath);
        } else if (stat.isFile() && /\.(html|tsx|ts|json|md)$/.test(file)) {
            // Ignore lock files
            if (!file.includes('lock')) {
                filesToProcess.push(fullPath);
            }
        }
    }
}

findFiles(directory);

let totalReplaced = 0;

for (const file of filesToProcess) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace various forms of the name
    content = content.replace(/Kalyan Steels/g, 'Kalyan Steel');
    content = content.replace(/Kalyan steels/g, 'Kalyan Steel');
    content = content.replace(/Kiran Steels/g, 'Kalyan Steel');
    content = content.replace(/Kiran steels/g, 'Kalyan Steel');
    content = content.replace(/KiranSteels/g, 'KalyanSteel');
    content = content.replace(/kiran-steels/g, 'kalyan-steel');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
        totalReplaced++;
    }
}

console.log(`Done. Updated ${totalReplaced} files.`);
