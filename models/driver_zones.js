const mongoose = require('mongoose')
const Schema = mongoose.Schema

const polygonSchema = Schema({
    type: {
        type: String,
        enum: ['Polygon'],
        required: true
    },
    coordinates: {
        type: [[[Number]]],
        required: true
    }
})

const zoneSchema = Schema({
    zone_name: String,
    max_drivers: Number,
    available: {
        from: String,
        to: String
    },
    pointsZone: polygonSchema,
    color: String,
    enabled: Boolean,
    deleted: Boolean
}, {
    timestamps: true
})

const Zones = mongoose.model('zone', zoneSchema)

module.exports = Zones