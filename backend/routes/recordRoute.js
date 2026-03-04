import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import {
  createMedicalRecord,
  getRecordsByPatient,
  getRecordsByDoctor
} from "../controllers/recordController.js";

const router = express.Router();

router.post("/", upload.single("file"), createMedicalRecord);
router.get("/patient/:patientId", getRecordsByPatient);
router.get("/doctor/:doctorId", getRecordsByDoctor);

export default router;
