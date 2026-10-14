const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (!dirPath.includes('.git') && !dirPath.includes('node_modules') && !dirPath.includes('.lovable')) {
                walkDir(dirPath, callback);
            }
        } else {
            callback(dirPath);
        }
    });
}

const replacements = [
    { regex: /Kalyan Steel/g, replace: 'Kalyan Steel' },
    { regex: /kalyan steel/g, replace: 'kalyan steel' },
    { regex: /KalyanSteel/g, replace: 'KalyanSteel' },
    { regex: /kalyansteel/g, replace: 'kalyansteel' },
    { regex: /kalyan-steel/g, replace: 'kalyan-steel' },
    { regex: /Kalyan_Steel/g, replace: 'Kalyan_Steel' },
    { regex: /kalyan-secure-portal/g, replace: 'kalyan-secure-portal' },
];

walkDir('.', (filePath) => {
    // Only text files
    if (filePath.match(/\.(js|cjs|mjs|ts|tsx|html|xml|txt|json|md)$/)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let newContent = content;
        
        replacements.forEach(r => {
            newContent = newContent.replace(r.regex, r.replace);
        });

        if (content !== newContent) {
            console.log(`Updated ${filePath}`);
            fs.writeFileSync(filePath, newContent, 'utf-8');
        }
    }
});
