
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password, pic } = req.body;

    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400)
        throw new Error('User Already Exists!!!');
    }

    const newUser = await User.create({ name, email, password, pic });

    if(newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            isAdmin: newUser.isAdmin,
            email: newUser.email,
            pic: newUser.pic
        });
    } else {
        res.status(400)
        throw new Error('An error has occured!!!')
    }

    res.json({ name, email });
})

module.exports = { registerUser };