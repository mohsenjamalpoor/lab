import React from "react";

const drains = [
  {
    name: "درن پترز (Penrose)",
    image: "/images/penrose.jpg", 
    usage: "تخلیه ترشحات سطحی زخم و جلوگیری از تجمع ترشحات در ناحیه جراحی.",
    complications: "عفونت، خارج شدن ناخواسته، تحریک پوست.",
    care: "ضدعفونی مرتب محل خروج، بررسی میزان ترشح، فیکس‌کردن برای جلوگیری از خروج.",
  },
  {
    name: "درن کاروگیت (Corrugated)",
    image: "/images/corrugated.jpg",
    usage: "تخلیه ترشحات از زخم‌های عمیق‌تر یا نواحی جراحی بزرگ.",
    complications: "عفونت، تحریک پوست، درد در محل.",
    care: "بررسی روزانه میزان ترشح، جلوگیری از بسته شدن مسیر خروجی.",
  },
  {
    name: "درن هموواگ (Hemovac)",
    image: "/images/hemovac.jpg",
    usage: "برای جراحی‌های ارتوپدی و شکمی جهت تخلیه خون یا سرم.",
    complications: "انسداد، عفونت، کاهش فشار منفی.",
    care: "اطمینان از فشار منفی کافی، تخلیه منظم، بررسی محل درن.",
  },
  {
    name: "درن جکسون-پرات (Jackson-Pratt)",
    image: "/images/jackson-pratt.jpg",
    usage: "در جراحی‌های شکمی، پستان، تیروئید برای تخلیه مایعات.",
    complications: "لخته شدن، عفونت، کشیده شدن ناگهانی.",
    care: "تخلیه روزانه، ثبت حجم و رنگ ترشح، شستشو در صورت نیاز.",
  },
  {
    name: "درن EVD (External Ventricular Drain)",
    image: "/images/evd.jpg",
    usage: "تخلیه مایع مغزی-نخاعی در بیماران با فشار داخل جمجمه بالا.",
    complications: "عفونت مغزی، خونریزی، انسداد مسیر درن.",
    care: "استریل کامل، بررسی فشار و سطح چشمی، ثبت دقیق حجم خروجی.",
  },
  {
    name: "چست تیوب (Chest Tube)",
    image: "/images/chest-tube.jpg",
    usage: "تخلیه هوا، خون یا مایع از فضای پلور.",
    complications: "پنوموتوراکس مجدد، درد، عفونت، جابجایی لوله.",
    care: "بررسی حرکت آب در چمبر، بررسی محل، گزارش نشت هوا.",
  },
  {
    name: "درن پیگ‌تیل (Pigtail)",
    image: "/images/pigtail.jpg",
    usage: "تخلیه آبسه، پلورال افیوژن، کیست‌ها با کمترین تهاجم.",
    complications: "بسته شدن مسیر، درد، عفونت.",
    care: "بررسی روزانه حجم و وضعیت ترشح، فیکس کردن لوله.",
  },
];

export default function DrainsPage() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">انواع درن</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {drains.map((drain, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{drain.name}</h3>
            {drain.image && (
              <img
                src={drain.image}
                alt={drain.name}
                className="w-full h-52 object-contain mb-3 rounded-md border"
              />
            )}
            <div className="mb-2">
              <strong className="text-gray-700">کاربرد:</strong>{" "}
              <span className="text-gray-800">{drain.usage}</span>
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">عوارض:</strong>{" "}
              <span className="text-gray-800">{drain.complications}</span>
            </div>
            <div>
              <strong className="text-gray-700">مراقبت‌ها:</strong>{" "}
              <span className="text-gray-800">{drain.care}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
