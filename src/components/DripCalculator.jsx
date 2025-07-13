
import React, { useState } from 'react';

const drugOptions = [
  { name: 'داروی عمومی', value: 'general' },
  { name: 'هپارین', value: 'heparin' },
  { name: 'لابتولول', value: 'labetalol' },
  { name: 'نوراپی‌نفرین', value: 'norepinephrine' },
];

export default function DripCalculator() {
  const [drugType, setDrugType] = useState('');
  const [totalVolume, setTotalVolume] = useState('');
  const [totalMedical, setTotalMedical] = useState('');
  const [doctorOrder, setDoctorOrder] = useState('');
  const [ampouleCount, setAmpouleCount] = useState('1');
  const [result, setResult] = useState(null);

  const calculators = {
    heparin: () => {
      const divisor = ampouleCount === '1' ? 100 : 200;
      const rate = parseFloat(doctorOrder) / divisor;
      return ` سرعت تزریق هپارین: ${rate.toFixed(2)} ml/hr`;
    },

    labetalol: () => {
      const rate = parseFloat(doctorOrder) / 5;
      return ` سرعت تزریق لابتولول: ${rate.toFixed(2)} ml/hr`;
    },

    norepinephrine: () => {
      const rate = (parseFloat(doctorOrder) * 60 * parseFloat(totalVolume)) / parseFloat(totalMedical);
      return ` سرعت تزریق نوراپی‌نفرین: ${rate.toFixed(2)} ml/hr`;
    },

    general: () => {
      const rate = (parseFloat(totalVolume) * parseFloat(doctorOrder)) / parseFloat(totalMedical);
      return ` سرعت انفوزیون: ${rate.toFixed(2)} ml/hr`;
    },
  };

  const calculateDripRate = () => {
    if (!drugType || !doctorOrder || (drugType === 'general' && (!totalVolume || !totalMedical))) {
      setResult('لطفا تمام فیلدها را پر کنید.');
      return;
    }

    const calculate = calculators[drugType];
    if (calculate) {
      setResult(calculate());
        setTotalVolume('');
    setTotalMedical('');
    setDoctorOrder('');
    setAmpouleCount('1');
    } else {
      setResult('نوع دارو نامعتبر است.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-5">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">محاسبه سرعت انفوزیون</h2>

      <div className="mb-4">
        <label className="block text-gray-700">نوع دارو:</label>
        <select
          className="w-full border rounded p-2 mt-1"
          value={drugType}
          onChange={(e) => {
            setDrugType(e.target.value);
            setResult(null);
          }}
        >
          <option value="">-- انتخاب دارو --</option>
          {drugOptions.map((drug) => (
            <option key={drug.value} value={drug.value}>
              {drug.name}
            </option>
          ))}
        </select>
      </div>

      {drugType === 'heparin' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">تعداد آمپول در ۵۰ سی‌سی:</label>
            <select
              className="w-full border rounded p-2 mt-1"
              value={ampouleCount}
              onChange={(e) => setAmpouleCount(e.target.value)}
            >
              <option value="1">۱ آمپول</option>
              <option value="2">۲ آمپول</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">دستور پزشک (واحد/kg/hr):</label>
            <input
              type="number"
              className="w-full border rounded p-2 mt-1"
              value={doctorOrder}
              onChange={(e) => setDoctorOrder(e.target.value)}
            />
          </div>
        </>
      )}

      {drugType === 'labetalol' && (
        <div className="mb-4">
          <label className="block text-gray-700">دستور پزشک (mg/min):</label>
          <input
            type="number"
            className="w-full border rounded p-2 mt-1"
            value={doctorOrder}
            onChange={(e) => setDoctorOrder(e.target.value)}
          />
        </div>
      )}

      {drugType === 'norepinephrine' && (
        <>
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
            <label className="block text-gray-700">کل دارو (mcg):</label>
            <input
              type="number"
              className="w-full border rounded p-2 mt-1"
              value={totalMedical}
              onChange={(e) => setTotalMedical(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">دستور پزشک (mcg/min):</label>
            <input
              type="number"
              className="w-full border rounded p-2 mt-1"
              value={doctorOrder}
              onChange={(e) => setDoctorOrder(e.target.value)}
            />
          </div>
        </>
      )}

      {drugType === 'general' && (
        <>
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
            <label className="block text-gray-700">کل دارو (mg):</label>
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
        </>
      )}

      <button
        onClick={calculateDripRate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        محاسبه
      </button>

      {result && (
        <div className="mt-4 text-center font-semibold text-green-700">{result}</div>
      )}
    </div>
  );
}
