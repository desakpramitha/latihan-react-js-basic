import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SemuaPage from './pages/SemuaPage';
import MakananPage from './pages/MakananPage';
import MinumanPage from './pages/MinumanPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<SemuaPage />} />
        <Route path="/semua" element={<SemuaPage />} />
        <Route path="/makanan" element={<MakananPage />} />
        <Route path="/minuman" element={<MinumanPage />} />
      </Routes>
    </Router>
  );
};

export default App;
