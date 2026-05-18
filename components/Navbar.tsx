'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { cartCount } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 flex justify-center p-4 sm:p-6 md:p-8 pt-6 pointer-events-none">
        <div className="w-full max-w-[1440px] pointer-events-auto">
          <nav className="flex items-center justify-between bg-pure-white/90 backdrop-blur-md rounded-full px-4 py-3 md:px-6 shadow-sm border border-black/5">
            
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2 group z-50">
              <div className="bg-accent-green text-primary-dark p-2 rounded-full group-hover:scale-105 transition-transform">
                <Leaf className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-primary-dark">
                Petal power
              </span>
            </Link>

            {/* Desktop Center: Links */}
            <div className="hidden md:flex items-center gap-8 text-primary-dark/80 font-medium">
              <Link href="/" className="hover:text-accent-green transition-colors">Home</Link>
              <Link href="/contact" className="hover:text-accent-green transition-colors">Contact</Link>
              <Link href="/blog" className="hover:text-accent-green transition-colors">Blog</Link>
            </div>

            {/* Desktop Right: Actions */}
            <div className="hidden md:flex items-center gap-2 border border-black/5 rounded-full p-1 pl-4 bg-pure-white/50">
              <button className="text-primary-dark/60 hover:text-primary-dark transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/shop" className="font-medium px-2 text-primary-dark hover:text-accent-green transition-colors">
                Shop
              </Link>
              {cartCount > 0 && (
                <div className="flex items-center gap-1 bg-accent-green/10 text-accent-green px-3 py-1 rounded-full font-bold text-sm">
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount}
                </div>
              )}
              <Link href="/login" className="bg-primary-dark text-pure-white px-6 py-2 rounded-full font-medium hover:bg-black transition-colors ml-2">
                Login
              </Link>
            </div>

            {/* Mobile Right: Actions & Toggle */}
            <div className="flex md:hidden items-center gap-3 z-50">
              {cartCount > 0 && (
                <Link href="/shop" className="flex items-center gap-1 bg-accent-green/10 text-accent-green px-3 py-1.5 rounded-full font-bold text-xs">
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount}
                </Link>
              )}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-primary-dark bg-brand-cream rounded-full border border-black/5 shadow-sm active:scale-95 transition-transform"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-cream/95 backdrop-blur-md flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-8 text-3xl font-display font-bold text-primary-dark">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-green transition-colors">Home</Link>
              <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-green transition-colors">Shop All</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-green transition-colors">Journal</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-green transition-colors">Contact</Link>
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-primary-dark text-pure-white px-10 py-4 rounded-full hover:bg-accent-green transition-colors text-xl shadow-lg">
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
