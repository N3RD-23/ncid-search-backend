const express = require('express')
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "nid_check"
});

app.get('/', (res) => {
    res.send('Hello World!')
})

app.get('/nid', (res) => {
    db.query("SELECT * FROM sheet1", (err, result) => {
        if (err) {
            console.log("Error, Could Not Fetch Data" ,err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Ypur server is runnung on port 3001")
})