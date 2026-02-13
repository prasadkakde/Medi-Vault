import db from "../config/db.js";

// Create medical record (Doctor adds record)
export const createMedicalRecord = (req, res) => {
  const { patient_id, doctor_id, diagnosis, notes } = req.body;

  if (!patient_id || !doctor_id) {
    return res.status(400).json({ message: "Patient and Doctor required" });
  }

  const sql =
    "INSERT INTO medical_records (patient_id, doctor_id, diagnosis, notes) VALUES (?, ?, ?, ?)";

  db.query(sql, [patient_id, doctor_id, diagnosis, notes], (err, result) => {
    if (err) {
      console.error("Create Record Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(201).json({ message: "Medical record added successfully" });
  });
};


// Get records by patient (JOIN doctor name)
export const getRecordsByPatient = (req, res) => {
  const { patientId } = req.params;

  const sql = `
    SELECT mr.*, d.name AS doctor_name
    FROM medical_records mr
    JOIN doctors d ON mr.doctor_id = d.id
    WHERE mr.patient_id = ?
    ORDER BY mr.created_at DESC
  `;

  db.query(sql, [patientId], (err, results) => {
    if (err) {
      console.error("Fetch Patient Records Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.json(results);
  });
};


// Get records by doctor
export const getRecordsByDoctor = (req, res) => {
  const { doctorId } = req.params;

  const sql = `
    SELECT mr.*, p.name AS patient_name
    FROM medical_records mr
    JOIN patients p ON mr.patient_id = p.id
    WHERE mr.doctor_id = ?
    ORDER BY mr.created_at DESC
  `;

  db.query(sql, [doctorId], (err, results) => {
    if (err) {
      console.error("Fetch Doctor Records Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.json(results);
  });
};
