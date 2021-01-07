const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')

const db = require('../models/db')

const SECRET = process.env.SECRET
const mongoStore = new MongoStore({ mongooseConnection: db.getConnection() })
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
  order.forEach(mw => app.use(mw))
}

module.exports = {
  set
}
