const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel')


// @desc    Get comments
// @route   GET /api/comments
// @access  Public 
const getComments = asyncHandler(async (req,res)=>{
    res.status(200).json({message: "Get comments"})
})

// @desc    Set a comment
// @route   POST /api/comments
// @access  Private 
const setComment = asyncHandler( async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({message: "Set comment"})
})

// @desc    Update a comment
// @route   PUT /api/comments/:id
// @access  Private 
const updateComment = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `update comment ${req.params.id}`})
})

// @desc    Delete a comment
// @route   DELETE /api/comments/:id
// @access  Private 
const deleteComment = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `delete comment ${req.params.id}`})
})

module.exports = {
    getComments,
    setComment,
    updateComment,
    deleteComment
}