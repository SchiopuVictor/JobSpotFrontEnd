import Home from './pages/home';
import Internshipuri from './pages/Internshipuri';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponet';
import Login from './pages/Login';
import Register from './pages/Register';
import Notificari from './pages/Notificari';
import Cv from './pages/Cv';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <HeaderComponent />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internship" element={<Internshipuri />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notificari" element={<Notificari />} />
            <Route path="/cv" element={<Cv />} />
          </Routes>
        </div>

        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;