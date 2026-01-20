import DashboardNavbar from "../../components/DashboardNavbar";

const Prescriptions = () => {
  return (
    <>
      <DashboardNavbar role="doctor" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Create Prescription
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Patient ID */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Patient ID
              </label>
              <input
                type="text"
                placeholder="P-1023"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Medicines */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Medicines
              </label>
              <textarea
                rows="4"
                placeholder="Medicine name | dosage | frequency | duration"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Instructions */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Instructions
              </label>
              <textarea
                rows="3"
                placeholder="Additional instructions for patient"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Save Prescription
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Prescriptions;
