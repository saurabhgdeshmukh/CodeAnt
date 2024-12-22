import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import SideBar from './components/SideBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<SideBar />} />
      </Routes>
    </Router>
  );
}

export default App;
