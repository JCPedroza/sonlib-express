const { Router } = require('express')

const songControl = require('../controllers/song-control')

const songsRouter = new Router()

songsRouter
  .route('/')
  .get(songControl.get)
  .post(songControl.post)

module.exports = songsRouter
