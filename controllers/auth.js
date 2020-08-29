const { response } = require('express')
const { generarJWT } = require('../util/jwt')
const DeliveryStates = require('../models/driver_delivery_states')
const { deliveryStates } = require('../util/constants')
const Configurations = require('../models/driver_configurations')
const Zones = require('../models/driver_zones')
const TrackingDrivers = require('../models/driver_tracking_driver')

const loginEmail = async (req, res = response) => {
    const user = req.user
    if (req.body.password === user.password) {
        user.dataValues.monchis_token = await generarJWT(user.id, user.first_name)
        res.json(user)
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.end('users.wrong_password')
    }
}

const deletedb = async (req, res = response) => {
    const states = (await DeliveryStates.find()).filter(({ _id }) => _id)
    const confs = (await Configurations.find()).filter(({ _id }) => _id)
    const zones = (await Zones.find()).filter(({ _id }) => _id)
    const tracks = (await TrackingDrivers.find()).filter(({ _id }) => _id)
    await DeliveryStates.deleteMany({ _id: { $in: states } })
    await Configurations.deleteMany({ _id: { $in: confs } })
    await Zones.deleteMany({ _id: { $in: zones } })
    await TrackingDrivers.deleteMany({ _id: { $in: tracks } })
    res.end('deleted')
}

module.exports = {
    loginEmail,
    deletedb
}