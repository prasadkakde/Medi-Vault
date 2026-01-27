import bcrypt from "bcrypt";
import db from "../config/db.js";

export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM admins WHERE email = ?";
  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });

    if (result.length === 0) {
      return res.status(401).json({ message: "Admin not found" });
    }

    const admin = result[0];
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    res.json({
      message: "Admin login successful",
      admin: {
        id: admin.id,
        email: admin.email,
        role: admin.role,
      },
    });
  });
};
