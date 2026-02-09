import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/DashboardNavbar";
import DashboardCard from "../../components/DashboardCard";
import StatCard from "../../components/StatCard";

const AdminDashboard = () => {

  const [stats, setStats] = useState({
    doctors: 0,
    patients: 0,
    appointments: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setStats(res.data);
    } catch (error) {
      console.error("Dashboard stats error", error);
    }
  };

  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Admin Overview
        </h2>

        {/* ✅ DYNAMIC ANALYTICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard
            title="Total Doctors"
            value={stats.doctors}
            color="text-blue-600"
          />
          <StatCard
            title="Total Patients"
            value={stats.patients}
            color="text-green-600"
          />
          <StatCard
            title="Appointments"
            value={stats.appointments}
            color="text-purple-600"
          />
        </div>

        {/* 🔒 ADMIN ACTIONS – UNCHANGED */}
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Admin Actions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Create Doctor"
            description="Add a new doctor account"
            link="/admin/create-doctor"
            buttonText="Add Doctor"
          />

          <DashboardCard
            title="Create Patient"
            description="Register OPD / walk-in patient"
            link="/admin/create-patient"
            buttonText="Add Patient"
          />

          <DashboardCard
            title="Manage Appointments"
            description="View and manage appointments"
            link="/admin/appointments"
            buttonText="Open"
          />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
