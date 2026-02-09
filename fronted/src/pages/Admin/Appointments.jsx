import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/DashboardNavbar";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const token = localStorage.getItem("token");

  const fetchAppointments = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/appointments",
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    setAppointments(res.data);
  };

  const updateStatus = async (id, status) => {
    await axios.put(
      `http://localhost:5000/api/appointments/${id}/status`,
      { status },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    fetchAppointments(); // 🔥 auto refresh
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold mb-6">Manage Appointments</h2>

        <table className="w-full bg-white rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map(a => (
              <tr key={a.id} className="border-t">
                <td className="p-3">{a.patient_name}</td>
                <td className="p-3">{a.doctor_name}</td>
                <td className="p-3">{a.date}</td>
                <td className="p-3">{a.time}</td>
                <td className="p-3">{a.status}</td>
                <td className="p-3">
                  {a.status === "pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(a.id, "approved")}
                        className="bg-green-600 text-white px-3 py-1 mr-2 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(a.id, "rejected")}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminAppointments;
