const express = require('express');
const passport = require('passport');
const usersRouter = express.Router();

const {
    registerUser
} = require('../models/usersModel');

// ROUTES 

/* load login page  */
usersRouter.get('/login', (req, res, next) => {
    res.render('LOGIN');
});


/* login user  */
usersRouter.post(
    '/login', 
    passport.authenticate("local"/*, { failureRedirect: '/login', failureMessage: true} */), 
    (req, res, next) => {
        res.status(200).send(`User: ${req.user.username} w/ email ${req.user.email} logged in`)
    }
);


/* create new user (authentication of user not needed) */
usersRouter.post('/register', registerUser);


/* update user information  */


/* delete user account  */



module.exports = usersRouter;