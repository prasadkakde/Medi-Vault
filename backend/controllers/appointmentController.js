import db from "../config/db.js";

// Create appointment (Patient)

export const createAppointment = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const { doctor_id, date, time } = req.body;

    // ✅ Validation
    if (!doctor_id || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Insert appointment
    await db.query(
      "INSERT INTO appointments (patient_id, doctor_id, date, time, status) VALUES (?, ?, ?, ?, ?)",
      [req.user.id, doctor_id, date, time, "pending"]
    );

    res.status(201).json({ message: "Appointment created successfully" });
  } catch (error) {
    console.error("Create Appointment Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};




// Get all appointments (Admin)
export const getAllAppointments = async (req, res) => {
  try {
    const [appointments] = await db.promise().query(`
      SELECT 
        a.id,
        u1.name AS patient_name,
        u2.name AS doctor_name,
        a.date,
        a.time,
        a.status
      FROM appointments a
      JOIN patients p ON a.patient_id = p.id
      JOIN users u1 ON p.user_id = u1.id
      JOIN doctors d ON a.doctor_id = d.id
      JOIN users u2 ON d.user_id = u2.id
    `);

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get appointments by doctor
export const getDoctorAppointments = async (req, res) => {
  const { doctorId } = req.params;

  try {
    const [appointments] = await db.promise().query(
      `SELECT * FROM appointments WHERE doctor_id = ?`,
      [doctorId]
    );

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get appointments by patient
export const getPatientAppointments = async (req, res) => {
  const { patientId } = req.params;

  try {
    const [appointments] = await db.promise().query(
      `SELECT * FROM appointments WHERE patient_id = ?`,
      [patientId]
    );

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update appointment status (Doctor/Admin)
export const updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    await db.promise().query(
      `UPDATE appointments SET status = ? WHERE id = ?`,
      [status, id]
    );

    res.json({ message: "Appointment status updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
