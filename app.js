if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')

const database = require('./models/db')
const auth = require('./auth/passport')
const middleware = require('./middleware/mw')
const view = require('./views/view')

const app = express()

database.connectToMongo()
auth.initializePassport()
view.set(app)
middleware.set(app)

module.exports = app
