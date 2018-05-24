const restful = require('node-restful')
const mongoose = restful.mongoose

const classSchema = new mongoose.Schema({
    name: {type: String, required: true},    
    students: {type: Object},
    teacher: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Class', classSchema)