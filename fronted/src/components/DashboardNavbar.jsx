import { Link } from "react-router-dom";

export default function DashboardNavbar({ role }) {
  return (
    <nav className="bg-white shadow-md px-8 py-5 flex justify-between items-center">
      
      <h1 className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide">
        MediVault
      </h1>

      
      <div className="flex gap-8 text-gray-700 text-lg font-medium">
        {role === "admin" && (
          <>
            <NavLink to="/admin" label="Dashboard" />
            <NavLink to="/admin/doctors" label="Doctors" />
            <NavLink to="/admin/patients" label="Patients" />
            <NavLink to="/admin/create-doctor" label="Add Doctor" />
            <NavLink to="/admin/create-patient" label="Add Patient" />
          </>
        )}

        {role === "doctor" && (
          <>
            <NavLink to="/doctor" label="Dashboard" />
            <NavLink to="/doctor/patients" label="Patients" />
            <NavLink to="/doctor/add-record" label="Add Record" />
            <NavLink to="/doctor/upload" label="Upload Report" />
            <NavLink to="/doctor/prescriptions" label="Prescriptions" />
          </>
        )}

        {role === "patient" && (
          <>
            <NavLink to="/patient" label="Dashboard" />
            <NavLink to="/patient/records" label="My Records" />
            <NavLink to="/patient/reports" label="Reports" />
            <NavLink to="/patient/appointments" label="Appointments" />
            <NavLink to="/patient/profile" label="Profile" />
          </>
        )}
      </div>

      
      <button className="text-base text-red-600 font-medium hover:underline">
        Logout
      </button>
    </nav>
  );
}


const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="hover:text-blue-600 transition-colors duration-200"
  >
    {label}
  </Link>
);
