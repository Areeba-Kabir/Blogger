const blog = require('../Model/blog.js');


// Create blog
//const createBlog = async (req, res) => {
exports.createBlog = async (req, res) => {
    try{
        const body = req.body;
        const myblog = await blog.create(body);
        res.status(201).json({ message:' Blog created! ', myblog })
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Update a blog
exports.updateBlog = async (req, res) => {
    try {
        const myblog = await blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!myblog) {
            return res.status(400).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog updated!', myblog });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get blog by id
exports.getBlogByID = async (req, res) => {
    try {
        const myblog = await blog.findById(req.params.id);
        if (!myblog) {
            res.status(400).json('Blog not found!');
        }
            res.status(200).json({message: 'Blog!',  myblog});
    }
    catch (err) {
        res.status(404).json('Blog not found!');
    }
}

// Get all blogs
exports.getAllBlog = async (req, res) => {
    try {
        const myblogs = await blog.find();
        res.status(200).json(myblogs);
    }
    catch (err) {
        res.status(404).json({message:'Blogs not found'})
    }
}

// Delete blog by id
exports.deleteBlog = async (req, res) => {
    try {
            const myblog = await blog.findByIdAndDelete(req.params.id);
            if (!myblog) {
                response.status(404).json({message: 'Blog not found'})
            }
            res.status(200).json({message:'Blog deleted', myblog})
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
}

// module.exports={createBlog,updateBlog,getBlogByID,getAllBlog,deleteBlog}