import DashboardNavbar from "../../components/DashboardNavbar";

const CreatePatient = () => {
  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Register Patient
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Patient Name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="patient@example.com"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <select className="w-full border rounded-lg p-3">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Blood Group
              </label>
              <select className="w-full border rounded-lg p-3">
                <option>Select</option>
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
                placeholder="Patient Address"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
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
