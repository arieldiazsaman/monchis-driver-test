const { response } = require('express')

const requestDriver = async (req, res = response) => {
    res.json(req.body)
}

const getDriverState = async (req, res = response) => {
    res.json(req.params.id_solicitud)
}

const cancelRequest = async (req, res = response) => {
    req.body.id_driver = req.params.id_driver
    res.json(req.body)
}

module.exports = {
    requestDriver,
    getDriverState,
    cancelRequest
}