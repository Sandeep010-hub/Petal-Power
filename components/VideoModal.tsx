'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-5xl aspect-video bg-primary-dark rounded-[32px] overflow-hidden shadow-2xl z-10 isolate"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-pure-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-pure-white hover:bg-pure-white hover:text-primary-dark transition-colors z-20 border border-pure-white/30 shadow-sm"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#152e20] to-primary-dark opacity-80 z-0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4 text-center">
              <span className="text-pure-white font-display font-bold text-3xl md:text-5xl mb-4 drop-shadow-md tracking-tight">
                High-Res Interactive Video
              </span>
              <p className="text-pure-white/80 max-w-md mx-auto text-lg md:text-xl font-light">
                (Simulated video playback asset.)
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
