import Image from 'next/image'
import backgroundImage from '@/app/images/bg.jpg'; 

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center p-10">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg">
        <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Discover the Latest Trends
        </h2>
        <p className="text-xl text-white mb-6 drop-shadow-lg">
          Shop our new arrivals and stay ahead of the fashion curve.
        </p>
        <button className="bg-yellow-400 text-black py-3 px-6 rounded-full hover:bg-white hover:text-black transition shadow-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
}
