const DataTypes = require('sequelize')
const sequelize = require('../connection.js')


const Companies = sequelize.define('companies', {
    
    company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, { timestamps: false })


module.exports = Companies