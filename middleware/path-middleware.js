const indexRouter = require('../routes/index-router')
const logoutRouter = require('../routes/logout-router')
const registerRouter = require('../routes/register-router')
const loginRouter = require('../routes/login-router')
const songsRouter = require('../routes/songs-router')
const addsongRouter = require('../routes/addsong-router')

const { pathMiddleware } = require('../routes/utils')

// Why infinite loop if checkAuthenticated is before checkNotAuthenticated?!?!?!
const registerMW = pathMiddleware('/register', registerRouter)
const loginMW = pathMiddleware('/login', loginRouter)
const indexMW = pathMiddleware('/', indexRouter, true)
const logoutMW = pathMiddleware('/logout', logoutRouter, true)
const songsMW = pathMiddleware('/songs', songsRouter, true)

const order = [
  registerMW,
  loginMW,
  indexMW,
  logoutMW,
  songsMW
]

function set (app) {
  order.forEach(pathmw => app.use(...pathmw))
}

module.exports = {
  order,
  set
}
