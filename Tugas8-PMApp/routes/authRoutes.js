const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            message: "User created",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

module.exports = router;