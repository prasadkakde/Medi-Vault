import express from "express";
import {
  createPatient,
  getAllPatients,
  getPatientById,
  patientRegister
} from "../controllers/patientController.js";


const router = express.Router();

router.post("/register", patientRegister); //  patient self-register
router.post("/", createPatient);      // Admin creates patient
router.get("/", getAllPatients);      // Admin views all patients
router.get("/:id", getPatientById);   // View patient profile

export default router;
