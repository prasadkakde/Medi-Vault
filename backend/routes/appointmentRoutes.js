import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getDoctorAppointments,
  getPatientAppointments,
  updateAppointmentStatus,
} from "../controllers/appointmentController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// Patient creates appointment
router.post(
  "/",
  protect,
  authorizeRoles("patient"),
  createAppointment
);

// Admin sees all
router.get(
  "/",
  protect,
  authorizeRoles("admin"),
  getAllAppointments
);

// Doctor sees their appointments
router.get(
  "/doctor/:doctorId",
  protect,
  authorizeRoles("doctor"),
  getDoctorAppointments
);

// Patient sees their appointments
router.get(
  "/patient/:patientId",
  protect,
  authorizeRoles("patient"),
  getPatientAppointments
);

// Doctor/Admin update status
router.put(
  "/:id/status",
  protect,
  authorizeRoles("admin", "doctor"),
  updateAppointmentStatus
);

export default router;