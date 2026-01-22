import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import CreateDoctor from "./pages/Admin/CreateDoctor";
import CreatePatient from "./pages/Admin/CreatePatient";
import Appointments from "./pages/Admin/Appointments";

import PatientList from "./pages/Doctor/PatientsList";
import AddMedicalRecord from "./pages/Doctor/AddMedicalRecord";
import Prescriptions from "./pages/Doctor/Prescriptions";
import UploadReports from "./pages/Doctor/UploadReports";


import PatientRecords from "./pages/Patient/PatientRecords";
import PatientProfile from "./pages/Patient/PatientProfile";
import PatientAppointments from "./pages/Patient/PatientAppointments";
import PatientReports from "./pages/Patient/PatientReports";






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />

        <Route path="/admin/create-doctor" element={<CreateDoctor />} />
        <Route path="/admin/create-patient" element={<CreatePatient/>}/>
        <Route path="/admin/appointments" element={< Appointments/>}/>

        <Route path="/doctor/patients" element={<PatientList/>}/>
        <Route path="/doctor/add-record" element={< AddMedicalRecord/>}/>
        <Route path="/doctor/Prescriptions" element={<Prescriptions/>}/>
        <Route path="/doctor/upload" element={<UploadReports/>}/>
        
        <Route path="/patient/records"  element={<PatientRecords/>}/>
        <Route path="/patient/profile"  element={<PatientProfile/>}/>
        <Route path="/patient/appointments"  element={<PatientAppointments/>}/>
        <Route path="/patient/reports"  element={<PatientReports/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
