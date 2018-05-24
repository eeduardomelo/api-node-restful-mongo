const restful = require('node-restful')
const mongoose = restful.mongoose

const studentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  class: {type: String, required: false},
  createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Student', studentSchema)