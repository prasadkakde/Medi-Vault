import express from "express";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

//import recordRoutes from "./routes/recordRoute.js"

import authRoutes from "./routes/authRoutes.js";



import cors from "cors";


app.use(cors({
  origin: "https://medi-vault-one-iota.vercel.app",
  credentials: true
}));


dotenv.config();             

     
app.use(express.json());      

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);  //http://localhost:5000/api/admin/login

app.use("/api/doctors", doctorRoutes); //POST http://localhost:5000/api/doctors

app.use("/api/patients", patientRoutes);  //http://localhost:5000/api/patients

app.use("/api/appointments", appointmentRoutes); //http://localhost:5000/api/appointments



//app.use("/api/records", recordRoutes);



app.use("/api/admin", adminRoutes);






const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("MediVault Backend Running");
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
