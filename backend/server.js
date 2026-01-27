import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";

app.use("/api/admin", adminRoutes);


dotenv.config();




const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("MediVault Backend Running");
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
