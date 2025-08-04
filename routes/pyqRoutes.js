import express from "express";
import fileUpload from "express-fileupload";
import { analyzePYQController } from "../controllers/pyqController.js";

const router = express.Router();

router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    limits: { fileSize: 10 * 1024 * 1024 }, // optional limit: 10MB
    createParentPath: true,
  })
);

router.post("/analyze-pyq", analyzePYQController);

export default router;
