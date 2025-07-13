import React, { useState } from "react";

export default function DWSerumCalculator() {
  const [baseConcentration, setBaseConcentration] = useState("5");
  const [targetConcentration, setTargetConcentration] = useState("7.5");
  const [volume, setVolume] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const base = parseFloat(baseConcentration);
    const target = parseFloat(targetConcentration);
    const vol = parseFloat(volume);

    if (!base || !target || !vol || base >= target) {
      setResult("لطفاً اطلاعات معتبر وارد کنید (غلظت پایه باید کمتر از هدف باشد).");
      return;
    }

    
    const serumVolume = ((target - base) * vol) / (50 - target); 
    setResult(`${serumVolume.toFixed(2)} سی‌سی D50% به ${vol} سی‌سی سرم ${base}% اضافه شود.`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-center text-blue-700 mb-4">
        محاسبه تبدیل سرم قندی
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700">غلظت پایه (٪):</label>
        <select
          className="w-full border rounded p-2 mt-1"
          value={baseConcentration}
          onChange={(e) => setBaseConcentration(e.target.value)}
        >
          <option value="5">5%</option>
          <option value="7.5">7.5%</option>
          <option value="10">10%</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">غلظت هدف (٪):</label>
        <select
          className="w-full border rounded p-2 mt-1"
          value={targetConcentration}
          onChange={(e) => setTargetConcentration(e.target.value)}
        >
          <option value="7.5">7.5%</option>
          <option value="10">10%</option>
          <option value="12.5">12.5%</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">حجم سرم پایه (cc):</label>
        <input
          type="number"
          className="w-full border rounded p-2 mt-1"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>

      <button
        onClick={calculate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        محاسبه
      </button>

      {result && (
        <div className="mt-4 text-center font-semibold text-green-700">
          {result}
        </div>
      )}
    </div>
  );
}
