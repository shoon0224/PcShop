const fs = require('fs');
const cors = require('cors');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5500;
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())



const data = fs.readFileSync('./database.json');//파일을 읽어올 수 있도록함

console.log("server router check");

const conf = JSON.parse(data);


const mysql = require('mysql');//mysql 요청
const connection = mysql.createConnection({ //디비연결
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer');







app.post('/join', (req, res) => {
    let sql = 'INSERT INTO USERS VALUES (null,?,?,?,?,?)';
    let userid = req.body.userid;
    let password = req.body.password;
    let name = req.body.name;
    let phone = req.body.phone;
    let address = req.body.address;
    let params = [userid, password, name, phone, address];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
            console.log(err);
            console.log(rows);
        }
    );
});

app.post('/login', (req, res) => {
    let userid = req.body.userid;
    let password = req.body.password;
    let sql = 'SELECT NAME FROM USERS WHERE USERID ="' + userid + '" AND PASSWORD="' + password + '"'
    let params = [userid, password];
    var responseData = {};
    connection.query(sql, params,
        (err, rows, fields) => {
            if (err) throw err;
            if (rows[0]) {
                console.log(rows);
                responseData.result = "ok";
                responseData.name = rows[0].name;
            } else {
                responseData.result = "none";
                responseData.name = "";
            }
            res.json(responseData)
        });
});

app.get('/products', (req, res) => { 
    let sql = 'SELECT * FROM PRODUCTS';
    connection.query(sql,
        (err, rows, fields) => {
            res.send(rows);
            console.log(err);
        })
})




app.listen(port, () => console.log(`Listening on port ${port}`));

