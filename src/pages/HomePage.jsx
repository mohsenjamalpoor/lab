import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFlask,
  FaClipboardList,
  FaSyringe,
  FaNotesMedical,
  FaHeart,
  FaBookMedical,
  FaBaby,
  FaPills,
  FaLungs,
  FaUserMd
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
    { 
      to: "/lab", 
      icon: <FaFlask size={28} />, 
      label: "آزمایشات",
      description: "دسترسی به اطلاعات آزمایشگاهی",
      color: "from-purple-500 to-indigo-600"
    },
    {
      to: "/nursingdiagnosis",
      icon: <FaClipboardList size={28} />,
      label: "تشخیص‌های پرستاری",
      description: "لیست کامل تشخیص‌های پرستاری",
      color: "from-green-500 to-emerald-600"
    },
    { 
      to: "/drip", 
      icon: <FaNotesMedical size={28} />, 
      label: "محاسبه دریپ",
      description: "محاسبه سرعت انفوزیون داروها",
      color: "from-pink-500 to-rose-600"
    },
    {
      to: "/dw-serum",
      icon: <FaSyringe size={28} />,
      label: "محاسبه سرم قندی",
      description: "تبدیل غلظت سرم‌های قندی",
      color: "from-blue-500 to-cyan-600"
    },
    { 
      to: "/rhythm", 
      icon: <FaHeart size={28} />, 
      label: "نوار قلب",
      description: "آموزش تفسیر نوار قلب",
      color: "from-red-500 to-pink-600"
    },
    {
      to: "/educationalNeeds",
      icon: <FaBookMedical size={28} />, 
      label: "نیازهای آموزشی بیماران",
      description: "آموزش به والدین و بیماران",
      color: "from-orange-500 to-amber-600"
    },
    {
      to: "/surgery",
      icon: <FaUserMd size={28} />,
      label: "جراحی",
      description: "مراقبت‌های پس از جراحی",
      color: "from-teal-500 to-green-600"
    },
   
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-6xl mx-auto">
        
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaUserMd className="text-blue-600" size={32} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  راهنمای جامع پرستاری
                </h1>
                <p className="text-gray-600 mt-1">ابزارهای کاربردی برای پرستاران و مراقبین سلامت</p>
              </div>
            </div>
            <button
              className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              onClick={handleLogout}
            >
              خروج
            </button>
          </div>
        </div>

        {/* کارت‌های اصلی */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block group"
            >
              <div className={`bg-gradient-to-r ${item.color} text-white rounded-xl shadow-lg p-6 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl h-full`}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h2 className="text-lg font-bold mb-2">{item.label}</h2>
                  <p className="text-white text-opacity-90 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}