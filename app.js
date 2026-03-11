const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlroot1',
    database: 'projectdb'
});

db.connect((err) => {
    if(err){
        console.log("Database connection failed: ", err);
    } else {
        console.log('Connected to MySql database.');
    }
});

app.get('/', (req, res) => {
    res.send('API connected to MySql database successfully.');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});