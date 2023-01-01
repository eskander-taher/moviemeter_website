const mongoose = require('mongoose')

const movieSchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        plot: {
            type: String,
        },
        genres: {
            type: Array,
        },
        released: {
            type: Date,
        },
        runtime: {
            type: Number,
        },
        fullplot: {
            type: String,
        },
        poster: {
            type: String,
        },
        imdb: {
            type: Object,
        },
        tomatoes: {
            type: Object,
        },
        year: {
            type: Number,
        }
  }
)

module.exports = mongoose.model('Movie', movieSchema)