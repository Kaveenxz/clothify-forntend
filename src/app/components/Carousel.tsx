import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import product1 from '@/app/images/braids-3959201_1280.jpg'
import product2 from '@/app/images/fashion-5328924_1280.jpg'
import product3 from '@/app/images/people-2583833_1280.jpg'

import Image from 'next/image';

export default function Carousel() {
  return (
    <section className="my-10">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
        className="h-96"
      >
        <SwiperSlide>
          <Image src={product1} alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={product2} alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={product3} alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
