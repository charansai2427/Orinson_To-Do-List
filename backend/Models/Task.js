const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Completed: {
        type: Boolean,
        default: false
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', TaskSchema);
