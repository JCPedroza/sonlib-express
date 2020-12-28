const { connect } = require('mongoose')

const { mongoOptions } = require('./db-config')

const DBURL = process.env.DBURL
const logMsg = `\n  >> Mongo connected to ${DBURL}\n`
const logFun = () => console.log(logMsg)

function connectToMongo() {
  connect(DBURL, mongoOptions, logFun)
}

module.exports = {
  connectToMongo
}
