import { BrowserRouter, Routes, Route } from "react-router-dom";
import LabSearchApp from "./components/LabSearchApp";
import HomePage from "./pages/HomePage";
import NursingDiagnosis from "./components/NursingDiagnosis";
import DripCalculator from "./components/DripCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="lab" element={<LabSearchApp />} />
        <Route path="nursingdiagnosis" element={<NursingDiagnosis/>} />
        <Route path="drip" element={<DripCalculator/>} />

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
