const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');


// Create a new user. or in other word onboard a new user.

router.post('/', async (req, res) => {
    const userOnBoard = new User({
        name: req.body.name,
        mobile_no: req.body.mobile_no,
        email: req.body.email
    });
    try{
        const newUser = await userOnBoard.save()
        res.json(newUser);
    }catch(err){
        res.json({message: err});
    }
});


// Get back a current user details.

router.get('/:userId', async (req, res) => {
    try{
        const userDetails = await User.findById(req.params.userId);
        res.json(userDetails);
    }catch(err){
        res.json({message: err});
    }
});


//Update a current user details.

router.patch('/:userId', async (req, res) => {
    try{
        const updateUser = await User.updateOne({_id: req.params.userId}, {$set: {reward_points : req.body.reward_points}});
        res.json(updateUser);
    }catch(err){
        res.json({message: err});
    }
});


module.exports = router;