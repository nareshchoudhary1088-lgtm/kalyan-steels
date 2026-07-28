const fs = require("fs");
const path = require("path");
const dirsToSearch = ["src"];
const extensions = [".tsx", ".ts"];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, "utf-8");
    let original = content;

    content = content.replace(/kiransteels1088@gmail\.com/g, "kalyansteels44@gmail.com");

    if (content !== original) {
        fs.writeFileSync(filePath, content, "utf-8");
        console.log("Updated", filePath);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else {
            if (extensions.includes(path.extname(fullPath))) {
                replaceInFile(fullPath);
            }
        }
    }
}
dirsToSearch.forEach(walkDir);
console.log("Email replaced");
