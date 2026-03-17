import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import adminRoutes from "./routes/adminRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();


const app = express();


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://medi-vault-prasadkakdes-projects.vercel.app",
    "https://medi-vault-one-iota.vercel.app"
  ],
  credentials: true
}));


app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);


app.get("/", (req, res) => {
  res.send("MediVault Backend Running");
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});