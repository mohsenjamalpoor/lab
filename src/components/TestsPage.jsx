import React, { useState } from "react";
import labTestsData from "../utils/labTestsData";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaSearch, FaVial } from "react-icons/fa";

export default function TestsPage() {
  const navigator = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTests = labTestsData.filter((test) =>
    test.testName.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-4xl mx-auto">
        
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaVial className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                جستجوی آزمایشات
              </h1>
              <p className="text-gray-600 mt-1">اطلاعات کامل آزمایشات و رنج نرمال</p>
            </div>
          </div>
        </div>

        {/* جستجو */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <FaSearch className="text-blue-500" />
              <label className="block text-gray-700 font-medium">
                جستجوی نام آزمایش
              </label>
            </div>
            <input
              type="text"
              placeholder="نام آزمایش را وارد کنید (مثال: CBC, BUN, Cr)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            />
          </div>
        </div>

        {/* نتایج */}
        {searchTerm.trim() !== "" && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                نتایج جستجو
              </h2>
              <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                {filteredTests.length} مورد یافت شد
              </span>
            </div>

            {filteredTests.length > 0 ? (
              <div className="grid gap-4">
                {filteredTests.map((test) => (
                  <div
                    key={test.testName}
                    className="p-4 border border-gray-200 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-200 hover:border-blue-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-blue-700">
                        {test.testName}
                      </h3>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {test.tubeType}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">نوع لوله:</span>
                        <span className="text-gray-800">{test.tubeType}</span>
                      </div>
                      
                      {test.normalRange && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-600">رنج نرمال:</span>
                          <span className="text-green-600 font-bold">{test.normalRange}</span>
                        </div>
                      )}
                    </div>

                    {test.description && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-700">{test.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-500 text-lg mb-2">❌ هیچ آزمایشی با این نام یافت نشد</div>
                <p className="text-gray-600 text-sm">
                  لطفاً از املای صحیح نام آزمایش اطمینان حاصل کنید
                </p>
              </div>
            )}
          </div>
        )}

        {/* دکمه بازگشت */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigator(-1)}
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            بازگشت
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}