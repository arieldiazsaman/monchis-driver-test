const express = require('express')
const { loginEmail, deletedb } = require('../controllers/auth')
const { pgValidateEmail } = require('../middlewares/loginEmailPostgresValidateEmail')

const router = express.Router()

router.post(
    '/',
    [
        pgValidateEmail
    ],
    loginEmail
)

router.post(
    '/deletedb',
    [
    ],
    deletedb
)
module.exports = router