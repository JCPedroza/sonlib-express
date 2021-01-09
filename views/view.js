const path = require('path')

const homePath = path.resolve(__dirname, '..')
const staticPath = path.join(homePath, 'public')

function set (app) {
  app.set('view engine', 'pug')
  app.locals.basedir = staticPath
}

module.exports = {
  set
}
