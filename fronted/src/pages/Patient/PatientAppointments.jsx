import DashboardNavbar from "../../components/DashboardNavbar";

const PatientAppointments = () => {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sharma",
      department: "Cardiology",
      date: "25 Aug 2025",
      status: "Upcoming",
    },
    {
      id: 2,
      doctor: "Dr. Mehta",
      department: "Orthopedics",
      date: "10 Aug 2025",
      status: "Completed",
    },
  ];

  return (
    <>
      <DashboardNavbar role="patient" />

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Appointments
        </h2>

        <div className="space-y-4">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white p-6 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {appt.doctor}
                </h3>
                <p className="text-gray-500">
                  {appt.department} • {appt.date}
                </p>
              </div>

              <span
                className={`px-4 py-1 rounded-full text-sm font-medium
                  ${
                    appt.status === "Upcoming"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }
                `}
              >
                {appt.status}
              </span>
            </div>
          ))}
        </div>

        {/* Info */}
        <p className="text-sm text-gray-500 mt-6">
          Appointments are managed by admin or hospital staff.
        </p>
      </div>
    </>
  );
};

export default PatientAppointments;
