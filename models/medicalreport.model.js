var mongoose = require('mongoose');

var medicalSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    lastName: {
        type: String,
        required: 'This field is required.'
    },
    orFullname: {
        type: String,
        required: 'This field is required.'
    },
    dateOfbirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: 'This field is required.'
    },
    nationality: {
        type: String,
        required: true
    },
    countryOfResidence: {
        type: String,
        required: true
    },
    Passport: {
        type: String,
        required: true
    },
    issuedBy: {
        type: String,
        required: true
    },
    expiredDate: {
        type: Date,
        required: true
    },
    pictureOfPassport: {
        type: String,
        required: true
    },
    languagesupport:{
        type: String,
        required: true
    },
    medicalHistory:{
        type: String,
        required: true
    },
    diagnosis:{
        type: String,
        required: true
    },
    treatment:{
        type: String,
        required: true
    },
    medicalrecorfile:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('medicalreport', medicalSchema, 'medicalreport');