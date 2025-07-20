import React, { useState } from "react";
import { bloodProducts } from "../utils/bloodProducts";


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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        فرآورده‌های خونی
      </h2>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="جستجو بر اساس نام..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400"
        />

        <select
          value={injectionFilter}
          onChange={(e) => setInjectionFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm"
        >
          <option value="همه">همه سرعت‌های تزریق</option>
          <option value="آهسته">آهسته</option>
          <option value="متوسط">متوسط</option>
          <option value="سریع">سریع</option>
        </select>

        <select
          value={complicationFilter}
          onChange={(e) => setComplicationFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm"
        >
          <option value="همه">همه عوارض</option>
          <option value="تب">تب</option>
          <option value="حساسیت">حساسیت</option>
          <option value="لخته">لخته</option>
          <option value="آلودگی">آلودگی</option>
        </select>
      </div>

     
      <div className="grid gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 border border-purple-200"
            >
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                {product.name}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li><strong>نوع درخواست:</strong> {product.requestType}</li>
                <li><strong>نحوه تزریق:</strong> {product.injectionMethod}</li>
                <li><strong>مدت زمان تزریق:</strong> {product.duration}</li>
                <li><strong>عارضه احتمالی:</strong> {product.complications}</li>
                <li><strong>درمان عارضه:</strong> {product.complicationTreatment}</li>
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">موردی یافت نشد.</p>
        )}
      </div>
    </div>
  );
}
