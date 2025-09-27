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

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 relative">
      
      {/* دکمه بازگشت */}
      <IoChevronBackCircle
        onClick={() => navigator(-1)}
        className="absolute top-4 left-4 text-3xl text-green-600 cursor-pointer hover:scale-105 transition-transform hover:text-green-700 z-10"
      />

      {/* عنوان صفحه */}
      <div className="text-center mb-6 md:mb-8 mt-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">تشخیص‌های پرستاری</h1>
       
      </div>

      {/* جستجو */}
      <div className="w-full max-w-4xl mb-6 md:mb-8">
        <input
          type="text"
          placeholder="جستجوی تشخیص پرستاری (مثال: قلبی، تنفسی، دیابت)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-base"
        />
      </div>

      {/* لیست تشخیص‌ها */}
      <div className="w-full max-w-6xl">
        {(searchTerm.trim() ? filteredDiagnosis : Object.keys(nursingDiagnosis)).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {(searchTerm.trim() ? filteredDiagnosis : Object.keys(nursingDiagnosis)).map((name) => (
              <div
                key={name}
                className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:bg-green-50 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-green-200 h-full flex flex-col"
                onClick={() => setSelectedDiagnosis(name)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800 text-base md:text-lg leading-tight">
                    {name.replace(/_/g, " ")}
                  </h3>
                  <span className="text-xs md:text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full whitespace-nowrap">
                    {nursingDiagnosis[name].length} تشخیص
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-3 leading-relaxed">
                    {nursingDiagnosis[name][0]}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-green-600 text-xs md:text-sm font-medium">مشاهده جزئیات →</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">❌ موردی یافت نشد</div>
            <button 
              onClick={() => setSearchTerm("")}
              className="text-green-600 hover:text-green-800 font-medium"
            >
              پاک کردن جستجو و نمایش همه موارد
            </button>
          </div>
        )}
      </div>

      {/* مودال نمایش جزئیات */}
      {selectedDiagnosis && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* هدر مودال */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  تشخیص‌های پرستاری "{selectedDiagnosis.replace(/_/g, " ")}"
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  تعداد تشخیص‌ها: {nursingDiagnosis[selectedDiagnosis].length}
                </p>
              </div>
              <button
                onClick={() => setSelectedDiagnosis(null)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <FiX size={24} className="text-gray-600" />
              </button>
            </div>

            {/* لیست تشخیص‌ها */}
            <div className="overflow-y-auto flex-1 p-6">
              <div className="space-y-4">
                {nursingDiagnosis[selectedDiagnosis].map((desc, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-700 leading-7 text-base md:text-lg pb-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full text-sm min-w-[2rem] text-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="flex-1">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* فوتر مودال */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedDiagnosis(null)}
                  className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  بستن
                </button>
                <button 
                  onClick={() => window.print()}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  چاپ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* پیام وقتی جستجو نتیجه ندارد */}
      {searchTerm.trim() && filteredDiagnosis.length === 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-100 border border-orange-300 text-orange-800 px-4 py-3 rounded-lg shadow-lg">
          هیچ تشخیصی با عبارت "{searchTerm}" یافت نشد
        </div>
      )}
    </div>
  );
}