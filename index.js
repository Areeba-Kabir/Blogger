const express = require('express');
const connection = require('./connection');
const blogroute = require('./Router/blogroutes.js');
const router = require('./Router/blogroutes.js');


connection().then(
    (res) => {
        console.log('Connected to database');
    }
).catch((err) => {
    console.log('error connecting to db')
})

const app = express();
app.use(express.json());

app.use('/api/blog', blogroute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
       console.log(`server listening on PORT: ${port}`)
})