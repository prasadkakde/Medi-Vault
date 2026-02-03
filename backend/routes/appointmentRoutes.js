import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getDoctorAppointments,
  getPatientAppointments,
  updateAppointmentStatus,
} from "../controllers/appointmentController.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("PATIENT"),
  createAppointment
);

router.get("/", getAllAppointments);
router.get("/doctor/:doctorId", getDoctorAppointments);
router.get("/patient/:patientId", getPatientAppointments);
router.put("/:id/status", updateAppointmentStatus);

export default router;
