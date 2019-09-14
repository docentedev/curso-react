const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const db = require("./database/config");

const userModule = require("./modules/user")
const authModule = require("./modules/auth")

const app = express();
const HTTP_PORT = 3333;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start server
app.listen(HTTP_PORT, () => { console.log(`Runing in port ${HTTP_PORT}`); });

// modules
userModule(app, db);
authModule(app, db);