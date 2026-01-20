import DashboardNavbar from "../../components/DashboardNavbar";
import DashboardCard from "../../components/DashboardCard";

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar role="doctor" />

      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Doctor Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard
            title="Patients List"
            description="View assigned patients"
            link="/doctor/patients"
          />

          <DashboardCard
            title="Add Medical Record"
            description="Create diagnosis & notes"
            link="/doctor/add-record"
          />

          <DashboardCard
            title="Prescriptions"
            description="Manage prescriptions"
            link="/doctor/prescriptions"
          />

          <DashboardCard
            title="Upload Reports"
            description="Upload patient reports"
            link="/doctor/upload"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
