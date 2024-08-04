import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

import product1 from '@/app/images/carousel1.jpg';
import product2 from '@/app/images/carousel2.jpg';
import product3 from '@/app/images/carousel3.jpg';

// Install Swiper modules
SwiperCore.use([Autoplay]);

export default function Carousel() {
  return (
    <section className="relative my-10 w-full h-96">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src={product1} alt="Slide 1" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src={product2} alt="Slide 2" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src={product3} alt="Slide 3" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
