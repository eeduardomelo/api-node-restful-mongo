const studentsModel = require('./studentsModel')
studentsModel.methods(['get', 'post', 'put', 'delete'])
studentsModel.updateOptions({new: true, runValidators:true})
console.log(12312);
module.exports = studentsModel
