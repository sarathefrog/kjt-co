import Link from 'next/link';
import Image from 'next/image';

export default function QualityService() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Top Section: Gradient, Heading, Keywords */}
      <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-100">
        {/* Left: Heading and Description */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl z-10">
          <span className="text-orange-500 font-bold text-sm mb-2">بازرسی و کنترل کیفیت</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">خدمات بازرسی و کنترل کیفیت</h1>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            خدمات بازرسی و کنترل کیفیت ما به شما کمک می‌کند تا از صحت و کیفیت پروژه‌ها و محصولات خود اطمینان حاصل کنید. تیم متخصص ما با استفاده از استانداردهای بین‌المللی و تجهیزات پیشرفته، تمامی مراحل بازرسی را با دقت و شفافیت انجام می‌دهد.
          </p>
          <Link href="/contact" className="bg-black text-white px-8 py-4 rounded-lg font-semibold shadow hover:bg-orange-500 transition-all duration-300 flex items-center gap-2">
            تماس بگیرید
            <span className="inline-block transform rotate-180">→</span>
          </Link>
        </div>
        {/* Right: Keywords Card */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <div className="bg-black rounded-2xl p-10 min-w-[340px] min-h-[220px] flex flex-col justify-between shadow-xl">
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg font-bold">
              <span className="text-orange-500">استاندارد</span>
              <span className="text-white">گزارش</span>
              <span className="text-orange-500">بازرسی</span>
              <span className="text-white">کنترل کیفیت</span>
              <span className="text-orange-500">تجهیزات</span>
              <span className="text-white">گواهینامه</span>
              <span className="text-orange-500">NDT</span>
              <span className="text-white">ISO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Card/Image + Text */}
      <section className="w-full py-20 bg-gray-50 flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 border-t border-gray-200">
        {/* Card/Image */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-xs">
            <Image src="/icons/Feather Icons/eye.svg" alt="بازرسی" width={80} height={80} className="mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">بازرسی تخصصی</h3>
            <p className="text-gray-600 text-center">بازرسی فنی، کنترل کیفیت جوش، تست‌های غیرمخرب (NDT) و ارائه گزارش‌های دقیق و مستند.</p>
          </div>
        </div>
        {/* Text */}
        <div className="flex-1 max-w-xl">
          <span className="text-orange-500 font-bold text-sm mb-2">خدمات ما</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">چرا بازرسی و کنترل کیفیت مهم است؟</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            بازرسی و کنترل کیفیت نقش کلیدی در تضمین ایمنی، دوام و عملکرد محصولات و پروژه‌ها دارد. ما با بهره‌گیری از دانش فنی و تجربه عملی، ریسک‌ها را کاهش داده و کیفیت نهایی را تضمین می‌کنیم.
          </p>
          <ul className="list-disc pr-6 text-gray-700 text-base space-y-2">
            <li>تضمین انطباق با استانداردهای ملی و بین‌المللی</li>
            <li>کاهش هزینه‌های ناشی از خطا و دوباره‌کاری</li>
            <li>افزایش اعتماد مشتریان و اعتبار برند</li>
            <li>ارائه گزارش‌های شفاف و مستند</li>
          </ul>
        </div>
      </section>
    </main>
  );
} 