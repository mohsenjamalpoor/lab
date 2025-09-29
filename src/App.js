import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NursingDiagnosis from "./components/NursingDiagnosis";
import DripCalculator from "./components/DripCalculator";
import DWSerumCalculator from "./components/DWSerumCalculator";
import RhythmPage from "./components/RhythmPage";
import RhythmHome from "./components/heart/RhythmHome";

import LoginPage from "./LoginPage";
import LabPage from "./components/LabPage";
import BloodProductsPage from "./components/BloodProductsPage";
import TestsPage from "./components/TestsPage";
import SurgeryPage from "./components/SurgeryPage";
import DrainsPage from "./pages/DrainsPage";

import PostOpCarePage from "./pages/PostOpCarePage";

import DrainDetailPage from "./components/DrainDetailPage";

import EducationalNeeds from "./components/EducationalNeeds";






function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/home" element={<HomePage />} />
 <Route path="/lab" element={<LabPage />} />
<Route path="/blood-products" element={<BloodProductsPage />} />
<Route path="/tests" element={<TestsPage />} />

        <Route path="nursingdiagnosis" element={<NursingDiagnosis />} />
        <Route path="drip" element={<DripCalculator />} />
        <Route path="/dw-serum" element={<DWSerumCalculator />} />
          <Route path="/rhythm" element={<RhythmHome />} />
        <Route path="/rhythm/:id" element={<RhythmPage />} />
        <Route path="/educationalNeeds" element={<EducationalNeeds />} />
        <Route path="/surgery" element={<SurgeryPage />} />
        <Route path="/surgery/drains" element={<DrainsPage />} />
          <Route path="/surgery/drains/:id" element={<DrainDetailPage />} />

<Route path="/surgery/post-op-care" element={<PostOpCarePage />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
