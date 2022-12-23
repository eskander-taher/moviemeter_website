const express = require('express')
const router = express.Router()
const {getMovies} = require('../controllers/movieController')

router.route("/").get(getMovies)

module.exports = router