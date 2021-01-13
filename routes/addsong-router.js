const { Router } = require('express')

const addsongControl = require('../controllers/addsong-control')

const addsongRouter = new Router()

addsongRouter
  .route('/')
  .get(addsongControl.get)
  .post(addsongControl.post)

module.exports = addsongRouter
