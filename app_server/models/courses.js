var mongoose = require('mongoose');

var assignmentSchema = new mongoose.Schema({
    name: String,
    due: String,
    points: {
        type: Number,
        required: true,
        "default": 0,
        min: 0,
        max: 100
    }
});

var courseSchema = new mongoose.Schema({
    ID: String,
    name: String,
    assignments: [assignmentSchema]
});

mongoose.model('Courses', courseSchema);