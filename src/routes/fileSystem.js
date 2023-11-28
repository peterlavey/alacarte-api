const fs = require("fs");

const saveFile = (req, res) => {
    const data = JSON.stringify(req.body);
    try {
        if (!fs.existsSync('data')) {
            fs.mkdirSync('data');
            fs.writeFileSync("data/cartes.json", data);
            res.send(data);
        } else {
            res.send(err);
        }
    } catch (err) {
        res.send(err);
    }
};

const readFile = (req, res) => {
    fs.readFile("data/cartes.json", (err, data) => {
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