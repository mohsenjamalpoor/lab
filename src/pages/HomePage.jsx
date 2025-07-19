import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFlask,
  FaClipboardList,
  FaBars,
  FaSyringe,
  FaNotesMedical,
  FaHeart, // آیکون جدید نوار قلب
} from "react-icons/fa";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-cyan-400 p-4 rounded-xl shadow-md mb-8">
      
  <h1 className="text-2xl font-extrabold text-white">راهنمای جامع پرستاری</h1>
  <div className="flex gap-4 items-center">
    <button
      className="text-white  text-xl border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-600 transition"
      onClick={handleLogout}
    >
      خروج
    </button>
    <button
      className="text-white text-2xl focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <FaBars />
    </button>
    
  </div>
</div>


      {isOpen && (
        <div className="bg-white border rounded-lg shadow-md p-4 mb-5">
          <div className="mb-3 flex items-center">
            <FaFlask size={20} className="text-[#4A90E2] ml-2" />
            <Link className="text-[#366EBD] font-bold" to="/lab">
              آزمایشات
            </Link>
          </div>
          <div className="flex items-center mb-2">
            <FaClipboardList size={20} className="text-[#4A90E2] ml-2" />
            <Link className="text-[#366EBD] font-bold" to="/nursingdiagnosis">
              تشخیص های پرستاری
            </Link>
          </div>
          <div className="flex items-center mb-2">
            <FaNotesMedical size={20} className="text-[#4A90E2] ml-2" />
            <Link className="text-[#366EBD] font-bold" to="/drip">
              محاسبه دریپ
            </Link>
          </div>
          <div className="flex items-center mb-2">
            <FaSyringe size={20} className="text-[#4A90E2] ml-2" />
            <Link className="text-[#366EBD] font-bold" to="/dw-serum">
              محاسبه سرم قندی
            </Link>
          </div>
         
          <div className="flex items-center">
            <FaHeart size={20} className="text-[#4A90E2] ml-2" />
            <Link className="text-[#366EBD] font-bold" to="/rhythm">
              نوار قلب
            </Link>
          </div>
           <div className="flex items-center">
            <FaHeart size={20} className="text-[#4A90E2] ml-2" />
            <Link className="text-[#366EBD] font-bold" to="/ecg-calculator">
               محاسبه ضربان قلب
            </Link>
          </div>
        </div>
        
      )}
    </>
  );
}
