const Companies = require('../database/models/Companies.js')
const db = require('../database/connection.js')


module.exports = class CompaniesController {

    async getAll(req, res) {
        const queryResult = await Companies.findAll()
        res.json(queryResult)
    }


    async create(req, res) {
        const { company, country } = req.body

        if (!company || !country || !company.trim() || !country.trim())
            return res.status(400).json({ error: 'Missing user information' })

        /***/
        let queryResult = await db.query(`SELECT * FROM companies WHERE company = "${company}"`, {
            model: Companies
        })
        if (queryResult.length > 0)
            return res.status(400).json({ error: `${company} already exists` })
        /***/

        await Companies.create({ company, country })
        res.status(201).send()
    }
}
