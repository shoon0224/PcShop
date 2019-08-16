// const express = require("express")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const app = express()
// const port = process.env.PORT || 5500

// app.use(bodyParser.json())
// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false}))

// const Users = require('./routes/Users')

// app.use('/users',Users)

// app.listen(port, ()=> {
//     console.log("Server is running on port: " + port)
// })




const fs = require('fs');
const cors = require('cors');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

const data = fs.readFileSync('./database.json');

console.log("server router check");

const conf = JSON.parse(data);


const mysql = require('mysql');//mysql 요청
const connection = mysql.createConnection({
    host:conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer');


app.post('/api/users', (req,res)=> {
   
});





app.listen(port, () => console.log(`Listening on port ${port}`));

