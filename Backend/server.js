import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.js";
import authMiddleware from "./src/middleware/authMiddleware.js";
import taskRoutes from "./src/routes/taskRoute.js";
import setupMiddleware from "./src/middleware/index.js";

dotenv.config();
const app = express();

setupMiddleware(app);
app.use("/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();