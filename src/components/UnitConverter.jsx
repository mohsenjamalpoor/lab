import React, { useState } from "react";

export default function UnitConverter() {
  const [meq, setMeq] = useState("");
  const [valency, setValency] = useState("1");
  const [molarMass, setMolarMass] = useState("");
  const [result, setResult] = useState(null);

  const convertToMg = () => {
    const meqNum = parseFloat(meq);
    const val = parseFloat(valency);
    const molMass = parseFloat(molarMass);

    if (!meqNum || !val || !molMass) {
      setResult("لطفاً همه مقادیر را وارد کنید.");
      return;
    }

    const mg = (meqNum * molMass) / val;
    setResult(`${mg.toFixed(2)} میلی‌گرم`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">تبدیل mEq به mg</h2>

      <Input label="مقدار (mEq):" value={meq} onChange={setMeq} />
      <Input label="ظرفیت یون (valency):" value={valency} onChange={setValency} />
      <Input label="جرم مولی (mg/mmol):" value={molarMass} onChange={setMolarMass} />

      <button
        onClick={convertToMg}
        className="w-full bg-blue-600 text-white py-2 mt-4 rounded hover:bg-blue-700"
      >
        تبدیل
      </button>

      {result && (
        <div className="mt-4 text-center text-green-700 font-semibold">{result}</div>
      )}
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type="number"
        className="w-full border rounded p-2 mt-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
