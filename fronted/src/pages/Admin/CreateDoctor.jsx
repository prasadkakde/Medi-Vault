import { useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/DashboardNavbar";

const CreateDoctor = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    specialization: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/doctors",
        {
          name: form.name,
          email: form.email,
          password: form.password,
          specialization: form.specialization,
          phone: form.phone
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Doctor created successfully");

      setForm({
        name: "",
        email: "",
        specialization: "",
        phone: "",
        password: "",
        confirmPassword: ""
      });

    } catch (error) {
      alert(error.response?.data?.message || "Doctor creation failed");
    }
  };

  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Create Doctor Account
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Dr. John Doe"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="doctor@example.com"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                value={form.specialization}
                onChange={handleChange}
                placeholder="Cardiologist"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Create Doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateDoctor;
