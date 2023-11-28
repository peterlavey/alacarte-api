const fs = require("fs");

const saveFile = (req, res) => {
    const data = JSON.stringify(req.body);
    try {
        fs.writeFileSync("./dist/data/cartes.json", data);
        res.send(data);
    } catch (err) {
        res.send(err);
    }
};

const readFile = (req, res) => {
    fs.readFile("./+dist/data/cartes.json", (err, data) => {
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