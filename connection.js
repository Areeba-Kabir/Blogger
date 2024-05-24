const mongoose = require('mongoose');

require('dotenv').config();

const connection = async () => {
    return await mongoose.connect(process.env.URL);
};

module.exports = connection;

