import express from "express";
import {
  createPatient,
  getAllPatients,
  getPatientById,
} from "../controllers/patientController.js";

const router = express.Router();

router.post("/", createPatient);      // Admin creates patient
router.get("/", getAllPatients);      // Admin views all patients
router.get("/:id", getPatientById);   // View patient profile

export default router;
