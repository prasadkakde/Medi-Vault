import db from "../config/db.js";

// Create medical record
export const createMedicalRecord = (req, res) => {
  const { patient_id, doctor_id, diagnosis, notes } = req.body;

  if (!patient_id || !doctor_id) {
    return res.status(400).json({ message: "Patient and Doctor required" });
  }

  const sql =
    "INSERT INTO medical_records (patient_id, doctor_id, diagnosis, notes) VALUES (?, ?, ?, ?)";

  db.query(sql, [patient_id, doctor_id, diagnosis, notes], (err) => {
    if (err) {
      return res.status(500).json({ message: "DB error", error: err });
    }
    res.json({ message: "Medical record added successfully" });
  });
};

// Get records by patient
export const getRecordsByPatient = (req, res) => {
  const { patientId } = req.params;

  const sql =
    "SELECT * FROM medical_records WHERE patient_id = ? ORDER BY created_at DESC";

  db.query(sql, [patientId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "DB error" });
    }
    res.json(results);
  });
};

// ✅ THIS FUNCTION MUST EXIST
export const getRecordsByDoctor = (req, res) => {
  const { doctorId } = req.params;

  const sql =
    "SELECT * FROM medical_records WHERE doctor_id = ? ORDER BY created_at DESC";

  db.query(sql, [doctorId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "DB error" });
    }
    res.json(results);
  });
};
