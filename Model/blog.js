const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:
        { type: String, required: true },
    content:
        { type: String, required: true },
    author:
        { type: String, required: true },
        //{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt:
        { type: Date, default: Date.now },
    updatedAt:
        { type: Date, default: Date.now }
})

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;