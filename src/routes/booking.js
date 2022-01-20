const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticketSchema');
const axios = require('axios').default;

async function getRewardPoints(ticketPrice){
    if(ticketPrice<200){
        return 20;
    }
    else if(ticketPrice<300){
        return 30;
    }
    else if(ticketPrice<400){
        return 40;
    }
    else{
        return 50;
    }
}

// Book a flight ticket

router.post('/:userId/book', async (req, res) => {
    try{
        const ticket = new Ticket({
            userId : req.params.userId,
            flightId : req.body.id,
            source : req.body.src,
            destination : req.body.dest,
            dateOfTravel : req.body.date1,
            numberOfSeats : req.body.numberOfSeats,
            departuteTime : req.body.depTime,
            arrivalTime : req.body.arrTime,
            duration : req.body.duration,
            airlineCode : req.body.airlineCodes,
            airlineName : req.body.airlineName,
            totalPrice : req.body.totalPriceUsd,
            rewardPointsAdded : await getRewardPoints(req.body.totalPriceUsd)
        });
        const newTicket = await ticket.save();

        var getUser = {
            method : 'GET',
            url : `http://localhost:3001/users/${ticket.userId}`,
        }
        var userRewardPoints = await axios.request(getUser).then(async (response) => {
            return await response.data.reward_points;
        });

        var newRewardPoints = (userRewardPoints + ticket.rewardPointsAdded);
        
        var resp = await axios.patch(`http://localhost:3001/users/${ticket.userId}`,{reward_points : newRewardPoints});
        res.json(newTicket);
        
    }catch(err){
        res.status(500).json({message : err});
    }
});


// Get all tickets of a specific user

router.get('/:userId/getTickets', async (req, res) => {
    try{
        const allTickets = await Ticket.find({userId : req.params.userId});
        res.json(allTickets);
    }catch(err){
        res.status(400).json({message : err});
    }
});


// Cancel a ticket

// router.get('/:userId/cancelTicket/:ticketId', async (req, res) => {
//     try {
//         const getUser = await User.findOne({_id: req.params.userId});
//         const getTickets = await Ticket.findOne({userId : req.params.userId, _id : req.params.ticketId});
//         if(getTickets.departuteTime  < ){

//         }
//     } catch (err) {
        
//     }
// });

module.exports = router;