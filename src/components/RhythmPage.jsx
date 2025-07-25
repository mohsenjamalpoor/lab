import React from "react";
import { useParams } from "react-router-dom";
import { rhythms } from "../utils/rhythms";

export default function RhythmPage() {
  const { id } = useParams();
  const rhythm = rhythms.find((r) => r.id === id);

  if (!rhythm)
    return <p className="p-4 text-red-600 font-bold">ریتم پیدا نشد.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-2xl shadow">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">{rhythm.name}</h1>

      {rhythm.image && (
        <img
          src={rhythm.image}
          alt={rhythm.name}
          className="w-full rounded-xl mb-4"
        />
      )}

      <p className="text-lg leading-loose mb-4">{rhythm.description}</p>

      {rhythm.characteristics && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">ویژگی‌ها:</h2>
          <ul className="list-disc list-inside space-y-1">
            {rhythm.characteristics.map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
