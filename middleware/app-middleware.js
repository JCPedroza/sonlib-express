const express = require('express')
const path = require('path')
const morgan = require('morgan')
const flash = require('flash')

const homePath = path.resolve(__dirname, '..')
const staticPath = path.join(homePath, 'public')

const staticMW = express.static(staticPath)
const urlencodedMW = express.urlencoded({ extended: false })
const morganMW = morgan('dev')
const flashMW = flash()

const order = [
  staticMW,
  urlencodedMW,
  morganMW,
  flashMW
]

function set (app) {
  order.forEach(mw => app.use(mw))
}

module.exports = {
  set
}
