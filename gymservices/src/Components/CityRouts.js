import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PimpriComponent from './PimpriComponent';
import BanerComponent from './BanerComponent';
import WakadComponent from './WakadComponent';

const CityRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pimpriComponent" element={<PimpriComponent />} />
        <Route path="/banerComponent" element={<BanerComponent />} />
        <Route path="/wakadComponent" element={<WakadComponent />} />
      </Routes>
    </Router>
  );
};

export default CityRoutes;
