/**
 * Initializes the Sequelize connection
 */
const { Sequelize } = require('sequelize')
const dotEnv = require('dotenv')

dotEnv.config()

const postgresDB_name = process.env.POSTGRESDBNAME
const postgresDB_username = process.env.POSTGRESDBUSERNAME
const postgresDB_password = process.env.POSTGRESDBPASSWORD
const postgresDB_host = process.env.POSTGRESDBHOST
const postgresDB_dialect = process.env.POSTGRESDBDIALECT

const sequelize = new Sequelize(postgresDB_name, postgresDB_username, postgresDB_password, {
    host: postgresDB_host,
    dialect: postgresDB_dialect
})

const db = {};

/**
 * Models declaration
 */
db.User = require('../models/user')(sequelize)
db.Address = require('../models/address')(sequelize)

db.sequelize = sequelize

module.exports = db;