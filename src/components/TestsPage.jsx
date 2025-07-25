import React, { useState } from "react";
import labTestsData from "../utils/labTestsData";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function TestsPage() {
  const navigator = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTests = labTestsData.filter((test) =>
    test.testName.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50 relative">
     
      <IoChevronBackCircle onClick={() => navigator(-1)}
        className="absolute top-4 left-4 text-3xl text-blue-600 cursor-pointer hover:scale-105 transition-transform"
      />

      <h1 className="text-2xl font-bold mb-4">جستجوی آزمایش</h1>

      <input
        type="text"
        placeholder="نام آزمایش را وارد کنید..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
      />

      {searchTerm.trim() !== "" && (
        <div className="w-full max-w-md space-y-4">
          {filteredTests.length > 0 ? (
            filteredTests.map((test) => (
              <div
                key={test.testName}
                className="p-4 bg-white rounded-lg shadow-md border"
              >
                <h2 className="text-lg font-semibold text-blue-600">
                  {test.testName}
                </h2>
                <p>
                  <strong>نوع لوله:</strong> {test.tubeType}
                </p>
                {test.normalRange && (
                  <p>
                    <strong>رنج طبیعی:</strong> {test.normalRange}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">هیچ آزمایشی با این نام یافت نشد.</p>
          )}
        </div>
      )}
    </div>
  );
}
