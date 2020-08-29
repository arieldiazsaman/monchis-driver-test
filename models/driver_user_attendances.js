const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userAttendanceSchema = Schema({
  driver_id: { type: Schema.Types.ObjectId, ref: 'driver' },
  driverZoneDate_id: { type: Schema.Types.ObjectId, ref: 'driverZoneDate' },
  entry_time: {
    date: Date,
    tracking_id: { type: Schema.Types.ObjectId, ref: 'driver' }
  },
  exit_time: {
    date: Date,
    tracking_id: { type: Schema.Types.ObjectId, ref: 'driver' },
    exit_reason_id: { type: Schema.Types.ObjectId, ref: 'exitReason' }
  },
  amount_order_delivered: Number
}, {
  timestamps: true
})

const UserAttendances = mongoose.model('userAttendance', userAttendanceSchema)

module.exports = UserAttendances