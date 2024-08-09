const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const xss = require('xss-clean')

const config = require('./config')

const app = express()

app.use(morgan('common'))
app.use(helmet({
  contentSecurityPolicy: false
}))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(xss())
app.use(mongoSanitize())

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/v1', require('./routes/v1'))
app.use(require('./routes/errors').clientErrorHandler)
app.use(require('./routes/errors').errorHandler)

mongoose.connect(config.mongoose.connectionString, config.mongoose.options).then(() => {
  console.log('Connected to MongoDB')
  app.listen(config.port, () =>
    console.log(`App listening on port ${config.port}`)
  )
}).catch(err => {
  console.error(err)
  console.log('Failed to connect to MongoDB')
})
