import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUserMd, FaBandAid, FaStethoscope } from "react-icons/fa";

export default function SurgeryPage() {
  const items = [
    { 
      label: "انواع درن ها", 
      to: "/surgery/drains",
      description: "آشنایی با انواع درن‌های جراحی و کاربرد آنها",
      icon: <FaBandAid size={28} />,
      color: "from-blue-500 to-cyan-600"
    },
    { 
      label: "مراقبت بعد از جراحی", 
      to: "/surgery/post-op-care",
      description: "راهنمای کامل مراقبت‌های پس از عمل",
      icon: <FaStethoscope size={28} />,
      color: "from-green-500 to-emerald-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-4xl mx-auto">
        
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaUserMd className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                بخش جراحی
              </h1>
              <p className="text-gray-600 mt-1">راهنمای کامل مراقبت‌های جراحی و پس از عمل</p>
            </div>
          </div>
        </div>

        {/* کارت‌های اصلی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block group"
            >
              <div className={`bg-gradient-to-r ${item.color} text-white rounded-xl shadow-lg p-6 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl h-full`}>
                <div className="flex items-center gap-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <h2 className="text-xl font-bold mb-1">{item.label}</h2>
                    <p className="text-white text-opacity-90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* اطلاعات تکمیلی */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">نکات مهم جراحی</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-bold text-yellow-800 mb-2">پیش از عمل</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• بررسی وضعیت کلی بیمار</li>
                <li>• آماده‌سازی تجهیزات مورد نیاز</li>
                <li>• آموزش بیمار و همراهان</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">پس از عمل</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• پایش علائم حیاتی</li>
                <li>• کنترل درد و ناراحتی</li>
                <li>• پیشگیری از عفونت</li>
              </ul>
            </div>
          </div>
        </div>

        {/* دکمه بازگشت */}
        <div className="mt-8 text-center">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            بازگشت به صفحه اصلی
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}