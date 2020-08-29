const mongoose = require('mongoose')
const dotEnv = require('dotenv')

dotEnv.config()

const MONGODB_URI = process.env.MONGODB_URI

const connectMongoDB = async () => {

    mongoose.connect(MONGODB_URI)
    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'Database Connection error:'))
    db.once('open', function () {
        console.log('Connected to Database')
    })
}

module.exports = connectMongoDB