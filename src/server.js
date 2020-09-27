const express = require('express')
const cors = require('cors')

const db = require('./database/connection.js')
const routes = require('./routes.js')


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


const init = async () => {
    await db.sync()
    console.log('All models were synchronized successfully.');
}
init()


app.listen(9090, () => console.log('Listening port 9090...'))
