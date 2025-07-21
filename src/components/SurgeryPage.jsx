import React from "react";
import { Link } from "react-router-dom";

export default function SurgeryPage() {
  const items = [
    { label: "انواع درن", to: "/surgery/drains" },
    { label: "مراقبت بعد از جراحی", to: "/surgery/post-op-care" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
        بخش جراحی
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="border rounded-xl shadow-md p-6 bg-white hover:bg-blue-100 text-center font-semibold text-[#366EBD] transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
