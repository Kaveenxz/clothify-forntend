'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingCart, Heart, User, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <p className="text-2xl font-bold text-black">ClothiFy</p>
          </Link>
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute right-3 top-2 text-gray-500" />
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/wishlist">
            <Heart className="h-6 w-6 text-gray-700 hover:text-black" />
          </Link>
          <Link href="/signin">
            <p className="text-gray-700 hover:text-black">Sign In</p>
          </Link>
          <Link href="/cart">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-black" />
          </Link>
        </div>
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-black" />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/">
            <p onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:text-black">Home</p>
          </Link>
          <Link href="/shop">
            <p onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:text-black">Shop</p>
          </Link>
          <Link href="/about">
            <p onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:text-black">About</p>
          </Link>
          <Link href="/contact">
            <p onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:text-black">Contact</p>
          </Link>
          <Link href="/wishlist">
            <p onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:text-black">Wishlist</p>
          </Link>
          <Link href="/signin">
            <p onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:text-black">Sign In</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
