import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import fs from "fs";

import materialRoutes from "./routes/materialRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import pyqRoutes from "./routes/pyqRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();
connectDB();
const __dirname = path.resolve();

const app = express();
app.use(cors({
 origin: 'https://studymate-theta.vercel.app',
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve PDFs from /uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);

  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send("File not found");
  }
});


// API Routes
app.use("/api/materials", materialRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/pyq", pyqRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
