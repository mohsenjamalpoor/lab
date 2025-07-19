import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [nationalCode, setNationalCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // اعتبارسنجی ساده کد ملی (10 رقم)
    const nationalCodeRegex = /^\d{10}$/;
    if (!nationalCodeRegex.test(nationalCode)) {
      setError("کد ملی باید 10 رقم باشد.");
      return;
    }

    // فرض می‌کنیم فقط یک کد ملی معتبر داریم (مثلاً برای تست)
    const validCodes = ["1212121212", "1111111111"];

    if (validCodes.includes(nationalCode)) {
   
      localStorage.setItem("loggedIn", "true");
      navigate("/home");
    } else {
      setError("کد ملی معتبر نیست.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">ورود با کد ملی</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nationalCode}
          onChange={(e) => setNationalCode(e.target.value)}
          placeholder="کد ملی"
          className="w-full border p-2 rounded mb-3"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
