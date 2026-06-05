const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

router.post("/", async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({
            message: "Task created",
            data: task
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

module.exports = router;