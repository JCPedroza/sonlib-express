require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const indexRouter = require('./routes/index-router')

const app = express()

app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(helmet())

app.use('/', indexRouter)

module.exports = app
