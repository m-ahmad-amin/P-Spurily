import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"

// dotenv configuration
dotenv.config();

// Creeating Express App
const app = express();

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
// Listening
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`)
});