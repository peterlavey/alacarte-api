const fs = require("fs");
const {join} = require("path");
const dirPath = join(process.cwd(), '/dist/data');

const saveFile = (req, res) => {
    const data = JSON.stringify(req.body);
    try {
        fs.writeFileSync(`${dirPath}/cartes.json`, data);
        res.send(data);
    } catch (err) {
        res.send(err);
    }
};

const readFile = (req, res) => {
    fs.readFile(`${dirPath}/cartes.json`, (err, data) => {
        if (err)
            res.send(err);
        else {
            const parsedData = JSON.parse(data);
            res.json(parsedData);
        }
    });
};

module.exports = {
    saveFile,
    readFile
};