const express = require('express')
const { requestDriver, getDriverState, cancelRequest } = require('../controllers/driver')

const router = express.Router()

router.post(
    '/request_driver',
    [],
    requestDriver
)

router.get(
    '/:id_solicitud',
    [],
    getDriverState
)

router.put(
    '/request_driver/:id_driver',
    [],
    cancelRequest
)

module.exports = router