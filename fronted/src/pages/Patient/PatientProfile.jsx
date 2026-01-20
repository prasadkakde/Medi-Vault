import DashboardNavbar from "../../components/DashboardNavbar";

const PatientProfile = () => {
  return (
    <>
      <DashboardNavbar role="patient" />

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Profile
        </h2>

        <div className="max-w-3xl bg-white p-8 rounded-xl shadow">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="9876543210"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Age
              </label>
              <input
                type="number"
                placeholder="25"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Blood Group
              </label>
              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Address
              </label>
              <textarea
                rows="3"
                placeholder="Enter address"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end gap-4">
              <button
                type="reset"
                className="px-6 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Info */}
        <p className="text-sm text-gray-500 mt-4">
          Medical records and reports cannot be edited by patients.
        </p>
      </div>
    </>
  );
};

export default PatientProfile;
