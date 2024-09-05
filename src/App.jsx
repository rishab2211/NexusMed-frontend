import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Help } from "./pages/Help";
import Inventory from "./pages/Inventory";
import ListOfMedicines from "./pages/ListOfMedicines";
import MedicineGroups from "./components/Inventory/MedicineGroups/MedicineGroups";
import Signin from "./components/SignIn/Signin";
import Signup from "./components/Signup/Signup";
import { PrivateRoute } from './components/Routes';  // Import PrivateRoute
import Report from "./components/Reports/Report";
import PaymentReport from "./components/Reports/PaymentReport/PaymentReport";
import SalesReport from "./components/Reports/SalesReport/SalesReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/ListOfMedicines" element={<ListOfMedicines />} />
          <Route path="/inventory/MedicineGroups" element={<MedicineGroups />} />
          <Route path="/reports" element={<Report/>} />
          <Route path="/reports/paymentReport" element={<PaymentReport/>} />
          <Route path="/reports/salesReport" element={<SalesReport/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
