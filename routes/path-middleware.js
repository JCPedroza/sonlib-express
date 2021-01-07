const indexRouter = require('./index-router')
const logoutRouter = require('./logout-router')
const registerRouter = require('./register-router')
const loginRouter = require('./login-router')
const songsRouter = require('./songs-router')

const { pathMiddleware } = require('./utils')

// Why infinite loop if checkAuthenticated is before checkNotAuthenticated?!?!?!
const register = pathMiddleware('/register', registerRouter)
const login = pathMiddleware('/login', loginRouter)
const index = pathMiddleware('/', indexRouter, true)
const logout = pathMiddleware('/logout', logoutRouter, true)
const songs = pathMiddleware('/songs', songsRouter, true)

const order = [
  register,
  login,
  index,
  logout,
  songs
]

function set (app) {
  order.forEach(mw => app.use(...mw))
}

module.exports = {
  set
}
