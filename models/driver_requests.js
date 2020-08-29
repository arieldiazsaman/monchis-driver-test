const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = Schema({
    driver_id: {type: Schema.Types.ObjectId, ref: 'driver'},
    driver_request_state_id: {type: Schema.Types.ObjectId, ref: 'deliveryState'},
	external_order_id: String,
	data_origin: String,
	data_destination: String,
	items: String,
	total_order: String,
	payment_type: String,
	order_comment: String,
	invoice: String
}, {
    timestamps: true
})

const Requests = mongoose.model('request', requestSchema)

module.exports = Requests