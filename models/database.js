const { connect, connection } = require('mongoose')

const { mongoOptions } = require('../config/db-config')

const DBURL = process.env.DBURL
const logMsg = `\n  >> DB connected to ${DBURL}\n`
const logFun = () => console.log(logMsg)

function initialize () {
  connect(DBURL, mongoOptions, logFun)
}

function getConnection () {
  return connection
}

module.exports = {
  initialize,
  getConnection
}
