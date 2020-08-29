/**
 * Connects the app with the the Postgres Database
 */
const postgresDB = require('./sequelizeInit')

const connectPostgresDB = async () => {
    try {
        await postgresDB.sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await postgresDB.sequelize.sync()
        console.log('Database synchronized.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectPostgresDB