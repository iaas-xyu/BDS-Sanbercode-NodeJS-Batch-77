import express from "express"

import {getLogin,getRegister} from "../controllers/authController.js"

const router = express.Router()

router.post("/auth/register", getRegister)
router.post("/auth/login", getLogin)

export default router