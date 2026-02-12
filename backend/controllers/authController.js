import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentails" });
    }

    const token = jwt.sign(
  {
    id: user.id,
    role: user.role.toLowerCase(), 
  },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

    res.json({
      message: "Login successful",
      token,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


