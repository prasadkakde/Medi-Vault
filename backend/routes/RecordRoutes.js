import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  createMedicalRecord,
  getRecordsByPatient,
  getRecordsByDoctor,
  downloadMedicalRecord
} from "../controllers/recordController.js";

const router = express.Router();

router.post("/", upload.single("file"), createMedicalRecord);
router.get("/patient/:patientId", getRecordsByPatient);
router.get("/doctor/:doctorId", getRecordsByDoctor);

router.get("/download/:id", downloadMedicalRecord);

export default router;
