const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deliveryStateSchema = Schema({
    _id: Number,
    name: String,
    enabled_client: Boolean,
    nuevoAtributo: {
        valorUno: String,
        valorDos: { type: Schema.Types.ObjectId, ref: 'configuration' }
    }
}, {
    timestamps: true
})

const DeliveryStates = mongoose.model('deliveryState', deliveryStateSchema)

module.exports = DeliveryStates