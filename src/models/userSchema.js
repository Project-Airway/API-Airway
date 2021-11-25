const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name : {
        type : String,
        required: true 
    },

    mobile_no : {
        type : Number,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    reward_points : {
        type : Number,
        default : 0
    }
});

mongoose.exports = mongoose.model('User', userSchema);