const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const db = require("./database/config");
const userModule = require("./modules/user");

const sign = require("./jwt/index");

const app = express();
const HTTP_PORT = 3333;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start server
app.listen(HTTP_PORT, () => { console.log(`Runing in port ${HTTP_PORT}`); });


app.post('/login', (req, res, next) => {
    const fakeUser = {
        username: 'admin',
        password: 'admin1234',
    };

    let p_username = req.body.username
    let p_password = req.body.password
    if (p_username == fakeUser.username && p_password == fakeUser.password) {
        sign(p_username, (err, token) => {
            res.send({
                token,
                message: "success"
            })
        });
    } else {
        res.send({
            ok: false,
            message: "Username or password incorrect"
        })
    }
})

// modules
userModule(app, db);