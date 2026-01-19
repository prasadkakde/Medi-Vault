import DashboardNavbar from "../components/DashboardNavbar";
import DashboardCard from "../components/DashboardCard";

const PatientDashboard = () => {
  return (
    <>
      <DashboardNavbar role="patient" />

      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Patient Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="My Medical Records"
            description="View diagnosis and medical history"
            link="/patient/records"
            buttonText="View Records"
          />

          <DashboardCard
            title="Reports"
            description="Download lab reports and scans"
            link="/patient/reports"
            buttonText="Download"
          />

          <DashboardCard
            title="Appointments"
            description="View upcoming & past appointments"
            link="/patient/appointments"
            buttonText="View"
          />

          <DashboardCard
            title="Profile"
            description="View and update your profile"
            link="/patient/profile"
            buttonText="Open"
          />
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
