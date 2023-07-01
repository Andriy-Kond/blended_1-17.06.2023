const express = require("express")
const connectDB = require('../config/connectDB')
require('colors')
const errorHandler = require('./middlewares/errorHandler')
const path = require('path')

const configPath = path.join(__dirname, "..", 'config', '.env')
require('dotenv').config({path: configPath})

const app = express()
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use('/api/v1', require("./routes/carsRoutes"))

app.use(errorHandler)
const { PORT } = process.env;
connectDB()
app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`.green.bold.italic)})
