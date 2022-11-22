const express = require("express");

const authRouter = express.Router();

authRouter.post('/api/signup', (req, res) => {
    // Get the data from client
    const { name, email, password } = req.body;
    
    // Post that data in database
    
    // return that data to the user
})

module.exports = authRouter;
