const { Router } = require('express')

const songControl = require('../controllers/song-control')
const addsongRouter = require('./addsong-router')

const songsRouter = new Router()

songsRouter
  .route('/')
  .get(songControl.get)

songsRouter.use('/add', addsongRouter)

module.exports = songsRouter
