const mongoose = require('mongoose');

require('dotenv').config();

const connection = () => {
    return mongoose.connect(process.env.URL);
};

module.exports = connection;

