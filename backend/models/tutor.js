const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    qualification: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    prev_organisation: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    onlineteaching:{
        type:Boolean,
        default:false
    },
    broadband: {
        type: Boolean,
        default: false
    },
    laptop: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['pending', 'selected', 'interview', 'rejected'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tutor', tutorSchema);