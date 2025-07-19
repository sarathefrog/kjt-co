'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

const projects = [
  {
    image: '/projects/project1.webp',
    title: 'برج های تعاونی مسکن صنایع نفت',
    tags: ['نفت و گاز', 'سازه فلزی'],
  },
  {
    image: '/projects/project 2.webp',
    title: 'برج های الماس تهران ',
    tags: ['نیروگاهی', 'مخازن'],
  },
  {
    image: '/projects/project 3.jpg',
    title: 'برج 42 طبقه ارگ',
    tags: ['گازرسانی', 'کانتینر'],
  },
 
];

export default function ProjectsSlider() {
  return (
    <section
      className="w-full py-16"
      style={{ position: 'absolute', marginTop: '-250px', zIndex: 10 }}
    >
      <h2 className="text-4xl font-bold text-right text-white mb-8 pr-60">پروژه‌ها</h2>
      <div className="w-full px-4 md:px-16">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="swiper-container"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} className="swiper-slide !w-[1600px] !h-[340px] relative overflow-hidden rounded-xl shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-start">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-orange-500/80 text-white px-3 py-1 rounded-full text-xs font-semibold drop-shadow">{tag}</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 