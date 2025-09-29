import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUserMd, FaHeartbeat, FaBandAid, FaExclamationTriangle, FaClock } from "react-icons/fa";

export default function PostOpCarePage() {
  const careSections = [
    {
      icon: <FaHeartbeat className="text-red-500" size={24} />,
      title: "پایش علائم حیاتی",
      items: [
        "کنترل منظم فشار خون، نبض و دمای بدن",
        "پایش سطح هوشیاری هر 2 ساعت در 8 ساعت اول",
        "بررسی رنگ پوست و مخاطات",
        "ثبت دقیق ورودی و خروجی مایعات"
      ]
    },
    {
      icon: <FaBandAid className="text-blue-500" size={24} />,
      title: "مراقبت از زخم",
      items: [
        "تعویض پانسمان طبق دستور پزشک",
        "بررسی روزانه زخم از نظر علائم عفونت",
        "نگهداری زخم تمیز و خشک",
        "گزارش فوری هرگونه ترشح غیرعادی"
      ]
    },
    {
      icon: <FaClock className="text-green-500" size={24} />,
      title: "مدیریت درد",
      items: [
        "تجویز مسکن طبق برنامه منظم",
        "ارزیابی سطح درد با مقیاس استاندارد",
        "استفاده از روش‌های غیردارویی مانند تغییر وضعیت",
        "پایش عوارض جانبی داروهای مسکن"
      ]
    },
    {
      icon: <FaExclamationTriangle className="text-yellow-500" size={24} />,
      title: "پیشگیری از عوارض",
      items: [
        "تحرک زودهنگام و تمرینات تنفسی",
        "پیشگیری از ترومبوز وریدی عمقی (DVT)",
        "مراقبت‌های پوستی و پیشگیری از زخم بستر",
        "تشخیص به موقع علائم عوارض ریوی"
      ]
    }
  ];

  const emergencySigns = [
    "تب بالای 38 درجه سانتیگراد",
    "خونریزی یا ترشح زیاد از زخم",
    "درد شدید و غیرقابل کنترل",
    "تورم، قرمزی یا گرمی در محل جراحی",
    "تنفس دشوار یا درد قفسه سینه",
    "تهوع و استفراغ مداوم"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4">
      <div className="max-w-6xl mx-auto">
        
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FaUserMd className="text-green-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                مراقبت بعد از جراحی
              </h1>
              <p className="text-gray-600 mt-1">راهنمای جامع مراقبت‌های پس از عمل برای بیماران</p>
            </div>
          </div>
        </div>

        {/* بخش‌های مراقبتی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {careSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-1">
                      {itemIndex + 1}
                    </span>
                    <span className="text-gray-700 leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* علائم هشدار اورژانسی */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-xl">
            <FaExclamationTriangle />
            علائم هشدار دهنده (اورژانسی)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {emergencySigns.map((sign, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-200">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                  ⚠️
                </span>
                <span className="text-red-700 font-medium">{sign}</span>
              </div>
            ))}
          </div>
          <p className="text-red-600 font-bold mt-4 text-center">
            در صورت مشاهده هر یک از این علائم، فوراً با پزشک تماس بگیرید!
          </p>
        </div>

        {/* نکات تغذیه‌ای */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">تغذیه پس از جراحی</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🥣</div>
              <h4 className="font-bold text-blue-800 mb-2">فاز اول</h4>
              <p className="text-blue-700 text-sm">مایعات شفاف و سوپ رقیق</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🍲</div>
              <h4 className="font-bold text-green-800 mb-2">فاز دوم</h4>
              <p className="text-green-700 text-sm">غذاهای نرم و پوره‌ای</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🍚</div>
              <h4 className="font-bold text-yellow-800 mb-2">فاز سوم</h4>
              <p className="text-yellow-700 text-sm">رژیم عادی با فیبر کافی</p>
            </div>
          </div>
        </div>

        {/* دکمه بازگشت */}
        <div className="text-center">
          <Link
            to="/surgery"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            بازگشت به بخش جراحی
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}