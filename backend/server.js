import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

import medicalRecordRoutes from "./routes/RecordRoutes.js";



dotenv.config();             

const app = express();       
app.use(express.json());      

app.use("/api/admin", adminRoutes);  //http://localhost:5000/api/admin/login





app.use("/api/records", medicalRecordRoutes);





const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("MediVault Backend Running");
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
