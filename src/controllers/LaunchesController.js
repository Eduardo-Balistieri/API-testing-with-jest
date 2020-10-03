const db = require('../database/connection.js')
const Companies = require('../database/models/Companies.js')
const Launches = require('../database/models/Launches.js')


const { calculatePercentage, calculateMean, calculateStandartDeviation } = require('../Math/functions.js')


module.exports = class LaunchesController {

    async getAll(req, res) {
        let queryResult = await db.query('SELECT * FROM launches INNER JOIN companies ON launches.company_id = companies.company_id', {
            model: Launches
        })
        res.json(queryResult)
    }



    async getLaunchesStatistics(req, res) {
        const { companyName } = req.body

        let queryResult = await db.query(`SELECT * FROM companies WHERE company = "${companyName}"`, {
            model: Companies,
            raw: true
        })
        if (queryResult.length <= 0)
            return res.status(400).json({ error: 'This company does\'t exists' })


        const { company_id } = queryResult[0]
        let launchesData = await db.query(`SELECT year, success, failed FROM launches WHERE company_id = ${company_id}`, {
            model: Launches,
            raw: true
        })


        let successCount = 0,
            failsCount = 0

        for (let launchData of launchesData) {
            const { success, failed } = launchData

            successCount = successCount + success
            failsCount = failsCount + failed
        }
        const total = successCount + failsCount


        const responseData = {
            launches: launchesData,
            total,
            successCount,
            failsCount,

            successPercentage: calculatePercentage(successCount, total),
            failurePercentage: calculatePercentage(failsCount, total),

            launchesPerYear: calculateMean(total, launchesData.length),

            successPerYear: calculateMean(successCount, launchesData.length),
            failurePerYear: calculateMean(failsCount, launchesData.length),
        }

        const launchesPerYear = launchesData.map(launch => launch.success + launch.failed)
        responseData['launchesPerYearStd'] = calculateStandartDeviation(launchesPerYear)

        res.json(responseData)
    }



    async create(req, res) {
        const { year, success, failed, companyName } = req.body

        if (!year || !success || !failed || !companyName || !companyName.trim())
            return res.status(400).json({ error: 'Missing user information' })

        /***/
        let queryResult = await db.query(`SELECT * FROM companies WHERE company = "${companyName}"`, {
            model: Companies,
            raw: true
        })
        if (queryResult.length <= 0)
            return res.status(400).json({ error: 'This company does\'t exists' })
        /***/

        const company = queryResult[0]

        await Launches.create({ year, success, failed, company_id: company.company_id })
        res.status(201).send()
    }
}
