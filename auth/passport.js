const passport = require('passport')
const { Strategy } = require('passport-local')
const { compare } = require('bcrypt')

const User = require('../models/user-model')

async function authenticateUser (username, password, done) {
  try {
    const user = await User.findOne({ username })
    if (!user) {
      done(null, false, { message: "Username doesn't exist." })
    } else if (await compare(password, user.password)) {
      done(null, user)
    } else {
      done(null, false, { message: 'Incorrect password.' })
    }
  } catch (err) {
    done(err)
  }
}

function serializeUser (user, done) {
  done(null, user._id)
}

async function deserializeUser (id, done) {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
}

function initializePassport () {
  passport.use(new Strategy(authenticateUser))
  passport.serializeUser(serializeUser)
  passport.deserializeUser(deserializeUser)
}

function checkAuthenticated (req, res, nxt) {
  if (req.isAuthenticated()) {
    nxt()
  } else {
    res.redirect('/login')
  }
}

function checkNotAuthenticated (req, res, nxt) {
  if (req.isAuthenticated()) {
    res.redirect('/')
  } else {
    nxt()
  }
}

module.exports = {
  initializePassport,
  checkAuthenticated,
  checkNotAuthenticated
}
