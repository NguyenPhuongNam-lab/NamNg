const mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
    relative: {
        type: String,
        required: true
    },
    yourself: {
        type: String,
        required: true
    },
    fullName:{
        type: String,
        required: 'This field is required.'
    },
    DateOfBirth: {
        type: String,
        required: 'This field is required.'
    },
    Gender: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: 'This field is required.'
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: 'This field is required.'
    },
    District: {
        type: String,
        required: true
    },
    Province: {
        type: String,
        required: true
    },
    DayExamination: {
        type: String,
        required: true
    },
    TimeExamination: {
        type: String,
        required: true
    },
    Describe: {
        type: String,
        required: true
    }
});

mongoose.model('schedulemanagement', scheduleSchema);
