const mongoose = require('mongoose')
const Schema = mongoose.Schema

const driverZoneDateSchema = Schema({
    zone_id: { type: Schema.Types.ObjectId, ref: 'zone' },
    driver_id: [{ type: Schema.Types.ObjectId, ref: 'driver' }],
    date: Date,
    max_drivers: Number,
    enabled: Boolean
}, {
    timestamps: true
})

const DriverZoneDates = mongoose.model('driverZoneDate', driverZoneDateSchema)

module.exports = DriverZoneDates