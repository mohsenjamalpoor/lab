import React from "react";
import { Link } from "react-router-dom";
import { FaTint, FaVial } from "react-icons/fa"; // آیکون‌ها برای خون و آزمایش

export default function LabPage() {
  const labItems = [
    { to: "/blood-products", icon: <FaTint size={24} />, label: "فراورده‌های خونی" },
    { to: "/tests", icon: <FaVial size={24} />, label: "آزمایشات" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* هدر */}
      <div className="flex justify-between items-center bg-gradient-to-r from-purple-600 to-pink-400 p-4 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-extrabold text-white">بخش آزمایشات</h2>
        <Link
          to="/home"
          className="text-white text-xl border border-white px-3 py-1 rounded hover:bg-white hover:text-purple-600 transition"
        >
          بازگشت
        </Link>
      </div>

      {/* دکمه‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {labItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex flex-col items-center justify-center border rounded-xl shadow-md p-6 bg-white hover:bg-purple-100 transition cursor-pointer text-center"
          >
            <div className="text-purple-500 mb-2">{item.icon}</div>
            <div className="font-bold text-[#6B46C1]">{item.label}</div>
          </Link>
        ))}
      </div>
    
    </div>
  );
}
