const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = Schema({
  contact: {
    phone: String,
    email: String
  },
  invoice: {
    ruc: String,
    razon_social: String
  },
  name: String,
  enabled: Boolean,
  deleted_at: Date,
  session_token: String
}, {
  timestamps: true
})

const Clients = mongoose.model('client', clientSchema)

module.exports = Clients