const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{ timestamp: { type: Number } }]
},
    { timestamps: true }
);

const URL = mongoose.model('URL', urlSchema)
module.exports = URL;
