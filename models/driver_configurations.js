const mongoose = require('mongoose')
const Schema = mongoose.Schema

const configurationSchema = Schema({
    name: String
}, {
    timestamps: true
})

const Configurations = mongoose.model('configuration', configurationSchema)

module.exports = Configurations