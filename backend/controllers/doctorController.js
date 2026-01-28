import db from "../config/db.js";
import bcrypt from "bcrypt";

// ✅ Create Doctor (Admin only)
export const createDoctor = async (req, res) => {
  try {
    const { name, email, password, specialization, phone } = req.body;

    // 1. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Insert into users
    const userQuery =
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'doctor')";

    db.query(userQuery, [name, email, hashedPassword], (err, userResult) => {
      if (err) return res.status(500).json(err);

      const userId = userResult.insertId;

      // 3. Insert into doctors
      const doctorQuery =
        "INSERT INTO doctors (user_id, specialization, phone) VALUES (?, ?, ?)";

      db.query(
        doctorQuery,
        [userId, specialization, phone],
        (err) => {
          if (err) return res.status(500).json(err);

          res.status(201).json({
            message: "Doctor created successfully",
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// ✅ Get all doctors
export const getAllDoctors = (req, res) => {
  const query = `
    SELECT d.id, u.name, u.email, d.specialization, d.phone
    FROM doctors d
    JOIN users u ON d.user_id = u.id
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// ✅ Get doctor by ID
export const getDoctorById = (req, res) => {
  const { id } = req.params;

  const query = `
    SELECT d.id, u.name, u.email, d.specialization, d.phone
    FROM doctors d
    JOIN users u ON d.user_id = u.id
    WHERE d.id = ?
  `;

  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Doctor not found" });

    res.json(result[0]);
  });
};
