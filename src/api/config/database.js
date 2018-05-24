const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/student')

mongoose.Error.messages.general.required = ' O Atributo \'{PATH}\' é obrigatório.'
mongoose.Error.messages.String.enum = '\'{VALUE}\' não é válido para o atributo \'{PATH}\'.'
