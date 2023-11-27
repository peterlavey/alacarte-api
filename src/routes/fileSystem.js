const fs = require("fs");

const saveFile = (req, res) => {
    const data = JSON.stringify(req.body);
    fs.writeFile("data.json", data, err => {
        if (err)
            res.send(err);
        else {
            res.send(data);
        }
    });
};

const readFile = (req, res) => {
    fs.readFile("data.json", (err, data) => {
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