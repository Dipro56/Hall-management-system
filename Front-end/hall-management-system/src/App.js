import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './Routes/Homepage/Homepage';
import { Loginpage } from './Routes/Loginpage/Loginpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
