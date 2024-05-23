const express = require('express');
const connection = require('./connection');
const blogroute = require('./Router/blogroutes.js');
const router = require('./Router/blogroutes.js');

const app = express();
app.use(express.json());

app.use('/api/blog', blogroute);

connection().then(
    (res) => {
        console.log('Connected to database');
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`server listening on PORT: ${port}`)
        })
    }
).catch((err) => { console.log('error connecting to db') })

