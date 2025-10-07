import React, { useState } from "react";
import { bloodProducts } from "../utils/bloodProducts";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTint, FaSearch, FaFilter, FaExclamationTriangle } from "react-icons/fa";

export default function BloodProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [injectionFilter, setInjectionFilter] = useState("همه");
  const [complicationFilter, setComplicationFilter] = useState("همه");

  const filteredProducts = bloodProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
    const matchesInjection =
      injectionFilter === "همه" || product.injectionMethod === injectionFilter;
    const matchesComplication =
      complicationFilter === "همه" || product.complications.includes(complicationFilter);
    return matchesSearch && matchesInjection && matchesComplication;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setInjectionFilter("همه");
    setComplicationFilter("همه");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-red-100 p-3 rounded-full">
              <FaTint className="text-red-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                فرآورده‌های خونی
              </h1>
              <p className="text-gray-600 mt-1">اطلاعات کامل انواع فرآورده‌های خونی و روش‌های تزریق</p>
            </div>
          </div>
        </div>

        {/* فیلترها */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FaFilter className="text-red-500" />
            <h2 className="text-xl font-bold text-gray-800">فیلترهای جستجو</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">جستجوی نام</label>
              <div className="relative">
                <FaSearch className="absolute right-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="نام فرآورده..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">سرعت تزریق</label>
              <select
                value={injectionFilter}
                onChange={(e) => setInjectionFilter(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="همه">همه سرعت‌ها</option>
                <option value="آهسته">آهسته</option>
                <option value="متوسط">متوسط</option>
                <option value="سریع">سریع</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">نوع عارضه</label>
              <select
                value={complicationFilter}
                onChange={(e) => setComplicationFilter(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="همه">همه عوارض</option>
                <option value="تب">تب</option>
                <option value="حساسیت">حساسیت</option>
                <option value="لخته">لخته</option>
                <option value="آلودگی">آلودگی</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                پاک کردن فیلترها
              </button>
            </div>
          </div>
        </div>

        {/* نتایج */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">نتایج جستجو</h2>
            <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-full">
              {filteredProducts.length} مورد یافت شد
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-5 bg-gray-50 hover:bg-red-50 transition-all duration-200 hover:border-red-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-red-700">
                      {product.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      product.injectionMethod === "سریع" ? "bg-green-100 text-green-800" :
                      product.injectionMethod === "متوسط" ? "bg-yellow-100 text-yellow-800" :
                      "bg-blue-100 text-blue-800"
                    }`}>
                      {product.injectionMethod}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600">نوع درخواست:</span>
                      <span className="text-gray-800">{product.requestType}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600">مدت زمان تزریق:</span>
                      <span className="text-blue-600 font-medium">{product.duration}</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-medium text-gray-600">عارضه احتمالی:</span>
                      <span className="text-red-600 font-medium">{product.complications}</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-medium text-gray-600">درمان عارضه:</span>
                      <span className="text-green-600 text-sm">{product.complicationTreatment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-4xl mb-4">🔍</div>
              <div className="text-gray-500 text-lg mb-2">هیچ فرآورده‌ای با این فیلترها یافت نشد</div>
              <p className="text-gray-600 text-sm">
                لطفاً فیلترهای جستجو را تغییر دهید یا از دکمه "پاک کردن فیلترها" استفاده کنید
              </p>
            </div>
          )}
        </div>

        {/* هشدارهای مهم */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-yellow-800 mb-4 flex items-center gap-2 text-xl">
            <FaExclamationTriangle />
            نکات حیاتی تزریق فرآورده‌های خونی
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-700">
            <div>
              <p>• بررسی هویت بیمار و برچسب فرآورده</p>
              <p>• پایش علائم حیاتی قبل، حین و پس از تزریق</p>
              <p>• آماده‌سازی تجهیزات اورژانسی</p>
            </div>
            <div>
              <p>• ثبت دقیق اطلاعات در پرونده</p>
              <p>• آموزش بیمار و همراهان</p>
              <p>• گزارش فوری عوارض غیرعادی</p>
            </div>
          </div>
        </div>

        {/* دکمه بازگشت */}
        <div className="text-center">
          <Link
            to="/lab"
            className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            بازگشت به بخش آزمایشات
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}