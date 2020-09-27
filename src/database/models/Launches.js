const DataTypes = require('sequelize')
const sequelize = require('../connection.js')

const Companies = require('./Companies.js')


const Launches = sequelize.define('launches', {
    
    launch_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    success: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    failed: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    company_id: {
        type: DataTypes.NUMBER,
        references: {
            model: Companies,
            key: 'company_id'
        }
    }

}, { timestamps: false })


module.exports = Launches