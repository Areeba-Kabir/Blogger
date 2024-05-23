const blog = require('../Model/blog.js');

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

exports.updateBlog = async (req, res) => {
    try {
            const myblog = await blog.findByIdAndUpdate(req.params.id,req.body, { new: true, runValidators: true });
            res.status(201).json('Blog updated!\n',myblog)
        } 
    catch (err) {
        res.status(404).json({message: err.message});
    }
}

exports.getBlogByID = async (req, res) => {
    try {
         const b_id = req.params.id;
         if (b_id != -1) {
            const myblog =await blog.findByID(b_id);
            res.status(200).json(myblog);
        }
    }
    catch (err) {
        res.status(404).json('Blog not found!');
    }
}

exports.getAllBlog = async (req, res) => {
    try {
        const myblogs = await blog.find();
        res.status(200).json(myblogs);
    }
    catch (err) {
        res.status(404).json({message:'Blogs not found'})
    }
}

exports.deleteBlog = async (req, res) => {
    try {
            const myblog = blog.findByIdAndDelete(req.params.id);
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