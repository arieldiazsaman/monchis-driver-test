const express = require('express')
const bodyparser = require('body-parser')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const auth = require('./routes/auth')
const driver = require('./routes/driver')
const connectMongoDB = require('./util/connectMongoDB')
const connectPostgresDB = require('./util/connectPostgresDB')

dotEnv.config()

const hostname = process.env.HOSTNAME
const port = process.env.PORT

connectPostgresDB()
connectMongoDB()

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use('/login', auth)
app.use('/api', driver)

//module.exports = app
app.listen(port, hostname, () => {
    console.log('Monchis relational login')
})