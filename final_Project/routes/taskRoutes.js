import express from "express"

import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"

import {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} from "../controllers/taskController.js"

const router = express.Router()

router.get(
    "/task",
    authMiddleware,
    getTasks
)

router.get(
    "/task/:id",
    authMiddleware,
    getTaskById
)

router.post(
    "/task",
    authMiddleware,
    adminMiddleware,
    createTask
)

router.put(
    "/task/:id",
    authMiddleware,
    adminMiddleware,
    updateTask
)

router.delete(
    "/task/:id",
    authMiddleware,
    adminMiddleware,
    deleteTask
)

export default router