import { BrowserRouter, Routes, Route } from "react-router-dom";
import LabSearchApp from "./components/LabSearchApp";
import HomePage from "./pages/HomePage";
import NursingDiagnosis from "./components/NursingDiagnosis";
import DripCalculator from "./components/DripCalculator";
import DWSerumCalculator from "./components/DWSerumCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="lab" element={<LabSearchApp />} />
        <Route path="nursingdiagnosis" element={<NursingDiagnosis />} />
        <Route path="drip" element={<DripCalculator />} />
        <Route path="/dw-serum" element={<DWSerumCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
