import DashboardNavbar from "../components/DashboardNavbar";

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar role="Doctor" />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Doctor Panel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-600">Today’s Appointments</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-600">Patients Assigned</h3>
            <p className="text-3xl font-bold text-green-600">45</p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Patients
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>• Rahul Sharma</li>
            <li>• Priya Patel</li>
            <li>• Amit Verma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
