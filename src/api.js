const express = require("express");
const cors = require("cors");
const {readFile, saveFile} = require("./routes/fileSystem");
const app = express();
const serverless = require("serverless-http");

// Middlewares
app.use(cors());

// Routes
const router = express.Router();
router.get('/', readFile);
router.post('/', saveFile);

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);