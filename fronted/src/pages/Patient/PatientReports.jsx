import DashboardNavbar from "../../components/DashboardNavbar";

const PatientReports = () => {
  const reports = [
    {
      id: 1,
      name: "Blood Test Report",
      date: "12 Aug 2025",
      doctor: "Dr. Sharma",
    },
    {
      id: 2,
      name: "X-Ray Chest",
      date: "20 Aug 2025",
      doctor: "Dr. Mehta",
    },
  ];

  return (
    <>
      <DashboardNavbar role="patient" />

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Reports
        </h2>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-4">Report Name</th>
                <th className="p-4">Doctor</th>
                <th className="p-4">Date</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-t">
                  <td className="p-4">{report.name}</td>
                  <td className="p-4">{report.doctor}</td>
                  <td className="p-4">{report.date}</td>
                  <td className="p-4">
                    <button className="text-blue-600 hover:underline">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-500 mt-4">
          Reports are uploaded by doctors. Editing is not allowed.
        </p>
      </div>
    </>
  );
};

export default PatientReports;
