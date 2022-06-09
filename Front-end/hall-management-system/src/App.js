import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './Routes/Homepage/Homepage';
import { Loginpage } from './Routes/Loginpage/Loginpage';
import { Adminpage } from './Routes/Adminpage/Adminpage';
import { Dashboard } from './Routes/Dashboardpage/Dashboard';
import { Addmemberpage } from './Routes/Addmemberpage/Addmemberpage';
import { Updateuserpage } from './Routes/Updateuserpage/Updateuser';
import { Userdetailspage } from './Routes/Userdetailspage/Userdetailspage';
import { StaffPage } from './Routes/StaffPage/StaffPage';
import { Staffdetailpage } from './Routes/Staffdetailpage/Staffdetailpage';
import { AddStudentPage } from './Routes/AddStudentPage/AddStudentPage';
import { UpdateStudentPage } from './Routes/UpdateStudentPage/UpdateStudentPage';
import { AdminPasswordResetPage } from './Routes/AdminPasswordResetPage/AdminPasswordResetPage';
import { SummeryPage } from './Routes/SummeryPage/SummeryPage';
import { EditStudentPage } from './Routes/EditStudentPage/EditStudentPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addMember" element={<Addmemberpage />} />
        <Route path="/addMember/:id" element={<Updateuserpage />} />
        <Route path="/userDetails/:id" element={<Userdetailspage />} />
        <Route path="/setStaffProfile/:id" element={<StaffPage />} />
        <Route path="/staffDetail/:id" element={<Staffdetailpage />} />
        <Route path="/addStudent/:id" element={<AddStudentPage />} />
        <Route path="/updateStudent/:id" element={<UpdateStudentPage />} />
        <Route path="/summery" element={<SummeryPage />} />
        <Route
          path="/adminPasswordReset"
          element={<AdminPasswordResetPage />}
        />
        <Route path="/editStudent/:id" element={<EditStudentPage />} />
      </Routes>
    </div>
  );
}

export default App;
