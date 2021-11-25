const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({

    pnr : {
        type : Number,
        required : true
    },

    flight_id : {
        type : String,
        required : true
    },

    source : {
        type : String,
        required : true
    },

    dest_ : {
        type : String,
        required : true
    },

    date_of_travel : {
        type : Date,
        required : true
    },

    
    number_of_seats : {
        type : Number,
        required : true
    }
    
});

mongoose.exports = mongoose.model('Tickets', ticketSchema);
