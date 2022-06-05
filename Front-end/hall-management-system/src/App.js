import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './Routes/Homepage/Homepage';
import { Loginpage } from './Routes/Loginpage/Loginpage';
import { Adminpage } from './Routes/Adminpage/Adminpage';
import { Dashboard } from './Routes/Dashboardpage/Dashboard';
import { Addmemberpage } from './Routes/Addmemberpage/Addmemberpage';

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
      </Routes>
    </div>
  );
}

export default App;
