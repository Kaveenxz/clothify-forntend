import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 FashionHub. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Instagram className="w-6 h-6 hover:text-primary" />
          <Facebook className="w-6 h-6 hover:text-primary" />
          <Twitter className="w-6 h-6 hover:text-primary" />
        </div>
      </div>
    </footer>
  );
}
