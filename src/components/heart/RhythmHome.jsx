import React, { useState } from "react";
import { rhythms } from "../../utils/rhythms";
import RhythmCard from "./RhythmCard";

export default function RhythmHome() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("همه");

  const filtered = rhythms.filter((rhythm) => {
    const matchSearch = rhythm.name.includes(searchTerm);
    const matchType = selectedType === "همه" || rhythm.type === selectedType;
    return matchSearch && matchType;
  });

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="جستجوی ریتم..."
          className="w-full sm:w-1/2 px-3 py-2 rounded-xl border"
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-3 py-2 rounded-xl border"
        >
          {[
            "همه",
            "نرمال",
            "دهلیزی",
            "گره AV",
            "بطنی",
            "بلوک",
            "ایست قلبی",
          ].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <RhythmCard key={r.id} rhythm={r} />
        ))}
      </div>
    </div>
  );
}
