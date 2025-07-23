import React from "react";
import { useParams, Link } from "react-router-dom";
import { drains } from "../utils/drains";

export default function DrainDetailPage() {
  const { id } = useParams();
  const drain = drains.find((item) => item.id === id);

  if (!drain) {
    return <div className="p-4 text-red-600">درن مورد نظر یافت نشد.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-xl mt-6">
      <Link to="/" className="text-blue-600 hover:underline block mb-4">← بازگشت</Link>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{drain.name}</h2>
      <img
        src={drain.image}
        alt={drain.name}
        className="w-full h-64 object-contain mb-4 rounded-md border"
      />
      <div className="mb-3">
        <strong className="text-gray-700">کاربرد:</strong> {drain.usage}
      </div>
      <div className="mb-3">
        <strong className="text-gray-700">عوارض:</strong> {drain.complications}
      </div>
      <div>
        <strong className="text-gray-700">مراقبت‌ها:</strong> {drain.care}
      </div>
    </div>
  );
}
