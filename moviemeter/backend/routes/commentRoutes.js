const express = require('express')
const router = express.Router()

const {getComments, setComment, deleteComment} = require('../controllers/commentController')
const { protect } = require('../middleware/authMiddleware')

router.route("/:id").get(getComments)
router.route("/").post(protect, setComment)
router.route("/:id").delete(deleteComment)


module.exports = router