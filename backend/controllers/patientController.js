import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Create Patient (Admin)
export const createPatient = async (req, res) => {
  const { name, email, password, age, gender } = req.body;

  try {
    // check existing user
    const [existing] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);

    if (existing.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // insert into users
    const [userResult] = await db
      .promise()
      .query(
        "INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)",
        [name, email, hashedPassword, "patient"]
      );

    const userId = userResult.insertId;

    // insert into patients
    await db
      .promise()
      .query(
        "INSERT INTO patients (user_id, age, gender) VALUES (?,?,?)",
        [userId, age, gender]
      );

    res.status(201).json({ message: "Patient created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all patients
export const getAllPatients = async (req, res) => {
  try {
    const [patients] = await db.promise().query(`
      SELECT patients.id, users.name, users.email, patients.age, patients.gender
      FROM patients
      JOIN users ON patients.user_id = users.id
    `);

    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get patient by ID
export const getPatientById = async (req, res) => {
  const { id } = req.params;

  try {
    const [patient] = await db.promise().query(
      `
      SELECT patients.id, users.name, users.email, patients.age, patients.gender
      FROM patients
      JOIN users ON patients.user_id = users.id
      WHERE patients.id = ?
    `,
      [id]
    );

    if (patient.length === 0) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json(patient[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  export const patientRegister = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const [existing] = await db
      .promise()
      .query("SELECT id FROM users WHERE email = ?", [email]);

    if (existing.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [userResult] = await db.promise().query(
      "INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)",
      [name, email, hashedPassword, "patient"]
    );

    const userId = userResult.insertId;

    // 🔥 THIS WAS MISSING
    await db.promise().query(
      "INSERT INTO patients (user_id, age, gender) VALUES (?,?,?)",
      [userId, null, null]
    );

    return res.status(201).json({
      message: "Patient registered successfully"
    });

  } catch (err) {
    console.error("Patient Register Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};


export const loginPatient = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db
      .promise()
      .query(
        "SELECT * FROM users WHERE email = ? AND role = 'patient'",
        [email]
      );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const patient = rows[0];

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: patient.id, role: "patient" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login Patient Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const [rows] = await db.promise().query(
      `
      SELECT 
        users.name,
        users.email,
        patients.age,
        patients.gender,
        patients.phone,
        patients.blood_group,
        patients.address
      FROM users
      JOIN patients ON users.id = patients.user_id
      WHERE users.id = ?
      `,
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(rows[0]);

  } catch (error) {
    console.error("Get Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateMyProfile = async (req, res) => {
  const userId = req.user.id;

  const { name, phone, age, gender, blood_group, address } = req.body;

  try {
    // update name in users table
    await db.promise().query(
      "UPDATE users SET name = ? WHERE id = ?",
      [name, userId]
    );

    // update patient profile fields
    await db.promise().query(
      `
      UPDATE patients 
      SET phone = ?, age = ?, gender = ?, blood_group = ?, address = ?
      WHERE user_id = ?
      `,
      [phone, age, gender, blood_group, address, userId]
    );

    res.json({ message: "Profile updated successfully" });

  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};