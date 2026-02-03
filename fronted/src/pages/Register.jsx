import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/patients/register",
        {
          name: form.name,
          email: form.email,
          password: form.password,
        }
      );

      alert("Registration successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Patient Registration
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={handleChange}
        />

        <select
          disabled
          className="w-full p-3 mb-6 border rounded-lg bg-gray-100 text-gray-500"
        >
          <option>Patient</option>
        </select>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}
