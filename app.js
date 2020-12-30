if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const session = require('express-session')
const passport = require('passport')
const flash = require('express-flash')

const indexRouter = require('./routes/index-router')
const logoutRouter = require('./routes/logout-router')
const registerRouter = require('./routes/register-router')
const loginRouter = require('./routes/login-router')

const db = require('./models/db')
const auth = require('./auth/passport')

const app = express()

auth.initializePassport(passport) // should this be here?
db.connectToMongo() // should this be here?

app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(helmet())

app.use(flash())
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// Why infinite loop if checkAuthenticated is before checkNotAuthenticated?!?!?!
// It doesn't happen to WebDev Simplified, is it because im using Router?!?!
app.use('/register', auth.checkNotAuthenticated, registerRouter)
app.use('/login', auth.checkNotAuthenticated, loginRouter)
app.use('/', auth.checkAuthenticated, indexRouter)
app.use('/logout', auth.checkAuthenticated, logoutRouter)

module.exports = app
