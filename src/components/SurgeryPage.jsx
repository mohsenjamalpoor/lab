import React from "react";
import { Link } from "react-router-dom";

export default function SurgeryPage() {
  const items = [
    { label: "انواع درن ها" , to: "/surgery/drains" },
    { label: "مراقبت بعد از جراحی", to: "/surgery/post-op-care" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
     
      <div className="flex justify-between items-center bg-gradient-to-r from-sky-400 to-blue-300 p-4 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-white">بخش جراحی</h2>
        <Link
          to="/home"
          className="text-white text-xl border border-white px-3 py-1 rounded hover:bg-white hover:text-sky-500 transition"
        >
          بازگشت
        </Link>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="border rounded-xl shadow-md p-6 bg-white hover:bg-sky-100 text-center font-semibold text-sky-600 transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
