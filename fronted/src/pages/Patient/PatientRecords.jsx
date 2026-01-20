import DashboardNavbar from "../../components/DashboardNavbar";

const PatientRecords = () => {
  return (
    <>
      <DashboardNavbar role="patient" />

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Medical Records
        </h2>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Doctor
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Diagnosis
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
                  Notes
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="px-6 py-4 text-gray-700">
                  12 Aug 2025
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Dr. Sharma
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Viral Fever
                </td>
                <td className="px-6 py-4 text-gray-500">
                  Rest & hydration advised
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-6 py-4 text-gray-700">
                  02 Jul 2025
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Dr. Mehta
                </td>
                <td className="px-6 py-4 text-gray-700">
                  BP Check
                </td>
                <td className="px-6 py-4 text-gray-500">
                  BP slightly high
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          * Records are added only by doctors. Patients cannot modify them.
        </p>
      </div>
    </>
  );
};

export default PatientRecords;
