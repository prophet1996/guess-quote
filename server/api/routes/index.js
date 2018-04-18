const express = require('express')
const userRoutes = require('./user')
const router = express.Router()
//TODO:Import future routes here

//TODO:apple those routes to router here
router.use('/user',userRoutes)

module.exports =router
