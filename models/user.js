const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize) => {

    const User = sequelize.define('user', {
        first_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        deleted: {
            type: DataTypes.BOOLEAN
        },
        password: {
            type: DataTypes.CHAR
        }
    }, {
        schema: 'orders',
        tableName: 'v1_users',
        timestamps: false
    })

    return User
}