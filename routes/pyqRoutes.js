import express from "express";
import fileUpload from "express-fileupload";
import { analyzePYQController } from "../controllers/pyqController.js";

const router = express.Router();

router.use(fileUpload({ useTempFiles: false }));

router.post("/analyze-pyq", analyzePYQController);

export default router;
