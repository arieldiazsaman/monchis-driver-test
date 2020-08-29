const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    address: { type: String, index: true, default: '2dsphere' },
    coordinates: {
        type: [Number],
        required: true
    }
})

const trackingDriverSchema = Schema({
    driver_id: { type: Schema.Types.ObjectId, ref: 'driver' },
    date: Date,
    position: pointSchema
}, {
    timestamps: true,
    autoIndex: false
})

trackingDriverSchema.index({ 'position.coordinates': "2dsphere" }, { background: false })

const TrackingDrivers = mongoose.model('trackingDriver', trackingDriverSchema)

module.exports = TrackingDrivers