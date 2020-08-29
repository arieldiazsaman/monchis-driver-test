const { response } = require('express')
const postgresDB = require('../util/sequelizeInit')
const Zones = require('../models/driver_zones')
const TrackingDrivers = require('../models/driver_tracking_driver')

const pgValidateEmail = async (req, res = response, next) => {
    /**
     * Pruebas Schemas
     */
    const colorado = {
        type: 'Polygon',
        coordinates: [[
            [-109, 41],
            [-102, 41],
            [-102, 37],
            [-109, 37],
            [-109, 41]
        ]]
    }
    const newZone = { zone_name: 'Colorado', pointsZone: colorado }
    const zones = await Zones.insertMany([newZone])
    const newTrack = { position: { type: 'Point', coordinates: [-104.9903, 39.7392] } }
    const tracks = await TrackingDrivers.insertMany([newTrack,
        { position: { type: 'Point', coordinates: [28.442894, 77.341299] } },
        { position: { type: 'Point', coordinates: [28.412894, 77.311299] } },
        { position: { type: 'Point', coordinates: [28.422894, 77.342299] } },
        { position: { type: 'Point', coordinates: [28.433894, 77.334299] } }
    ])
    const result = await TrackingDrivers.findOne({
        position: {
            $geoWithin: {
                $geometry: colorado
            }
        }
    })
    await TrackingDrivers.createIndexes().catch(e => console.error(e))
    const result2 = await TrackingDrivers.aggregate(
        [
            {
                $geoNear: {
                    near: {
                        type: "Point", coordinates: [28.411134, 77.331801]
                    },
                    distanceField: "shopDistance", $maxDistance: 150000, spherical: true
                }
            },
            {
                $match: {
                    _id: tracks[1]._id
                }
            }
        ]
    )
    /**
     * Fin prueba
     */

    if (!req.body.email) {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        return res.end('users.user_not_found')
    }

    req.body.email = req.body.email.trim().toLowerCase()
    postgresDB.User.hasMany(postgresDB.Address, { foreignKey: 'user_id' })
    postgresDB.Address.belongsTo(postgresDB.User, { foreignKey: 'user_id' })
    const users = await postgresDB.User.findAll({
        where: {
            email: req.body.email,
            deleted: false
        },
        include: [
            postgresDB.Address
        ]
    })

    if (users.length > 0) {
        req.user = users[0]
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        return res.end('users.user_not_found')
    }

    next()
}

module.exports = {
    pgValidateEmail
}