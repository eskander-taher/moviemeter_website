const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel')
const User = require('../models/userModel')


// @desc    Get comments
// @route   GET /api/comments
// @access  Public 
const getComments = asyncHandler(async (req,res)=>{
    console.log(req.params.id)
    const comments = await  Comment.find({movie_id: req.params.id})
    res.status(200).json(comments)

})

// @desc    Set a comment
// @route   POST /api/comments
// @access  Private 
const setComment = asyncHandler(async (req,res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }

    const comment = await Comment.create({
        name: req.body.name,
        email: req.body.email,
        movie_id: req.body.movieID,
        text: req.body.text,
    })

    res.status(201).json(comment)
})

// @desc    Delete a comment
// @route   DELETE /api/comments/:id
// @access  Private 
const deleteComment = asyncHandler(async (req,res)=>{
    const comment = await Comment.findById(req.params.id)

    await comment.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getComments,
    setComment,
    deleteComment,
}