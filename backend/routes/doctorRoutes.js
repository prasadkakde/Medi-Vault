import express from "express";
import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
} from "../controllers/doctorController.js";

const router = express.Router();

// Admin creates doctor
router.post("/", createDoctor);



// Admin view all doctors
router.get("/", getAllDoctors);

// Admin / Doctor view profile
router.get("/:id", getDoctorById);

router.post("/", (req, res) => {
  res.json({ message: "Doctor route working" });
});


export default router;
