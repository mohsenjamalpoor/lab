import { BrowserRouter, Routes, Route } from "react-router-dom";
import LabSearchApp from "./components/LabSearchApp";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="lab" element={<LabSearchApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
