const express = require('express');
const router = express.Router();

const {
    createBlog,
    updateBlog,
    getAllBlog,
    getBlogByID,
    deleteBlog
} = require('../Controller/blogcontroller.js')

router.
    route('/').get(getAllBlog).post(createBlog)
router.
    route('/:id').patch(updateBlog).delete(deleteBlog).get(getBlogByID)

module.exports = router;