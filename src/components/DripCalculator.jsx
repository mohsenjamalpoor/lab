import React, { useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const drugOptions = [
  { name: "داروی عمومی", value: "general" },
  { name: "هپارین", value: "heparin" },
  { name: "لابتولول", value: "labetalol" },
  { name: "مانیتول", value: "mannitol" },
  { name: "انسولین", value: "insulin" },
];

export default function DripCalculator() {
  const navigator = useNavigate();
  const [drugType, setDrugType] = useState("");
  const [totalVolume, setTotalVolume] = useState("");
  const [totalMedical, setTotalMedical] = useState("");
  const [doctorOrder, setDoctorOrder] = useState("");
  const [ampouleCount, setAmpouleCount] = useState("1");
  const [weightKg, setWeightKg] = useState("");
  const [result, setResult] = useState(null);

  const formatRate = (value) => {
    const num = parseFloat(value);
    return Number.isInteger(num) ? num.toString() : num.toFixed(2);
  };

  const calculators = {
    heparin: () => {
      const divisor = ampouleCount === "1" ? 100 : 200;
      const rate = parseFloat(doctorOrder) / divisor;
      return `سرعت تزریق هپارین: ${formatRate(rate)} ml/hr`;
    },

    labetalol: () => {
      const rate = parseFloat(doctorOrder) / 5;
      return `سرعت تزریق لابتولول: ${formatRate(rate)} سی سی/ساعت`;
    },

    mannitol: () => {
      const rate = parseFloat(doctorOrder) * 5;
      return `حجم مانیتول: ${formatRate(rate)} سی‌سی`;
    },

    general: () => {
      const rate =
        (parseFloat(totalVolume) * parseFloat(doctorOrder)) /
        parseFloat(totalMedical);
      return `سرعت انفوزیون: ${formatRate(rate)} ml/hr`;
    },

    insulin: () => {
      const weight = parseFloat(weightKg);
      const dose = 0.1; // دوز ثابت انسولین: 0.1 واحد/kg/hr
      const units = parseFloat(totalMedical); // کل واحد انسولین
      const volume = parseFloat(totalVolume); // حجم محلول
      const dropFactor = 20; // قطره در هر سی‌سی

      const concentration = units / volume;
      const ccPerKgPerHr = dose / concentration;
      const ccPerHr = ccPerKgPerHr * weight;
      const gttPerMin = (ccPerHr * dropFactor) / 60;

      return `سرعت تزریق انسولین: ${formatRate(ccPerHr)} cc/hr (${formatRate(
        gttPerMin
      )} قطره/دقیقه)`;
    },
  };

  const calculateDripRate = () => {
    const commonFieldsMissing =
      !drugType ||
      (drugType === "general" &&
        (!totalVolume || !totalMedical || !doctorOrder)) ||
      (drugType === "heparin" && !doctorOrder) ||
      (drugType === "labetalol" && !doctorOrder) ||
      (drugType === "mannitol" && !doctorOrder) ||
      (drugType === "insulin" &&
        (!weightKg || !totalVolume || !totalMedical));

    if (commonFieldsMissing) {
      setResult("لطفا تمام فیلدها را پر کنید.");
      return;
    }

    const calculate = calculators[drugType];
    if (calculate) {
      setResult(calculate());
    } else {
      setResult("نوع دارو نامعتبر است.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-5 relative">
      <IoChevronBackCircle
        onClick={() => navigator(-1)}
        className="absolute top-4 left-4 text-3xl text-blue-600 cursor-pointer hover:scale-105 transition-transform"
      />
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
        محاسبه سرعت انفوزیون
      </h2>

    
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
          <option value="">انتخاب دارو</option>
          {drugOptions.map((drug) => (
            <option key={drug.value} value={drug.value}>
              {drug.name}
            </option>
          ))}
        </select>
      </div>

      {drugType === "insulin" && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">وزن بیمار (kg):</label>
            <input
              type="number"
              className="w-full border rounded p-2 mt-1"
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">کل انسولین (units):</label>
            <input
              type="number"
              className="w-full border rounded p-2 mt-1"
              value={totalMedical}
              onChange={(e) => setTotalMedical(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">حجم محلول (ml):</label>
            <input
              type="number"
              className="w-full border rounded p-2 mt-1"
              value={totalVolume}
              onChange={(e) => setTotalVolume(e.target.value)}
            />
          </div>
        </>
      )}

      
      {drugType === "heparin" && (
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

      
      {drugType === "labetalol" && (
        <div className="mb-4">
          <label className="block text-gray-700">دستور پزشک (mg/hr):</label>
          <input
            type="number"
            className="w-full border rounded p-2 mt-1"
            value={doctorOrder}
            onChange={(e) => setDoctorOrder(e.target.value)}
          />
        </div>
      )}

      
      {drugType === "mannitol" && (
        <div className="mb-4">
          <label className="block text-gray-700">دستور پزشک (gr):</label>
          <input
            type="number"
            className="w-full border rounded p-2 mt-1"
            value={doctorOrder}
            onChange={(e) => setDoctorOrder(e.target.value)}
          />
        </div>
      )}

     
      {drugType === "general" && (
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
        <div className="mt-4 text-center font-semibold text-green-700">
          {result}
        </div>
      )}
    </div>
  );
}
