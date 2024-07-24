import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import RentalManagement from "./pages/RentalManagement";
import EarningsAndPayments from "./pages/EarningsAndPayments";
import InsuranceManagement from "./pages/InsuranceManagement";
import HostManagement from "./pages/HostDetails";
import ScooterManagement from "./pages/ScooterManagemenst";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ScooterManagement />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/host-details" element={<HostManagement />} />
        <Route path="/rental-management" element={<RentalManagement />} />
        <Route path="/earnings-payments" element={<EarningsAndPayments />} />
        <Route path="/insurance-management" element={<InsuranceManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
