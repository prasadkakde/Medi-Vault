import DashboardNavbar from "../components/DashboardNavbar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar role="Admin" />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Admin Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-600">Total Doctors</h3>
            <p className="text-3xl font-bold text-blue-600">24</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-600">Total Patients</h3>
            <p className="text-3xl font-bold text-green-600">320</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-600">Appointments</h3>
            <p className="text-3xl font-bold text-purple-600">89</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
