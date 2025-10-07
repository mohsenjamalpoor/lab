import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaSyringe, FaExclamationTriangle } from "react-icons/fa";

const drugOptions = [
  { name: "داروی عمومی", value: "general" },
  { name: "هپارین", value: "heparin" },
  { name: "لابتولول", value: "labetalol" },
  { name: "مانیتول", value: "mannitol" },
  { name: "انسولین", value: "insulin" },
  { name: "NaCl 3%", value: "nacl3" },
  { name: "میدازولام", value: "midazolam" },
];

export default function DripCalculator() {
  const [midazolamAgeGroup, setMidazolamAgeGroup] = useState("adult");
  const navigate = useNavigate();
  const [drugType, setDrugType] = useState("");
  const [totalVolume, setTotalVolume] = useState("");
  const [totalMedical, setTotalMedical] = useState("");
  const [doctorOrder, setDoctorOrder] = useState("");
  const [ampouleCount, setAmpouleCount] = useState("1");
  const [weightKg, setWeightKg] = useState("");
  const [nacl3Method, setNacl3Method] = useState("water");
  const [result, setResult] = useState(null);

  const formatRate = (value) => {
    const num = parseFloat(value);
    return Number.isInteger(num) ? num.toString() : num.toFixed(2);
  };

  const calculators = {
    general: () => {
      const rate =
        (parseFloat(totalVolume) * parseFloat(doctorOrder)) /
        parseFloat(totalMedical);
      return `سرعت انفوزیون: ${formatRate(rate)} ml/hr`;
    },
    heparin: () => {
      const divisor = ampouleCount === "1" ? 100 : 200;
      const rate = parseFloat(doctorOrder) / divisor;
      return `سرعت تزریق هپارین: ${formatRate(rate)} ml/hr`;
    },
    labetalol: () => {
      const rate = parseFloat(doctorOrder) / 5;
      return `سرعت تزریق لابتولول: ${formatRate(rate)} سی‌سی/ساعت`;
    },
    mannitol: () => {
      const rate = parseFloat(doctorOrder) * 5;
      return `حجم مانیتول: ${formatRate(rate)} سی‌سی`;
    },
    insulin: () => {
      const weight = parseFloat(weightKg);
      const units = parseFloat(totalMedical);
      const volume = parseFloat(totalVolume);
      const dose = 0.1;
      const dropFactor = 20;

      const concentration = units / volume;
      const ccPerHr = (dose / concentration) * weight;
      const gttPerMin = (ccPerHr * dropFactor) / 60;

      return `سرعت تزریق انسولین: ${formatRate(ccPerHr)} cc/hr (${formatRate(
        gttPerMin
      )} قطره/دقیقه)`;
    },
    nacl3: () => {
      const totalVolumeNum = parseFloat(totalVolume);
      if (isNaN(totalVolumeNum) || totalVolumeNum <= 0)
        return "حجم نامعتبر است.";

      if (nacl3Method === "water") {
        const ratio = totalVolumeNum / 10;
        const nacl5Volume = ratio * 6;
        const waterVolume = ratio * 4;

        return `برای تهیه ${formatRate(totalVolumeNum)} سی‌سی NaCl 3%:\n
   مقدار NaCl 5% مورد نیاز: ${formatRate(nacl5Volume)} سی‌سی\n
    مقدار آب مقطر مورد نیاز: ${formatRate(waterVolume)} سی‌سی`;
      } else if (nacl3Method === "nacl0.9") {
        const nacl5Vol = (totalVolumeNum * 0.5);
        const nacl0_9Vol = (totalVolumeNum * 0.5);

        return `برای تهیه ${formatRate(totalVolumeNum)} سی‌سی NaCl 3%:\n
  مقدار NaCl 5% مورد نیاز: ${formatRate(nacl5Vol)} سی‌سی\n
  مقدار سرم نرمال سالین 0.9% مورد نیاز: ${formatRate(nacl0_9Vol)} سی‌سی`;
      } else {
        return "روش محاسبه نامعتبر است.";
      }
    },
    midazolam: () => {
      if (midazolamAgeGroup === "child") {
        const weight = parseFloat(weightKg);
        if (!weight || weight <= 0) return "وزن معتبر وارد کنید.";
        const dose = weight * 3;
        return `دوز کل: ${formatRate(dose)} mg\nدر 50cc رقیق می‌شود.\nبا سرعت پایه 5ml/hr شروع می‌کنیم و در صورت نیاز افزایش می‌یابد.`;
      } else {
        const rate =
          (parseFloat(totalVolume) * parseFloat(doctorOrder)) /
          parseFloat(totalMedical);
        return `سرعت انفوزیون میدازولام: ${formatRate(rate)} ml/hr`;
      }
    },
  };

  const calculateDripRate = () => {
    const commonMissing =
      !drugType ||
      (drugType === "general" &&
        (!totalVolume || !totalMedical || !doctorOrder)) ||
      (drugType === "heparin" && !doctorOrder) ||
      (drugType === "labetalol" && !doctorOrder) ||
      (drugType === "mannitol" && !doctorOrder) ||
      (drugType === "insulin" &&
        (!weightKg || !totalVolume || !totalMedical)) ||
      (drugType === "midazolam" &&
        ((midazolamAgeGroup === "child" && !weightKg) ||
         (midazolamAgeGroup === "adult" &&
          (!totalVolume || !totalMedical || !doctorOrder)))) ||
      (drugType === "nacl3" && !totalVolume);

    if (commonMissing) {
      setResult("لطفا تمام فیلدها را کامل کنید.");
      return;
    }

    const calculate = calculators[drugType];
    if (calculate) {
      setResult(calculate());
    } else {
      setResult("نوع دارو نامعتبر است.");
    }
  };

  const clearForm = () => {
    setDrugType("");
    setTotalVolume("");
    setTotalMedical("");
    setDoctorOrder("");
    setAmpouleCount("1");
    setWeightKg("");
    setNacl3Method("water");
    setMidazolamAgeGroup("adult");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-4">
      <div className="max-w-2xl mx-auto">
        
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaSyringe className="text-purple-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                محاسبه سرعت انفوزیون
              </h1>
              <p className="text-gray-600 mt-1">محاسبه دقیق سرعت تزریق داروها</p>
            </div>
          </div>
        </div>

        {/* ماشین حساب */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid gap-4">
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                نوع دارو
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={drugType}
                onChange={(e) => {
                  setDrugType(e.target.value);
                  setResult(null);
                }}
              >
                <option value="">انتخاب کنید</option>
                {drugOptions.map((drug) => (
                  <option key={drug.value} value={drug.value}>
                    {drug.name}
                  </option>
                ))}
              </select>
            </div>

            {drugType === "general" && (
              <>
                <Input label="حجم محلول (ml):" value={totalVolume} onChange={setTotalVolume} />
                <Input label="کل دارو (mg):" value={totalMedical} onChange={setTotalMedical} />
                <Input label="دستور پزشک (mg):" value={doctorOrder} onChange={setDoctorOrder} />
              </>
            )}

            {drugType === "heparin" && (
              <>
                <Select
                  label="تعداد آمپول در ۵۰ سی‌سی:"
                  options={[
                    { label: "۱ آمپول", value: "1" },
                    { label: "۲ آمپول", value: "2" },
                  ]}
                  value={ampouleCount}
                  onChange={setAmpouleCount}
                />
                <Input label="دستور پزشک (واحد/kg/hr):" value={doctorOrder} onChange={setDoctorOrder} />
              </>
            )}

            {drugType === "labetalol" && (
              <Input label="دستور پزشک (mg/hr):" value={doctorOrder} onChange={setDoctorOrder} />
            )}

            {drugType === "mannitol" && (
              <Input label="دستور پزشک (gr):" value={doctorOrder} onChange={setDoctorOrder} />
            )}

            {drugType === "insulin" && (
              <>
                <Input label="وزن بیمار (kg):" value={weightKg} onChange={setWeightKg} />
                <Input label="کل انسولین (units):" value={totalMedical} onChange={setTotalMedical} />
                <Input label="حجم محلول (ml):" value={totalVolume} onChange={setTotalVolume} />
              </>
            )}

            {drugType === "midazolam" && (
              <>
                <Select
                  label="سن بیمار:"
                  options={[
                    { label: "بزرگسال", value: "adult" },
                    { label: "اطفال", value: "child" },
                  ]}
                  value={midazolamAgeGroup}
                  onChange={setMidazolamAgeGroup}
                />

                {midazolamAgeGroup === "child" ? (
                  <Input
                    label="وزن بیمار (kg):"
                    value={weightKg}
                    onChange={setWeightKg}
                  />
                ) : (
                  <>
                    <Input label="حجم محلول (ml):" value={totalVolume} onChange={setTotalVolume} />
                    <Input label="کل دارو (mg):" value={totalMedical} onChange={setTotalMedical} />
                    <Input label="دستور پزشک (mg):" value={doctorOrder} onChange={setDoctorOrder} />
                  </>
                )}
              </>
            )}

            {drugType === "nacl3" && (
              <>
                <Input label="حجم نهایی محلول (ml):" value={totalVolume} onChange={setTotalVolume} />
                <Select
                  label="روش تهیه:"
                  options={[
                    { label: "مخلوط با آب مقطر", value: "water" },
                    { label: "مخلوط با نرمال سالین 0.9%", value: "nacl0.9" },
                  ]}
                  value={nacl3Method}
                  onChange={setNacl3Method}
                />
              </>
            )}

            <div className="flex gap-3">
              <button
                onClick={calculateDripRate}
                className="flex-1 bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-colors font-medium"
              >
                محاسبه
              </button>
              <button
                onClick={clearForm}
                className="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-400 transition-colors font-medium"
              >
                پاک کردن
              </button>
            </div>
          </div>

          {/* نتیجه */}
          {result && (
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-bold text-purple-800 mb-3 text-center">نتیجه محاسبه:</h3>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-purple-700 whitespace-pre-line">{result}</p>
              </div>
            </div>
          )}

          {/* هشدار */}
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-2 text-yellow-800 mb-2">
              <FaExclamationTriangle />
              <span className="font-medium">توجه مهم:</span>
            </div>
            <p className="text-yellow-700 text-sm">
              • قبل از تزریق با پزشک یا داروساز مشورت کنید<br/>
              • از صحت محاسبات اطمینان حاصل کنید<br/>
              • شرایط خاص بیمار را در نظر بگیرید
            </p>
          </div>
        </div>

        {/* دکمه بازگشت */}
        <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-medium"
          >
            بازگشت
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-gray-700 mb-2 font-medium">{label}</label>
      <input
        type="number"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="مثال: 100"
      />
    </div>
  );
}

function Select({ label, options, value, onChange }) {
  return (
    <div>
      <label className="block text-gray-700 mb-2 font-medium">{label}</label>
      <select
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}