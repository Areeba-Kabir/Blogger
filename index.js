const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connection = require('./connection');
app.use(express.json());

connection().then(
    () => {
        console.log('Connected to database');
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`server listening on PORT: ${port}`)
        })
    }
).catch(()=>{console.log('error connecting to db')})