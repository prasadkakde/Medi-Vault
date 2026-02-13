import DashboardNavbar from "../../components/DashboardNavbar";
import { useState } from "react";
import axios from "axios";

const PatientAppointments = () => {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/appointments",
        {
          doctor_id: Number(doctorId),
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Appointment Requested Successfully");
    } catch (error) {
      console.error("Booking Error:", error.response?.data || error.message);
      alert("Error booking appointment");
    }
  };

  return (
    <>
      <DashboardNavbar role="patient" />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Book Appointment
          </h3>

          <form onSubmit={handleSubmit}>
            <select
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-200 font-semibold"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PatientAppointments;
