import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/DashboardNavbar";

const ViewDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/doctors",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setDoctors(res.data);
    } catch (error) {
      alert("Failed to fetch doctors");
    }
  };

  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Doctors List</h2>

        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Specialization</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.id} className="border-t">
                <td className="p-2">{doc.name}</td>
                <td className="p-2">{doc.email}</td>
                <td className="p-2">{doc.specialization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewDoctors;
