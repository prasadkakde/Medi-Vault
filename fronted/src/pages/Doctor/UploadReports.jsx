import DashboardNavbar from "../../components/DashboardNavbar";

const UploadReports = () => {
  return (
    <>
      <DashboardNavbar role="doctor" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Upload Medical Report
          </h2>

          <form className="grid grid-cols-1 gap-6">

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

            {/* Report Type */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Report Type
              </label>
              <select className="w-full border p-3 rounded-lg">
                <option>Select Report Type</option>
                <option>Blood Test</option>
                <option>X-Ray</option>
                <option>MRI</option>
                <option>CT Scan</option>
                <option>Other</option>
              </select>
            </div>

            {/* Upload File */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Upload File
              </label>
              <input
                type="file"
                className="w-full border p-3 rounded-lg"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Doctor Notes (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Any notes related to report"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Upload Report
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default UploadReports;
