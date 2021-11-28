const express = require('express');
const router = express.Router();
const Transactions = require('../models/transactionSchema');


// Get transaction details of a user.

router.get('/:userId', async (req, res) => {
    try{
        const transactions = await Transactions.findById(req.params.userId);
        res.json(transactions);
    }catch(err){
        res.json({message : err});
    }
});


//Post to transactions

router.post('/:userId', async (req, res) => {
    const transaction = new Transactions({
        trxn_amt: req.body.trxn_amt,
        trxn_date: req.body.trxn_date,
        trxn_status: req.body.trxn_status,
        trxn_ticket_pnr : req.body.trxn_ticket_pnr,
        number_of_seats: req.body.number_of_seats,
        _id: req.params.userId
    });
    try{
        const newTrxn = await transaction.save()
        res.json(newTrxn);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;