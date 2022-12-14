const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    }
  }
)

module.exports = mongoose.model('Comment', commentSchema)