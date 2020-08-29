const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paymentSchema = Schema({
    range_min_meters: Number,
    range_max_meters: Number,
    amount_to_pay: String,
    driver_zone_id: { type: Schema.Types.ObjectId, ref: 'driverZoneDate' },
    enabled: Boolean,
    deleted: Boolean
}, {
    timestamps: true
})

const Payments = mongoose.model('payment', paymentSchema)

module.exports = Payments