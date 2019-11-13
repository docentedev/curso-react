const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const PostOutput = require('./src/infrastructure/port/postOutput');
const UserOutput = require('./src/infrastructure/port/userOutput');
const AuthOutput = require('./src/infrastructure/port/authOutput');

const app = express();

const HTTP_PORT = 3333;
app.locals.lang = 'es-CL';
app.locals.appName = 'Api Mock';

// VIEWS
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    const data = { host: `http://localhost:${HTTP_PORT}` };
    res.render('index', data);
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start server
app.listen(HTTP_PORT, () => { console.log(`Runing in port ${HTTP_PORT}`); });

// modules
new PostOutput(app).init();
new UserOutput(app).init();
new AuthOutput(app).init();