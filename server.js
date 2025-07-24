import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";

import materialRoutes from "./routes/materialRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import pyqRoutes from "./routes/pyqRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: ["https://studymate-client.vercel.app", "http://localhost:5173"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve PDFs from /uploads
app.use("/uploads", express.static(path.join("uploads")));

// API Routes
app.use("/api/materials", materialRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/pyq", pyqRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
