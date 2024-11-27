import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-details" element={<CarDetails />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
