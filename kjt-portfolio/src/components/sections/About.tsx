'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import type { AboutSection } from '@/types';

interface AboutProps {
  section?: AboutSection;
}

const stats = [
  {
    value: '+۱۲۰۰',
    label: 'پروژه های انجام شده',
    icon: (
      <svg className="w-7 h-7 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    ),
  },
  {
    value: '۲',
    label: 'تعداد سایت های تولیدی',
    icon: (
      <svg className="w-7 h-7 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6H4v12h16V6zm-2 10H6V8h12v8z"/></svg>
    ),
  },
  {
    value: '+۲۷',
    label: 'سال های فعالیت',
    icon: (
      <svg className="w-7 h-7 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M9 21h6v-1H9v1zm8-2V7c0-1.1-.9-2-2-2h-1V4c0-1.1-.9-2-2-2s-2 .9-2 2v1H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c.1 0 2-.9 2-2zm-6-15c.55 0 1 .45 1 1v1h-2V4c0-.55.45-1 1-1zm5 17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v12z"/></svg>
    ),
  },
  {
    value: '۲',
    label: 'شرکت ها',
    icon: (
      <svg className="w-7 h-7 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    ),
  },
  {
    value: '+۱,۵M',
    label: 'تعداد محصول های تولید شده',
    icon: (
      <svg className="w-7 h-7 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6H4v12h16V6zm-2 10H6V8h12v8z"/></svg>
    ),
  },
];

const licenseImages = [
  "97-06-24-گواهینامه-گلسرخی0001-1.jpg",
  "9001-2025-scaled.jpeg",
  "گواهینامه-سه-ساله-ایرانیان-scaled.jpeg",
  "گواهینامه-آسیا-تمدید-1-ساله-scaled.jpeg",
  "کارشناسی-ارشد-scaled.jpg",
  "رده-بندی-ایرانیان.jpg",
  "رده-بندی-آسیا.jpg",
  "پروانه-کارشناس-استاندارد.png",
  "پروانه-تأسیس-آموزشگاه-فنی-و-حرفه-ای-2-scaled.jpeg",
  "پروانه-تأسیس-آموزشگاه-فنی-و-حرفه-ای-1-scaled.jpeg",
  "انجمن-مشاوران-مدیریت.jpg",
  "انجمن-مشاوران-مدیریت-1402-scaled.jpeg",
  "استاندارد-scaled.jpeg",
  "ISO-IEC-17020-scaled.jpeg",
  "ISO-45001.jpg",
  "ISO-14001.jpg",
  "ISO-9001.jpg",
  "IRSNT.jpg",
  "ASNT.jpg",
  "97-06-24-گواهینامه-گلسرخی0001-2.jpg",
  "9001-2025-1-scaled.jpeg",
  "45001-2025-scaled.jpeg",
  "14001-2025-scaled.jpeg",
];

// Counter animation hook
function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let raf: number;
    function animate(ts: number) {
      if (!start.current) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(target);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return count;
}

// Helper to extract number from Persian/Arabic numerals
function parsePersianNumber(str: string) {
  // Remove non-digit chars, convert Persian/Arabic to English
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  let num = '';
  for (const ch of str) {
    if (persianDigits.includes(ch)) num += persianDigits.indexOf(ch);
    else if (!isNaN(Number(ch))) num += ch;
  }
  return Number(num);
}

export default function About({ section }: AboutProps) {
  // Use section?.title, section?.content, section?.image if provided, otherwise fallback to defaults
  const title = section?.title || "شرکت کاوش جوش تهران";
  const content = section?.content || "شرکت کاوش جوش تهران بالغ بر 30 سال در اجرای پروژه‌های گوناگون فلزی اعم از ساخت و نصب در زمینه‌های مختلف: نیروگاهی، نفت و گاز، کارخانجات سیمان، تاسیسات گازرسانی، ساخت کانتینر‌های اختصاصی، مخازن ذخیره و تحت فشار، سازه‌های ساختمانی تاسیسات و شناور‌های دریایی و … فعالیت داشته است.";
  const imageSrc = section?.image || "/team.jpg";
  const imageAlt = "تیم کاوش جوش تهران";
  const imageWidth = 360;
  const imageHeight = 360;
  const imageClassName = "rounded-3xl object-cover border-2 border-orange-400 shadow-md";
  const imagePriority = false;

  // Precompute numbers for stats
  const numbers = stats.slice(0, 4).map((stat) => parsePersianNumber(stat.value));
  // Use one useCountUp per stat (explicitly, not in a loop)
  const count0 = useCountUp(numbers[0], 1200);
  const count1 = useCountUp(numbers[1], 1400);
  const count2 = useCountUp(numbers[2], 1600);
  const count3 = useCountUp(numbers[3], 1800);
  const counts = [count0, count1, count2, count3];
  // Build animatedCounts array
  const animatedCounts = stats.slice(0, 4).map((stat, i) => {
    const animatedValue = stat.value.replace(/([۰-۹]+)/g, () => counts[i].toLocaleString('fa-IR'));
    return { ...stat, animatedValue };
  });
  return (
    <section className="py-24 px-4 md:px-0 bg-white relative" style={{ paddingTop: '15rem' }}>
      {/* Large vertical KJT background text */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none">
        <span className="text-[10rem] lg:text-[16rem] font-extrabold text-gray-200 opacity-60 tracking-tight leading-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '-0.05em' }}>
          KJT
        </span>
      </div>
      <div className="container-rtl max-w-6xl mx-auto flex flex-col gap-16 relative z-10">
        {/* First Row: Team + Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-16"
        >
          {/* Left: Team Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className={imageClassName}
              priority={imagePriority}
            />
          </motion.div>
          {/* Right: Title + Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-center items-start gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
             {title}
          </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-right">
               {content}
          </p>
          </motion.div>
        </motion.div>
        {/* Second Row: Carousel + Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          {/* License Carousel */}
          <LicenseSlider />
          {/* Achievements */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-4">
            {animatedCounts.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 min-w-[120px]"
              >
                <div className="bg-orange-50 rounded-full p-4 mb-2 shadow-sm">
                  {stat.icon}
                </div>
                <span className="text-xl font-bold text-gray-900">{stat.animatedValue}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </motion.div>
            ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
}

function LicenseSlider() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);
  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 : 4);
  const total = licenseImages.length;

  const getIndexes = () => {
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push((current + i) % total);
    }
    return arr;
  };

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Modal navigation
  const openModal = (idx: number) => {
    setModalIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const modalNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setModalIdx((prev) => (prev + 1) % total);
  };
  const modalPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setModalIdx((prev) => (prev - 1 + total) % total);
  };
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') modalNext();
      if (e.key === 'ArrowLeft') modalPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-center gap-2">
        {/* Arrow Left (prev) - swapped */}
        <button onClick={prev} className="z-10 p-2 rounded-full bg-white border border-orange-200 text-orange-400 hover:bg-orange-100 hover:text-orange-500 shadow transition-all duration-200">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
        {/* Images */}
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-row-reverse gap-6 items-center justify-center">
            {getIndexes().map((idx) => (
              <motion.div
                key={licenseImages[idx]}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-xl overflow-hidden border border-orange-100 bg-white flex flex-col items-center shadow-sm cursor-pointer"
                style={{ width: visibleCount === 1 ? 320 : 200, height: 180 }}
                onClick={() => openModal(idx)}
              >
                <Image
                  src={`/licen/${licenseImages[idx]}`}
                  alt={`license-${idx}`}
                  fill
                  className="object-contain object-center rounded-xl"
                  sizes="(max-width: 640px) 320px, 200px"
                />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Arrow Right (next) - swapped */}
        <button onClick={next} className="z-10 p-2 rounded-full bg-white border border-orange-200 text-orange-400 hover:bg-orange-100 hover:text-orange-500 shadow transition-all duration-200">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      </div>
      {/* Modal Gallery */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-2 left-2 text-white bg-black/40 rounded-full p-2 hover:bg-black/70 z-10">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button onClick={modalNext} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-100 text-orange-500 rounded-full p-2 z-10">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={modalPrev} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-100 text-orange-500 rounded-full p-2 z-10">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <div className="w-full flex justify-center items-center">
              <img
                src={`/licen/${licenseImages[modalIdx]}`}
                alt={`license-large-${modalIdx}`}
                className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl border border-orange-200 bg-white"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 