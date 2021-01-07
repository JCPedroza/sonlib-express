if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const path = require('path')

const db = require('./models/db')
const auth = require('./auth/passport')
const pathMiddleware = require('./routes/path-middleware')

const SECRET = process.env.SECRET
const mongoStore = new MongoStore({ mongooseConnection: db.getConnection() })
const sessionOptions = {
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  store: mongoStore
}

db.connectToMongo()
auth.initializePassport(passport)

const app = express()

app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use(flash())
app.use(cookieParser(SECRET))
app.use(session(sessionOptions))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')))

pathMiddleware.set(app)

module.exports = app
