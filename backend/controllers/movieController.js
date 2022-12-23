const asyncHandler = require('express-async-handler')
const Movie = require('../models/movieModel')

// @desc    Get comments
// @route   GET /api/comments
// @access  Public
const getMovies = asyncHandler(async (req,res)=>{

    const movies = await makeMoviemeterMovies()

    const bad = movies.filter(movie=>{
        return movie.moviemeterRating <=3
    })
    const norm = movies.filter(movie=>{
        return movie.moviemeterRating > 3 && movie.moviemeterRating < 4
    })
    const good = movies.filter(movie=>{
        return movie.moviemeterRating >=4
    })

    res.status(200).json(movies)
})

async function makeMoviemeterMovies(){
    const movies = await Movie.find({ year: { $gte: 2014 } })

    const moviemetter = movies.map(movie=>{
        const {_id, plot,genres,runtime,poster,title,fullplot,released,year,imdb,tomatoes = {viewer: {rating: 4}}} = movie

        //get average rating
        let average = ((imdb.rating/2 || 3) +  tomatoes.viewer.rating ) / 2

        let moviemeterRating =  Math.round(average * 10) / 10 

        return {_id, plot,genres,runtime,poster,title,fullplot,released,year,imdb,tomatoes, moviemeterRating}
    })

    return moviemetter
}

module.exports = {
    getMovies
}