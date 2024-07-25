const fs= require("fs").promises

async function readFilePath(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
module.exports={
    readFilePath
}