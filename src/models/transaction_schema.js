const mongoose = require('mongoose');

const transaction_schema = mongoose.Schema({

    trnx_amt : {
        type : Number,
        required : true
    },

    trnx_date : {
        type : Date,
        default : Date.now
    },

    trnx_status : {
        type : Boolean,
        required : true
    },

    trnx_ticket_pnr : {
        type : Number,
        required : true
    },

    number_of_seats : {
        type : Number,
        required : true
    }

});

mongoose.exports = mongoose.model('Transaction', transaction_schema);