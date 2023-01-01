const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  {
    movie_id:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Movie'
    },
    name: {
      type: String,
      required: [true, 'Please add a name value'],
    },
    email: {
      type: String,
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    date: {
      type: Date,
    },
  },{
    timestamps: true
  }
)

module.exports = mongoose.model('Comment', commentSchema)