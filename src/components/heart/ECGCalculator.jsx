import React, { useState } from "react";

export default function ECGCalculator() {
  const [squares, setSquares] = useState(0);
  const bpm = squares > 0 ? Math.round(300 / squares) : 0;

  let category = "";
  if (bpm > 100) category = "تاکی‌کاردی";
  else if (bpm >= 60) category = "نرمال";
  else if (bpm > 0) category = "برادیکاردی";

  return (
    <div className="my-8 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">محاسبه ضربان قلب (BPM)</h2>
      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="squares" className="font-medium">تعداد مربع بزرگ بین دو R:</label>
        <input
          id="squares"
          type="number"
          min="0"
          value={squares}
          onChange={(e) => setSquares(Number(e.target.value))}
          className="px-3 py-2 border rounded-xl w-24 dark:bg-gray-700 dark:text-white"
        />
      </div>
      {bpm > 0 && (
        <div className="text-lg font-semibold">
          ضربان: <span className="text-blue-600">{bpm} bpm</span> ({category})
        </div>
      )}
    </div>
  );
}
