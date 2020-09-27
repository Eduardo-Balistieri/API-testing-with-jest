const express = require('express')

const LaunchesController = require('./controllers/LaunchesController.js')
const CompaniesController = require('./controllers/CompaniesController.js')


const routes = express.Router()

const launchesController = new LaunchesController()
const companiesController = new CompaniesController()


routes.get('/companies', companiesController.getAll)
routes.post('/companies', companiesController.create)


routes.get('/launches', launchesController.getAll)
routes.get('/launches-statistics', launchesController.getLaunchesStatistics)

routes.post('/launches', launchesController.create)


module.exports = routes