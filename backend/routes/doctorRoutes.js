import express from "express";
import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
} from "../controllers/doctorController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

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
