import express from "express"

import authMiddleware
from "../middlewares/authMiddleware.js"

import adminMiddleware
from "../middlewares/adminMiddleware.js"

import {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
}
from "../controllers/projectController.js"

const router = express.Router()


router.get(
    "/project",
    authMiddleware,
    getProjects
)

router.get(
    "/project/:id",
    authMiddleware,
    getProjectById
)

router.post(
    "/project",
    authMiddleware,
    adminMiddleware,
    createProject
)

router.put(
    "/project/:id",
    authMiddleware,
    adminMiddleware,
    updateProject
)

router.delete(
    "/project/:id",
    authMiddleware,
    adminMiddleware,
    deleteProject
)

export default router