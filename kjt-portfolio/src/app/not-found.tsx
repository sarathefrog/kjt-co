import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">۴۰۴</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            صفحه مورد نظر یافت نشد
          </h2>
          <p className="text-secondary-600 mb-8 max-w-md mx-auto">
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              بازگشت به صفحه اصلی
            </Link>
            <a href="mailto:info@kjt.ir" className="btn-secondary">
              تماس با ما
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 