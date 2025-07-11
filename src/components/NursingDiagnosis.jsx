import React, { useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import nursingDiagnosis from "../utils/nursingDiagnosis";
import { FiX } from "react-icons/fi";

export default function NursingDiagnosis() {
  const navigator = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDiagnosis, setSelectedDiagnosis] = useState(null);

  const filteredDiagnosis = Object.keys(nursingDiagnosis).filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const closeModal = () => setSelectedDiagnosis(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50 relative">
      <IoChevronBackCircle
        onClick={() => navigator(-1)}
        className="absolute top-4 left-4 text-3xl text-blue-600 cursor-pointer hover:scale-105 transition-transform"
      />

      <h1 className="text-2xl font-bold mb-4">تشخیص پرستاری</h1>

      <input
        type="text"
        placeholder="جستجوی نام تشخیص..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
      />

      {searchTerm.trim() && (
        <div className="w-full max-w-md space-y-3">
          {filteredDiagnosis.length > 0 ? (
            filteredDiagnosis.map((name) => (
              <div
                key={name}
                className="p-3 border rounded-xl bg-white shadow-sm hover:bg-blue-50 cursor-pointer"
                onClick={() => setSelectedDiagnosis(name)}
              >
                {name}
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-sm mt-2">موردی یافت نشد</div>
          )}
        </div>
      )}

      {selectedDiagnosis && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg text-right relative">
            <button
              onClick={closeModal}
              className="absolute top-2 left-2 text-sm text-gray-500 bg-gray-200 rounded-full  hover:bg-gray-300"
            >
              <FiX size={20} />
            </button>
            <h2 className="text-lg font-bold mb-4">
              تشخیص‌های پرستاری "{selectedDiagnosis}"
            </h2>
            <ol className="list-decimal pr-5 space-y-2 text-sm text-blue-900">
              {nursingDiagnosis[selectedDiagnosis].map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
