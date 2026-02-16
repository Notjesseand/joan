"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineBars2, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${(isScrolled || isMobileMenuOpen) ? 'py-4 bg-white shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group z-50 relative">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-serif text-xl font-bold italic border-2 border-primary transition-transform group-hover:scale-110">
            J
          </div>
          <span className={`text-xl font-bold tracking-wide transition-colors ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-primary'}`}>
            JOAN OJI
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest text-slate-600">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
          <NavLink href="/books">BOOKS</NavLink>
          <NavLink href="/foundation">FOUNDATION</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </div>

        <div className="hidden md:flex items-center">
           <Link href="/books" className="px-6 py-2.5 bg-primary text-white text-xs font-bold tracking-widest rounded-full hover:bg-accent transition-colors shadow-lg shadow-primary/20">
            THE LATEST BOOK
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl text-primary z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiXMark /> : <HiOutlineBars2 />}
        </button>

        {/* Mobile Sidebar Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center space-y-6 text-xl font-bold tracking-widest text-primary font-sans">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">HOME</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">ABOUT</Link>
            <Link href="/books" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">BOOKS</Link>
            <Link href="/foundation" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">FOUNDATION</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">CONTACT</Link>
          </div>
           <Link href="/books" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-3 bg-primary text-white text-sm font-bold tracking-widest rounded-full hover:bg-accent transition-colors shadow-lg shadow-primary/20 mt-8">
            THE LATEST BOOK
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="relative text-slate-600 hover:text-primary font-bold tracking-widest transition-colors duration-300 group py-1"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default Navbar;
