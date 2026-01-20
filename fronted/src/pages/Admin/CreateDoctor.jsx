import DashboardNavbar from "../../components/DashboardNavbar";

const CreateDoctor = () => {
  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Create Doctor Account
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Dr. John Doe"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="doctor@example.com"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Specialization
              </label>
              <input
                type="text"
                placeholder="Cardiologist"
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
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
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
