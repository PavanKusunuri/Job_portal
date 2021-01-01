// const express = require("express");
// const router = express.Router();
// const gravatar = require("gravatar");
const config = require("config");
const generateToken = require("../utils/generateToken.js")
const User = require("../models/userModel.js");

// @route   GET api/users
// @desc    Register user
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email: email })
    if (userExists) {
        res.status(400)
        throw new Error('User already Exists')
    }
    const user = await User.create({
        name, email, password
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }

})


