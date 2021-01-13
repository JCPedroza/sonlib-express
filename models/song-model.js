const { ObjectId } = require('mongoose')

const { modelNames, messages } = require('../config/db-config')
const { makeModel } = require('./utils')

const name = {
  type: String,
  required: true,
  minlength: 2,
  maxlength: 128
}

const role = {
  type: String,
  required: true,
  minlength: 2,
  maxlength: 128
}

const author = {
  name,
  role
}

const authorArray = {
  type: [author]
}

const tag = {
  type: String,
  minlength: 2,
  maxlength: 128
}

const tagArray = {
  type: [tag]
}

const yearValidator = {
  validator: Number.isInteger,
  message: messages.yearValidator
}

const year = {
  type: Number,
  min: 0,
  max: 3000,
  validate: yearValidator
}

const key = {
  type: String,
  minlength: 1,
  maxlength: 32
}

const chords = {
  type: String,
  minlength: 1,
  maxlength: 1024
}

const createdBy = {
  type: ObjectId,
  required: true
}

const song = {
  name,
  authorArray,
  tagArray,
  year,
  key,
  chords,
  createdBy
}

module.exports = makeModel(song, modelNames.song)
