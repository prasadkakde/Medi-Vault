import express from "express";
import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
} from "../controllers/doctorController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js"

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("ADMIN"),
  createDoctor
);

router.get(
  "/",
  protect,
  authorizeRoles("ADMIN"),
  getAllDoctors
);

router.get(
  "/:id",
  protect,
  authorizeRoles("ADMIN", "DOCTOR"),
  getDoctorById
);

export default router;
