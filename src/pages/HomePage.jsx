import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFlask, FaClipboardList, FaBars } from 'react-icons/fa';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-cyan-400 p-4 rounded-xl shadow-md mb-8">
        <h1 className="text-2xl font-extrabold text-white">راهنمای جامع پرستاری</h1>
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>

      
      {isOpen && (
        <div className="bg-white border rounded-lg shadow-md p-4 mb-5">
          <div className="mb-3 flex items-center">
            <FaFlask size={20} className="text-[#4A90E2] ml-2" />
            <Link className="text-[#366EBD] font-bold" to="/lab">
              آزمایشات
            </Link>
          </div>
          <div className="flex items-center">
            <FaClipboardList size={20} className="text-[#4A90E2] ml-2" />
            <Link className="text-[#366EBD] font-bold" to="/nursingdiagnosis">
              تشخیص های پرستاری
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
