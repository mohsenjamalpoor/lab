import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm, selectedType, setSelectedType }) {
  const types = ["همه", "نرمال", "دهلیزی", "گره AV", "بطنی", "بلوک", "ایست قلبی"];

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
      <input
        type="text"
        placeholder="جستجوی ریتم..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-1/2 px-3 py-2 rounded-xl border dark:bg-gray-800 dark:text-white"
      />
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="px-3 py-2 rounded-xl border dark:bg-gray-800 dark:text-white"
      >
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
