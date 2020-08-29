const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {

    const Address = sequelize.define('address', {
        user_id: {
            type: DataTypes.INTEGER
        },
        street1: {
            type: DataTypes.STRING
        }
    }, {
        schema: 'orders',
        tableName: 'v1_addresses',
        timestamps: false
    })

    return Address
}