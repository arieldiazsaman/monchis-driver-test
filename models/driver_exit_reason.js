const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exitReasonSchema = Schema({
    _id: Number
}, {
    timestamps: true
})

const ExitReason = mongoose.model('exitReason', exitReasonSchema)

module.exports = ExitReason