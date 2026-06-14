import express from "express";
import mongoose from "mongoose"

import authRoutes from "./routes/authRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"

const app = express()
const port = 3000
mongoose.connect('mongodb://localhost:27017/db_tugas8')


app.use(express.json())
app.use("/api/v1", authRoutes)
app.use("/api/v1", projectRoutes)
app.use("/api/v1", taskRoutes)

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})
