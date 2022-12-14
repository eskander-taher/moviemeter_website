const express = require('express')
const router = express.Router()
const {getComments, setComment, updateComment, deleteComment} = require('../controllers/commentController')


router.route("/").get(getComments).post(setComment)
router.route("/:id").put(updateComment).delete(deleteComment)


module.exports = router