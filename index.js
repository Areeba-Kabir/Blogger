const express = require('express');
const connection = require('./connection');
const blogroute = require('./Router/blogroutes.js');
const router = require('./Router/blogroutes.js');


connection().then(
    () => {
        console.log('Connected to database');
        const app = express();
        app.use(express.json());

        app.use('/api/blog', blogroute);

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`server listening on PORT: ${port}`)
        })
    }
).catch(() => {
    console.log('error connecting to db')
})

