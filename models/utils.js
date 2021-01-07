const { Schema, model } = require('mongoose')

const { schemaOptions } = require('../config/db-config')

function makeModel (schemaSpec, modelName) {
  return model(modelName, Schema(schemaSpec, schemaOptions))
}

module.exports = {
  makeModel
}
