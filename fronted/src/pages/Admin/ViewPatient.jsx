import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/DashboardNavbar";

const ViewPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/patients",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setPatients(res.data);
    } catch (error) {
      alert("Failed to fetch patients");
    }
  };

  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Patients List</h2>

        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Age</th>
              <th className="p-2">Gender</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-2">{p.name}</td>
                <td className="p-2">{p.email}</td>
                <td className="p-2">{p.age ?? "-"}</td>
                <td className="p-2">{p.gender ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewPatients;
