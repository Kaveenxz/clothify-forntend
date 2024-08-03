'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import product1 from '@/app/images/braids-3959201_1280.jpg';
import product2 from '@/app/images/fashion-5328924_1280.jpg';
import product3 from '@/app/images/people-2583833_1280.jpg';
import product4 from '@/app/images/t-shirt-design-2336850_1280.jpg';
import Navbar from './components/Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar/>
    </div>
  );
};

export default HomePage;
