const { isEmail } = require('validator')

const { modelNames, messages } = require('../config/db-config')
const { makeModel } = require('./utils')

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

const emailValidator = {
  validator: isEmail,
  message: messages.emailValidator
}

const email = {
  type: String,
  required: true,
  validate: emailValidator
}

const karma = {
  type: Number,
  required: true
}

const user = {
  username,
  password,
  email,
  karma
}

module.exports = makeModel(user, modelNames.user)
