import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/DashboardNavbar";

const PatientRecords = () => {
  const [records, setRecords] = useState([]);

  const patientId = localStorage.getItem("userId"); // make sure you store this at login

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/records/patient/${patientId}`
      );

      setRecords(res.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  return (
    <>
      <DashboardNavbar role="patient" />

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Medical Records
        </h2>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                  Doctor
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                  Diagnosis
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                  Notes
                </th>
              </tr>
            </thead>

            <tbody>
              {records.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No medical records found
                  </td>
                </tr>
              ) : (
                records.map((record) => (
                  <tr key={record.id} className="border-t">
                    <td className="px-6 py-4">
                      {new Date(record.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      {record.doctor_name}
                    </td>
                    <td className="px-6 py-4">
                      {record.diagnosis}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {record.notes}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          * Records are added only by doctors. Patients cannot modify them.
        </p>
      </div>
    </>
  );
};

export default PatientRecords;
