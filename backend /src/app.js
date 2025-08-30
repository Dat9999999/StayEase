const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()


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

app.get('/', (req, res) => {
    const strContent = 'Hello World! '.repeat(1000000)
    const result = strContent.length
    return res.status(200).json({
        message: `Hello World! ${result}`,
        metatdata: strContent
    })
})
module.exports = app;