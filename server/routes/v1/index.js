const express = require('express')
const healthRoute = require('./health.route')
const helloWorldRoute = require('./helloworld.route')

const router = express.Router()

router.use('/health', healthRoute)
router.use('/', helloWorldRoute)

module.exports = router
