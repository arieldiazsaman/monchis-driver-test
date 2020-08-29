const mongoose = require('mongoose')
const Schema = mongoose.Schema

const driverSchema = Schema({
    contact: {
        phone: String,
        email: String
    },
    document_number: String,
    first_name: String,
    last_name: String,
    birth_date: Date,
    gender: String,
    token: String,
    enabled: Boolean,
    deleted_at: Date
}, {
    timestamps: true
})

const Drivers = mongoose.model('driver', driverSchema)

module.exports = Drivers