const studentsModel = require('./studentsModel')
studentsModel.methods(['get', 'post', 'put', 'delete'])
studentsModel.updateOptions({new: true, runValidators:true})

module.exports = studentsModel