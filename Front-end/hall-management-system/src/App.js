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
      </Routes>
    </div>
  );
}

export default App;
