const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now()
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }
});

module.exports = mongoose.model('Task', TaskSchema);