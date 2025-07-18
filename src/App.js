import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LabSearchApp from "./components/LabSearchApp";
import HomePage from "./pages/HomePage";
import NursingDiagnosis from "./components/NursingDiagnosis";
import DripCalculator from "./components/DripCalculator";
import DWSerumCalculator from "./components/DWSerumCalculator";
import RhythmPage from "./components/RhythmPage";
import RhythmHome from "./components/heart/RhythmHome";
import ECGCalculator from "./components/heart/ECGCalculator";
import LoginPage from "./LoginPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/home" element={<HomePage />} />
        <Route path="lab" element={<LabSearchApp />} />
        <Route path="nursingdiagnosis" element={<NursingDiagnosis />} />
        <Route path="drip" element={<DripCalculator />} />
        <Route path="/dw-serum" element={<DWSerumCalculator />} />
          <Route path="/rhythm" element={<RhythmHome />} />
        <Route path="/rhythm/:id" element={<RhythmPage />} />
        <Route path="/ecg-calculator" element={<ECGCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
