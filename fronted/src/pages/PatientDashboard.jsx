import DashboardNavbar from "../components/DashboardNavbar";

export default function PatientDashboard() {
  return (
    <>

      <DashboardNavbar role="Patient" />

      
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-semibold text-blue-700 mb-6">
          Patient Dashboard
        </h1>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium mb-2">My Profile</h3>
            <p className="text-gray-500 mb-4">
              View and update your personal information
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              View Profile
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium mb-2">Medical Records</h3>
            <p className="text-gray-500 mb-4">
              Access your health history and past consultations
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              View Records
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium mb-2">Upload Reports</h3>
            <p className="text-gray-500 mb-4">
              Upload lab results, prescriptions, or medical reports
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Upload Now
            </button>
          </div>

        </div>

        
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-medium mb-4">Upcoming Appointments</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Consultation with Dr. Smith – 20 Jan 2026</li>
            <li>Blood test – 22 Jan 2026</li>
            <li>Follow-up visit – 28 Jan 2026</li>
          </ul>
        </div>
      </div>
    </>
  );
}
