import React, { useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const drugOptions = [
  { name: "داروی عمومی", value: "general" },
  { name: "هپارین", value: "heparin" },
  { name: "لابتولول", value: "labetalol" },
  { name: "مانیتول", value: "mannitol" },
  { name: "انسولین", value: "insulin" },
  { name: "NaCl 3%", value: "nacl3" },
];

export default function DripCalculator() {
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
        
        // const ratio = totalVolumeNum / 20; 
        // const nacl5Volume = ratio * 10 * 0.6; 
        // const nacl0_9Volume = ratio * 10 * 0.4; 
      

        const nacl5Vol = (totalVolumeNum * 0.5);
        const nacl0_9Vol = (totalVolumeNum * 0.5);

        return `برای تهیه ${formatRate(totalVolumeNum)} سی‌سی NaCl 3%:\n
  مقدار NaCl 5% مورد نیاز: ${formatRate(nacl5Vol)} سی‌سی\n
  مقدار سرم نرمال سالین 0.9% مورد نیاز: ${formatRate(nacl0_9Vol)} سی‌سی`;
      } else {
        return "روش محاسبه نامعتبر است.";
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

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-6 relative">
      <IoChevronBackCircle
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-3xl text-blue-600 cursor-pointer hover:scale-110 transition-transform"
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

      <button
        onClick={calculateDripRate}
        className="w-full bg-blue-600 text-white py-2 mt-4 rounded hover:bg-blue-700"
      >
        محاسبه
      </button>

      {result && (
        <div className="mt-4 whitespace-pre-line text-center font-semibold text-green-700">
          {result}
        </div>
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


function Select({ label, options, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <select
        className="w-full border rounded p-2 mt-1"
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
