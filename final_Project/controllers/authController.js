import jwt from "jsonwebtoken"
import User from "../models/user.js"

const getRegister = async (req, res) => {

    try {

        const { name, email, password, role } = req.body

        const newEmployee = await User.create({
            name,
            email,
            password,
            role
        })

        res.status(201).json({
            message: "Berhasil Register",
            data: newEmployee
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }

}

const getLogin = async (req, res) => {

    try {

        const { email, password } = req.body

        const employee = await User.findOne({
            email,
            password
        })

        if (!employee) {
            return res.status(404).json({
                message: "Email atau password salah"
            })
        }

        const token = jwt.sign(
            {
                id: employee._id,
                role: employee.role
            },
            "secretkey",
            {
                expiresIn: "1d"
            }
        )

        res.status(200).json({
            message: "Login Berhasil!",
            token
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }

}

export {
    getRegister,
    getLogin
}