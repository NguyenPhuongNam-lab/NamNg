var mongoose = require('mongoose');

var detailSchema = new mongoose.Schema({
    hospitalName:{
        type: String,
        required: 'This field is required.'
    },
    address:{
        type: String,
        require: 'This field is required.'
    },
    open:{
        type: String,
        require: true
    },
    phoneNumber:{
        type: String,
        require: 'This field is required.'
    },
    subsidiaries:{
        type: String,
        require: true
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('detail', detailSchema, 'detail');