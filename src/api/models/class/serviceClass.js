const classModel = require('./classModel')
classModel.methods(['get', 'post', 'put', 'delete'])
classModel.updateOptions({new: true, runValidators:true})

module.exports = classModel;