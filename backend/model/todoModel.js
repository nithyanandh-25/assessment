const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('ToDo', ToDoSchema);