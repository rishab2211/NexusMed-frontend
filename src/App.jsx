import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Help } from "./pages/Help";
import Inventory from "./pages/Inventory";
import ListOfMedicines from "./pages/ListOfMedicines";
import MedicineGroups from "./components/Inventory/MedicineGroups/MedicineGroups";
import Signin from "./components/SignIn/Signin";

function App() {
  return (
    <div>
      
      <div>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/help" element={<Help/>} />
              <Route path="/inventory" element={<Inventory/>} />
              <Route path="/inventory/ListOfMedicines" element={<ListOfMedicines />}
              />
              <Route path="/inventory/MedicineGroups" element={<MedicineGroups />}
              />
              <Route path="/" />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>


    </div>
  );
}

export default App;
