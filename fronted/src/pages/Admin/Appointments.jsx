import DashboardNavbar from "../../components/DashboardNavbar";

const Appointments = () => {
  return (
    <>
      <DashboardNavbar role="admin" />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Appointments
          </h2>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search patient or doctor"
              className="border p-3 rounded-lg w-full md:w-1/3"
            />

            <select className="border p-3 rounded-lg w-full md:w-1/4">
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Completed</option>
            </select>

            <input
              type="date"
              className="border p-3 rounded-lg w-full md:w-1/4"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-sm text-gray-600">
                  <th className="p-3">Patient</th>
                  <th className="p-3">Doctor</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-3">Rahul Sharma</td>
                  <td className="p-3">Dr. Mehta</td>
                  <td className="p-3">12 Aug 2026</td>
                  <td className="p-3">10:30 AM</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                      Pending
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:underline">
                      Approve
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">Sneha Patil</td>
                  <td className="p-3">Dr. Rao</td>
                  <td className="p-3">12 Aug 2026</td>
                  <td className="p-3">11:00 AM</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                      Approved
                    </span>
                  </td>
                  <td className="p-3 text-gray-400">
                    —
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

export default Appointments;
