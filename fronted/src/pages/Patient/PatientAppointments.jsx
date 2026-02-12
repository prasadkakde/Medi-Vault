import { useState } from "react";
import axios from "axios";

const CreateAppointmentForm = () => {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/appointments",
        {
          doctor_id: doctorId,
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Appointment Requested Successfully");
    } catch (error) {
      console.error(error);
      alert("Error booking appointment");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">
        Book Appointment
      </h3>

      <select
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      >
        <option value="">Select Doctor</option>
        <option value="1">Dr. Sharma</option>
        <option value="2">Dr. Mehta</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Book Now
      </button>
    </form>
  );
};

export default CreateAppointmentForm;