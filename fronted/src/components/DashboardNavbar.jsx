import { Link } from "react-router-dom";

export default function DashboardNavbar({ role = "Admin" }) {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-blue-700">
            MediVault
          </span>
          <span className="text-sm text-gray-500">{role} Panel</span>
        </div>

        
        <div className="hidden md:flex space-x-6 text-gray-600">
          {role === "Admin" && (
            <>
              <Link to="/admin" className="hover:text-blue-600">Dashboard</Link>
              <Link to="/admin/doctors" className="hover:text-blue-600">Doctors</Link>
              <Link to="/admin/patients" className="hover:text-blue-600">Patients</Link>
              <Link to="/admin/logs" className="hover:text-blue-600">Access Logs</Link>
            </>
          )}

          {role === "Doctor" && (
            <>
              <Link to="/doctor" className="hover:text-blue-600">Dashboard</Link>
              <Link to="/doctor/patients" className="hover:text-blue-600">Patients</Link>
              <Link to="/doctor/records" className="hover:text-blue-600">Medical Records</Link>
            </>
          )}

          {role === "Patient" && (
            <>
              <Link to="/patient" className="hover:text-blue-600">Dashboard</Link>
              <Link to="/patient/profile" className="hover:text-blue-600">Profile</Link>
              <Link to="/patient/records" className="hover:text-blue-600">Records</Link>
            </>
          )}
        </div>

        
        <button
          className="text-red-500 hover:text-red-600 font-medium"
          onClick={() => alert("Logout logic will be implemented later")}
        >
          Logout
        </button>

      </div>
    </nav>
  );
}
