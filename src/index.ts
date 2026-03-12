import express from "express"
import { getUserController, createUserController, getAllUserController } from "./controllers/user.controller"
import { globalErrorHandler } from "./middlewares/error.middleware"
import cors from "cors"
import { validate } from "./middlewares/validate.middleware"
import { createUserSchema } from "./validations/user.schema"

const app = express()

app.use(express.json())

// CORS configuration
app.use(cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"] // Allowed headers
}))

// Route
app.get("/user/:id", getUserController)
app.post(
    "/user",
    validate(createUserSchema),
    createUserController
)
app.get("/users", getAllUserController)

// Global error handler (MUST BE LAST)
app.use(globalErrorHandler)

app.listen(5000, () => {
    console.log("Server running on port 5000")
})