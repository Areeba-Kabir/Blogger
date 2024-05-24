const express = require('express');
const connection = require('./connection');
const blogroute = require('./Router/blogroutes.js');
const bloglogs = require('./Middleware/bloglog.js');
const app = express();

connection().then(
    () => {
        console.log('Connected to database');

        app.use(express.json());
        app.use(bloglogs('logs.txt'));
        app.use('/api/blog', blogroute);
        app.use(express.urlencoded({ extended: false }));

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`server listening on PORT: ${port}`)
        })
    }
).catch(() => {
    console.log('error connecting to db')
})

