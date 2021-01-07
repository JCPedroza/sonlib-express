const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')

const database = require('../models/database')

const SECRET = process.env.SECRET
const mongooseConnection = database.getConnection()
const mongoStore = new MongoStore({ mongooseConnection })
const sessionOptions = {
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  store: mongoStore
}

const sessionMW = session(sessionOptions)
const passportInitMW = passport.initialize()
const passportSessionMW = passport.session()

const order = [
  sessionMW,
  passportInitMW,
  passportSessionMW
]

function set (app) {
  order.forEach(authmw => app.use(authmw))
}

module.exports = {
  order,
  set
}
