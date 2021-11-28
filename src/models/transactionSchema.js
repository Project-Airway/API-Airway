//const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const user = require('./userSchema');
const ticket = require('./ticketSchema')

const transactionSchema = mongoose.Schema({

    trxn_amt : {
        type : Number,
        required : true
    },

    trxn_date : {
        type : Date,
        default : Date.now
    },

    trxn_status : {
        type : Boolean,
        //default : true,
        required : true
    },

    pnr : {
        type : Number,
        ref : ticket,
        required : true
    },

    number_of_seats : {
        type : Number,
        required : true
    },

    _id : {
        type : String,
        required : true,
        ref : user
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);