import express from "express";
import { loginAdmin } from "../controllers/adminController.js";


import { getAdminStats } from "../controllers/adminController.js";
//import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/stats", getAdminStats);




export default router;






