const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000 

const app = express()

const {errorHandler} = require('./middleware/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const connectDB = require('./config/db')
connectDB()

app.use('/api/comments', require('./routes/commentRoutes'))
app.use(errorHandler)


app.listen(port,()=> console.log(`listening on port ${port}`))