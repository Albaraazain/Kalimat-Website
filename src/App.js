import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DashboardPage from './pages/DashboardPage';
import PolicyPage from './pages/PolicyPage';
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/policypage" element={<PolicyPage />} />
        <Route path="/termsandconditions" element={<TermsAndConditionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
