import React from 'react';
import NavLink from './NavLink';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-gold-400">SaleUp</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">יתרונות</NavLink>
            <NavLink href="#pricing">תמחור</NavLink>
            <NavLink href="#contact">צור קשר</NavLink>
            <button className="px-6 py-2 bg-gold-400 text-navy-900 rounded-full font-medium hover:bg-gold-500 transition-colors">
              התחל עכשיו
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gold-400">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;