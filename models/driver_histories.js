const mongoose = require('mongoose')
const Schema = mongoose.Schema

const historySchema = Schema({
    request_id: { type: Schema.Types.ObjectId, ref: 'request' },
    delivery_state_id: { type: Schema.Types.ObjectId, ref: 'deliveryState' },
    tracking_drivers_id: [{ type: Schema.Types.ObjectId, ref: 'trackingDriver' }],
    total_distance: String,
    total_delivery_time: String/*El tiempo entre cambio de estado*/
}, {
    timestamps: true
})

const Histories = mongoose.model('history', historySchema)

module.exports = Histories