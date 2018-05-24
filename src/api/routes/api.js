const express = require('express')

module.exports = function (server){
    const router = express.Router();
    server.use('/api', router);

    const studentRoute = require('../models/student/serviceStudent')
    studentRoute.register(router, '/student')

    const classRoute = require('../models/class/serviceClass')
    classRoute.register(router, '/class')

}