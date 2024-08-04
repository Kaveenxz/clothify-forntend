'use client';
import Head from 'next/head';
import Header from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import ProductGrid from '@/app/components/ProductGrid';
import FeaturedCategories from '@/app/components/FeaturedCategories';
import Testimonials from '@/app/components/Testimonials';
import Newsletter from '@/app/components/NewsLetter';
import Carousel from '@/app/components/Carousel';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Head>
        <title>FashionHub - Trendy Clothing</title>
        <meta name="description" content="Discover the latest fashion trends at FashionHub." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main>
        <Header/>

        <HeroSection />
        <FeaturedCategories />
        <Carousel />
        <ProductGrid />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
