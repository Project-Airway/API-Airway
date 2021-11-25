const mongoose = require('mongoose');

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
        required : true
    },

    trxn_ticket_pnr : {
        type : Number,
        required : true
    },

    number_of_seats : {
        type : Number,
        required : true
    }

});

mongoose.exports = mongoose.model('Transaction', transactionSchema);