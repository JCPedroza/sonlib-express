const appMiddleware = require('./app-middleware')
const pathMiddleware = require('./path-middleware')
const authMiddleware = require('./auth-middleware')

const order = [
  appMiddleware,
  authMiddleware,
  pathMiddleware
]

function set (app) {
  order.forEach(mwgroup => mwgroup.set(app))
}

module.exports = {
  order,
  set
}
