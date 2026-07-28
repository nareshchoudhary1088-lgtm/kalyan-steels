const fs = require("fs");
const path = require("path");
const dirsToSearch = ["src"];
const extensions = [".tsx", ".ts", ".html"];
function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, "utf-8");
    let original = content;
    content = content.replace(/Kiran Steels/gi, "Kalyan Steels");
    content = content.replace(/Gopalapatnam/gi, "Patrunivalasa");
    content = content.replace(/Gopalpatnam/gi, "Patrunivalasa");
    content = content.replace(/Visakhapatnam/gi, "Srikakulam");
    content = content.replace(/9618012403/g, "9849094570");
    content = content.replace(/9640304230/g, "9849094570");
    content = content.replace(/7665491606/g, "9849094570");
    content = content.replace(/96180 12403/g, "98490 94570");
    content = content.replace(/96403 04230/g, "98490 94570");
    content = content.replace(/76654 91606/g, "98490 94570");
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
replaceInFile("index.html");
console.log("Done");
