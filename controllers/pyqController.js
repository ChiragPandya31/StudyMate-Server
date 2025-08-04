import fs from "fs/promises";
import analyzePYQ from "../utils/analyzePYQ.js";

export const analyzePYQController = async (req, res) => {
  try {
    if (!req.files || !req.files.pdfs) {
      return res.status(400).json({ error: "No PDF files uploaded." });
    }

    const pdfFiles = Array.isArray(req.files.pdfs)
      ? req.files.pdfs
      : [req.files.pdfs];

    const buffers = await Promise.all(
      pdfFiles.map(async (file) => {
        const buffer = await fs.readFile(file.tempFilePath);
        return { buffer, filename: file.name };
      })
    );

    const result = await analyzePYQ(buffers);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Analyzer failed", details: err.message });
  }
};
