import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "doctor") {
      navigate("/doctor");
    } else if (role === "patient") {
      navigate("/patient");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow">
        <h1 className="text-2xl font-semibold text-center text-blue-700 mb-2">
          MediVault
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Secure Digital Health Records
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={role}
          className="w-full p-3 mb-6 border rounded-lg"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          New patient?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
