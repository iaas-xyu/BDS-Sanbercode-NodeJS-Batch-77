const express = require("express");
const router = express.Router();

const Project = require("../models/Project");

router.post("/", async (req, res) => {
    try {
        const project = await Project.create(req.body);

        res.status(201).json({
            message: "Project created",
            data: project
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

module.exports = router;