const { Schema, model } = require('mongoose')
const { isEmail } = require('validator')

const { schemaOptions, modelNames } = require('./db-config')

const username = {
  type: String,
  unique: true,
  required: true,
  minlength: 4,
  maxlength: 64
}

const password = {
  type: String,
  required: true
}

const email = {
  type: String,
  required: true,
  validate: {
    validator: isEmail,
    message: 'Invalid email.'
  }
}

const userSpec = {
  username,
  password,
  email
}

const userSchema = new Schema(userSpec, schemaOptions)

const userModel = model(modelNames.user, userSchema)

module.exports = userModel
