const express = require('express')
const path = require('path')
const morgan = require('morgan')
const flash = require('express-flash')
// const cors = require('cors')
// const helmet = require('helmet')

// const { corsOptions } = require('../config/cors-config')

const homePath = path.resolve(__dirname, '..')
const staticPath = path.join(homePath, 'public')

const staticMW = express.static(staticPath)
const urlencodedMW = express.urlencoded({ extended: false })
const morganMW = morgan('dev')
const flashMW = flash()
// const helmetMW = helmet()
// const corsMW = cors(corsOptions)

const order = [
  staticMW,
  urlencodedMW,
  morganMW,
  flashMW
//  corsMW,
//  helmetMW
]

function set (app) {
  order.forEach(appmw => app.use(appmw))
}

module.exports = {
  order,
  set
}
