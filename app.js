if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')

const database = require('./models/database')
const auth = require('./auth/passport')
const view = require('./views/view')
const middleware = require('./middleware/middleware')

const app = express()

database.initialize()
auth.initialize()

view.set(app)
middleware.set(app)

module.exports = app
