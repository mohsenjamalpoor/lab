import React from "react";
import { useParams, Link } from "react-router-dom";
import { drains } from "../utils/drains";
import { FaArrowRight, FaBandAid, FaExclamationTriangle, FaHandHoldingHeart } from "react-icons/fa";

export default function DrainDetailPage() {
  const { id } = useParams();
  const drain = drains.find((item) => item.id === id);

  if (!drain) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
          <div className="text-red-500 text-4xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">درن مورد نظر یافت نشد</h2>
          <p className="text-gray-600 mb-6">لطفاً از صحت آدرس اطمینان حاصل کنید</p>
          <Link
            to="/surgery/drains"
            className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            بازگشت به لیست درن‌ها
            <FaArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-4xl mx-auto">
        
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaBandAid className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {drain.name}
              </h1>
              <p className="text-gray-600 mt-1">اطلاعات کامل درن جراحی</p>
            </div>
          </div>
        </div>

        {/* تصویر درن */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-center mb-4">
            <img
              src={drain.image}
              alt={drain.name}
              className="w-full max-w-md h-80 object-contain rounded-lg border border-gray-200"
            />
          </div>
        </div>

        {/* اطلاعات درن */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* کاربرد */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-full">
                <FaHandHoldingHeart className="text-green-600" size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">کاربرد</h3>
            </div>
            <p className="text-gray-700 leading-7">{drain.usage}</p>
          </div>

          {/* عوارض */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-full">
                <FaExclamationTriangle className="text-red-600" size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">عوارض</h3>
            </div>
            <p className="text-gray-700 leading-7">{drain.complications}</p>
          </div>

        </div>

        {/* مراقبت‌ها */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <FaBandAid className="text-blue-600" size={20} />
            </div>
            مراقبت‌های ضروری
          </h3>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-gray-700 leading-7">{drain.care}</p>
          </div>
        </div>

        {/* نکات مهم */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
            <FaExclamationTriangle />
            نکات حیاتی:
          </h3>
          <div className="space-y-2 text-yellow-700">
            <p>• پایش روزانه محل درن از نظر علائم عفونت</p>
            <p>• ثبت دقیق حجم و مشخصات ترشحات</p>
            <p>• آموزش کامل به بیمار و همراهان</p>
            <p>• گزارش فوری هرگونه تغییر غیرعادی</p>
          </div>
        </div>

        {/* دکمه‌های ناوبری */}
        <div className="flex gap-3">
          <Link
            to="/surgery/drains"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-center"
          >
            بازگشت به لیست درن‌ها
            <FaArrowRight />
          </Link>
          <Link
            to="/surgery"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium text-center"
          >
            بازگشت به بخش جراحی
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}