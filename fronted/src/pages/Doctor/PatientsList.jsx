import DashboardNavbar from "../../components/DashboardNavbar";

const PatientsList = () => {
  return (
    <>
      <DashboardNavbar role="doctor" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            My Patients
          </h2>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search patient by name or ID"
              className="w-full md:w-1/3 border p-3 rounded-lg"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-sm text-gray-600">
                  <th className="p-3">Patient ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">Last Visit</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-3">P-1023</td>
                  <td className="p-3">Amit Kulkarni</td>
                  <td className="p-3">45</td>
                  <td className="p-3">Male</td>
                  <td className="p-3">10 Aug 2026</td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:underline">
                      View Records
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">P-1045</td>
                  <td className="p-3">Sneha Patil</td>
                  <td className="p-3">32</td>
                  <td className="p-3">Female</td>
                  <td className="p-3">09 Aug 2026</td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:underline">
                      View Records
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
};

export default PatientsList;
