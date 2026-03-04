import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/DashboardNavbar";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/patients");
      setPatients(res.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toString().includes(search)
  );

  return (
    <>
      <DashboardNavbar role="doctor" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            My Patients
          </h2>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search patient by name or ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/3 border p-3 rounded-lg"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-sm text-gray-600">
                  <th className="p-3">Patient ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="border-b">
                    <td className="p-3">P-{patient.id}</td>
                    <td className="p-3">{patient.name}</td>
                    <td className="p-3">{patient.age || "-"}</td>
                    <td className="p-3">{patient.gender || "-"}</td>
                    <td className="p-3">
                      <button className="text-blue-600 hover:underline">
                        View Records
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {patients.length === 0 && (
              <p className="text-center text-gray-500 mt-4">
                No patients found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsList;