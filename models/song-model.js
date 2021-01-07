const { isInt } = require('validator')

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

const genre = {
  type: String,
  minlength: 2,
  maxlength: 128
}

const genreArray = {
  type: [genre]
}

const yearValidator = {
  validator: isInt,
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
  minlength: 6,
  maxlength: 32
}

const chords = {
  type: String,
  minlength: 8,
  maxlength: 1024
}

const song = {
  name,
  authorArray,
  genreArray,
  year,
  key,
  chords
}

module.exports = makeModel(song, modelNames.song)
