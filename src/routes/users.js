const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

// Create a new user. or in other word onboard a new user.

router.post('/signup', async (req, res) => {
    const userOnBoard = new User({
        name: req.body.name,
        mobile_no: req.body.mobile_no,
        email: req.body.email,
        password: req.body.password
    });
    const salt = await bcrypt.genSalt(10);
    userOnBoard.password = await bcrypt.hash(userOnBoard.password, salt);
    try{
        const newUser = await userOnBoard.save()
        res.json(newUser);
    }catch(err){
        res.json({message: err});
    }
});

// Login with an existing account

router.post('/login', async (req, res) => {

    const body = req.body;

    const existingUser = await User.findOne({email : body.email});

    if(existingUser){

        // Check Password with hashed password stored in DB.
        const validPassword = await bcrypt.compare(body.password, existingUser.password)

        if(validPassword){
            // to be redirected to home screen i.e., flights search.
            res.status(200).json({message: "Valid Password"});
        }

        else{
            res.status(400).json({message: "InValid Password"});

            // Redirect to the same page.
            //router.route('/login');
        }
    }

    else{
        res.status(401).json({message: "User does not exist. Please sign up or check your details."})
        // Redirects to same page.
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