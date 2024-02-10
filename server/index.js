const express = require('express');
const app = express();
const mysql = require('mysql');

const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'SEM_PROJECT',    
});

app.post('/create', (req, res)=> {
    const PROD_NAME = req.body.PROD_NAME;
    const PROD_CMPNY = req.body.PROD_CMPNY;
    const  PROD_PRICE = req.body.PROD_PRICE;
    const  QUANTITY = req.body.QUANTITY;
    const  CATEGORY = req.body.CATEGORY;

    db.query('INSERT INTO PRODUCTS (PROD_CMPNY, PROD_NAME, PROD_PRICE, CATEGORY, QUANTITY) VALUES (?,?,?,?,?);',
    [PROD_CMPNY,PROD_NAME,PROD_PRICE,CATEGORY,QUANTITY],(err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Values Inserted!"); 
        }
    })
})


app.listen(3001,()=> {
    console.log("Running on port 3001");
});