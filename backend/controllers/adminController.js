import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../config/db.js";

export const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM admins WHERE email = ?";
  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json({ message: "DB error" });

    if (result.length === 0)
      return res.status(404).json({ message: "Admin not found" });

    const admin = result[0];

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      {
        id: admin.id,
        role: admin.role,
        email: admin.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token
    });
  });
};
