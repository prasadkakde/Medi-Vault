import DashboardNavbar from "../components/DashboardNavbar";
import DashboardCard from "../components/DashboardCard";
import StatCard from "../components/StatCard";

const AdminDashboard = () => {
  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Admin Overview
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Doctors" value="24" color="text-blue-600" />
          <StatCard title="Total Patients" value="320" color="text-green-600" />
          <StatCard title="Appointments" value="89" color="text-purple-600" />
        </div>

        
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