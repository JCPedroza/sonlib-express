const appMiddleware = require('./app-middleware')
// TODO: put all middleware logic in middleware folder
const pathMiddleware = require('../routes/path-middleware')
const authMiddleware = require('../auth/auth-middleware')

const order = [
  appMiddleware,
  authMiddleware,
  pathMiddleware
]

function set (app) {
  order.forEach(mw => mw.set(app))
}

module.exports = {
  set
}
