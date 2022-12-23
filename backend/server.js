const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')

const {errorHandler} = require('./middleware/errorMiddleware')


const port = process.env.PORT || 5000 

const connectDB = require('./config/db')
connectDB()


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/movies', require('./routes/movieRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/comments', require('./routes/commentRoutes'))

app.use(errorHandler)

app.listen(port,()=> console.log(`listening on port ${port}`))