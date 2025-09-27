import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFlask,
  FaClipboardList,
  FaSyringe,
  FaNotesMedical,
  FaHeart,
} from "react-icons/fa";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const navItems = [
    { to: "/lab", icon: <FaFlask size={24} />, label: "آزمایشات" },
    {
      to: "/nursingdiagnosis",
      icon: <FaClipboardList size={24} />,
      label: "تشخیص‌های پرستاری",
    },
    { to: "/drip", icon: <FaNotesMedical size={24} />, label: "محاسبه دریپ" },
    {
      to: "/dw-serum",
      icon: <FaSyringe size={24} />,
      label: "محاسبه سرم قندی",
    },
    { to: "/rhythm", icon: <FaHeart size={24} />, label: "نوار قلب" },
    {
      to: "/educationalNeeds",
     
      label: "نیاز های آموزشی بیماران",
    },
    {
      to: "/surgery",
      icon: <FaClipboardList size={24} />,
      label: " جراحی",
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-cyan-400 p-4 rounded-xl shadow-md mb-8">
        <h1 className="text-2xl font-extrabold text-white">
          راهنمای جامع پرستاری
        </h1>
        <button
          className="text-white text-xl border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-600 transition"
          onClick={handleLogout}
        >
          خروج
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex flex-col items-center justify-center border rounded-xl shadow-md p-6 bg-white hover:bg-blue-100 transition cursor-pointer text-center"
          >
            <div className="text-blue-500 mb-2">{item.icon}</div>
            <div className="font-bold text-[#366EBD]">{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
