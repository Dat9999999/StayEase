const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()
const routes = require('./routes')

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

//MIDDLEWARE
// security 
app.use(helmet())
// moniter app 
app.use(morgan('dev'))
//compress response
app.use(compression())


// DATABASE
require('./dbs/connect.mongo')
const countConnection = require('./helpers/check.connection')
countConnection()

module.exports = app;