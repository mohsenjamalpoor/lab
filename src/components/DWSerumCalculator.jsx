import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTint, FaExclamationTriangle } from "react-icons/fa";

export default function DWSerumCalculator() {
  const [baseConcentration, setBaseConcentration] = useState("5");
  const [targetConcentration, setTargetConcentration] = useState("7.5");
  const [volume, setVolume] = useState("");
  const [dextroseType, setDextroseType] = useState("50");
  const [result, setResult] = useState("");

  const calculate = () => {
    const base = parseFloat(baseConcentration);
    const target = parseFloat(targetConcentration);
    const vol = parseFloat(volume);
    const dex = parseFloat(dextroseType);

    if (!base || !target || !vol || base >= target || dex <= target) {
      setResult(
        "لطفاً اطلاعات معتبر وارد کنید (غلظت پایه باید کمتر از هدف باشد و دکستروز انتخابی باید قوی‌تر از هدف باشد)."
      );
      return;
    }

    const dextroseVolume = ((target - base) * vol) / (dex - target);
    setResult(
      `${dextroseVolume.toFixed(2)} سی‌سی D${dex}% به ${vol} سی‌سی سرم ${base}% اضافه شود تا به ${target}% برسد.`
    );
  };

  const clearForm = () => {
    setVolume("");
    setResult("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-2xl mx-auto">
        
       
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaTint className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                محاسبه تبدیل سرم قندی
              </h1>
              <p className="text-gray-600 mt-1">محاسبه دقیق دکستروز مورد نیاز</p>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid gap-4">
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                غلظت پایه سرم (%)
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={baseConcentration}
                onChange={(e) => setBaseConcentration(e.target.value)}
              >
                <option value="5">5%</option>
                <option value="7.5">7.5%</option>
                <option value="10">10%</option>
                <option value="12.5">12.5%</option>
                <option value="15">15%</option>
                <option value="17.5">17.5%</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                غلظت هدف (%)
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={targetConcentration}
                onChange={(e) => setTargetConcentration(e.target.value)}
              >
                <option value="7.5">7.5%</option>
                <option value="10">10%</option>
                <option value="12.5">12.5%</option>
                <option value="15">15%</option>
                <option value="17.5">17.5%</option>
                <option value="20">20%</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                نوع دکستروز افزودنی
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={dextroseType}
                onChange={(e) => setDextroseType(e.target.value)}
              >
                <option value="50">D50%</option>
                <option value="20">D20%</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                حجم سرم پایه (سی‌سی)
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="مثال: 100"
                min="0"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={calculate}
                className="flex-1 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
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
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-3 text-center">نتیجه محاسبه:</h3>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-blue-700">{result}</p>
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
              • محاسبات بر اساس فرمول استاندارد پزشکی انجام می‌شود<br/>
              • قبل از تزریق با داروساز یا پزشک مشورت کنید<br/>
              • از استریل بودن تجهیزات اطمینان حاصل کنید
            </p>
          </div>
        </div>

       
        <div className="text-center">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            بازگشت به صفحه اصلی
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}