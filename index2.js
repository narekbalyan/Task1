const decompress = require("decompress");
const path = require("path");
const fs = require("fs");

const basePath = path.join("C:", "Users", "User", "Downloads");
const zipPath = path.join(basePath, "node_modules.zip");

const tab = "    ";

let depth = 0;

function getHir (dir){
    const files = fs.readdirSync(dir);

    for (let i of files) {
        let newDir = path.join(dir, i);

        if (fs.statSync(newDir).isDirectory()) {
            console.log(`\n${ tab.repeat(depth) }${ path.basename(newDir) }`);

            depth++;

            getHir(newDir);
        } else {
            console.log(`${ tab.repeat(depth) }${ path.basename(newDir) }`);
        }
    }

    depth--;
}

decompress(zipPath, basePath).then(() => {
    getHir(path.join(basePath, path.basename(zipPath, path.extname(zipPath))));
});