const auth = require('../auth/passport')

function pathMiddleware (path, router, checkAuth = false) {
  return [
    path,
    checkAuth ? auth.checkAuthenticated : auth.checkNotAuthenticated,
    router
  ]
}

module.exports = {
  pathMiddleware
}
