import React from "react";
import { Link } from "react-router-dom";
import { FaTint, FaVial, FaArrowRight } from "react-icons/fa";

export default function LabPage() {
  const labItems = [
    { 
      to: "/blood-products", 
      icon: <FaTint size={28} />, 
      label: "فراورده‌های خونی",
      description: "اطلاعات کامل درباره فرآورده‌های خونی",
      color: "from-red-500 to-pink-600"
    },
    { 
      to: "/tests", 
      icon: <FaVial size={28} />, 
      label: "آزمایشات",
      description: "انواع آزمایشات و تفسیر نتایج",
      color: "from-purple-500 to-indigo-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaVial className="text-purple-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                بخش آزمایشات
              </h1>
              <p className="text-gray-600 mt-1">دسترسی به اطلاعات آزمایشگاهی و فرآورده‌های خونی</p>
            </div>
          </div>
        </div>

        {/* کارت‌های اصلی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {labItems.map((item, index) => (
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

       
       

        {/* دکمه بازگشت */}
        <div className="mt-8 text-center">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-medium"
          >
            بازگشت به صفحه اصلی
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}