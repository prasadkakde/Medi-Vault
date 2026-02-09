import { useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/DashboardNavbar";

const CreatePatient = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateAge = (dob) => {
    if (!dob) return null;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const age = calculateAge(form.dob);

      // simple default password for admin-created patients
      const defaultPassword = "patient@123";

      await axios.post(
        "http://localhost:5000/api/patients",
        {
          name: form.name,
          email: form.email,
          password: defaultPassword,
          age: age,
          gender: form.gender
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Patient registered successfully");

      setForm({
        name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        bloodGroup: "",
        address: ""
      });

    } catch (error) {
      alert(error.response?.data?.message || "Patient registration failed");
    }
  };

  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Register Patient
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
                placeholder="Patient Name"
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
                placeholder="patient@example.com"
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
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Blood Group
              </label>
              <select
                name="bloodGroup"
                value={form.bloodGroup}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="">Select</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Address
              </label>
              <textarea
                rows="3"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Patient Address"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Register Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePatient;
