import React from "react";
import { drains } from "../utils/drains";
import { Link } from "react-router-dom";

export default function DrainsPage() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">انواع درن</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {drains.map((drain) => (
          <Link to={`/surgery/drains/${drain.id}`} key={drain.id}>

            <div className="bg-white shadow-md rounded-xl p-4 hover:bg-blue-50 transition cursor-pointer">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{drain.name}</h3>
              {drain.image && (
                <img
                  src={drain.image}
                  alt={drain.name}
                  className="w-full h-52 object-contain mb-3 rounded-md border"
                />
              )}
              <div className="text-gray-600 text-sm">مشاهده جزئیات</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
