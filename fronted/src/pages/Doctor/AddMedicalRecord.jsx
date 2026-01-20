import DashboardNavbar from "../../components/DashboardNavbar";

const AddMedicalRecord = () => {
  return (
    <>
      <DashboardNavbar role="doctor" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Add Medical Record
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

            {/* Visit Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Visit Date
              </label>
              <input
                type="date"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Diagnosis */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Diagnosis
              </label>
              <textarea
                rows="3"
                placeholder="Enter diagnosis details"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Symptoms */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Symptoms
              </label>
              <textarea
                rows="2"
                placeholder="Enter symptoms"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Medicines */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Medicines Prescribed
              </label>
              <textarea
                rows="3"
                placeholder="Medicine name - dosage - duration"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Additional Notes
              </label>
              <textarea
                rows="2"
                placeholder="Any extra instructions"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Save Medical Record
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default AddMedicalRecord;
