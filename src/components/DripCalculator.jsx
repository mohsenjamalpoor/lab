import React, { useState } from 'react';

export default function DripCalculator() {
  const [totalVolume, setTotalVolume] = useState('');
  const [totalMedical, setTotalMedical] = useState('');
  const [doctorOrder, setDoctorOrder] = useState('');
  const [result, setResult] = useState(null);

  const calculateDripRate = () => {
    if (!totalVolume || !totalMedical || !doctorOrder) {
      setResult('لطفا تمام فیلدها را پر کنید.');
      return;
    }

    const rate = (parseFloat(totalVolume) * parseFloat(doctorOrder)) / parseFloat(totalMedical);
    setResult(`سرعت انفوزیون : ${rate.toFixed(2)} سی سی در ساعت `);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-5">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">محاسبه دریپ</h2>

      <div className="mb-4">
        <label className="block text-gray-700">حجم محلول (ml):</label>
        <input
          type="number"
          className="w-full border rounded p-2 mt-1"
          value={totalVolume}
          onChange={(e) => setTotalVolume(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700"> کل دارو (mg):</label>
        <input
          type="number"
          className="w-full border rounded p-2 mt-1"
          value={totalMedical}
          onChange={(e) => setTotalMedical(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">دستور پزشک (mg):</label>
        <input
          type="number"
          className="w-full border rounded p-2 mt-1"
          value={doctorOrder}
          onChange={(e) => setDoctorOrder(e.target.value)}
        />
      </div>

      <button
        onClick={calculateDripRate}
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
