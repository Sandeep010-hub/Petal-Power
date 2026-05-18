'use client';

import { ArrowDown } from 'lucide-react';
import SafeImage from '@/components/SafeImage';
import { motion } from 'framer-motion';

export default function Hero() {
  const avatars = [
    '1485955900006-10f4d324d411',
    '1463320726281-696a485928c7',
    '1512428559087-560fa5ceab42'
  ];

  return (
    <section className="relative w-full pt-28 md:pt-32 px-4 sm:px-6 md:px-8 lg:px-12 pb-8 bg-brand-cream">
      {/* Massive Banner Section */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[550px] md:h-[650px] lg:h-[800px] bg-primary-dark rounded-[32px] md:rounded-[60px] lg:rounded-[80px] overflow-hidden isolate shadow-2xl"
      >
        
        {/* Background Image Overlay */}
        <SafeImage 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" 
          alt="Hero Background"
          fill
          priority
          className="absolute inset-0 object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />

        {/* Main Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-accent-green text-[10px] sm:text-xs md:text-sm font-semibold mb-3 md:mb-4 pl-1"
          >
            Petal power
          </motion.p>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="font-display font-black text-[18vw] sm:text-6xl md:text-[14vw] lg:text-[180px] text-pure-white tracking-tighter leading-[0.8] mb-4 sm:mb-6 md:mb-8"
          >
            growth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="max-w-[280px] sm:max-w-sm md:max-w-md text-brand-cream/80 text-sm sm:text-base md:text-xl font-light leading-relaxed pl-1"
          >
            Discover a curated collection of rare indoor plants that transform your living space into a breathing sanctuary.
          </motion.p>
        </div>

        {/* Bottom-Left Badge */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-[104px] sm:bottom-[120px] left-4 md:bottom-12 md:left-12 lg:bottom-16 lg:left-24 bg-[#152e20]/80 backdrop-blur-md border border-pure-white/10 rounded-full p-1.5 pr-4 md:p-2 md:pr-6 flex items-center gap-3 md:gap-4 z-20 shadow-lg"
        >
          <div className="flex -space-x-2 md:-space-x-3">
            {avatars.map((id, index) => (
              <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-[#152e20] overflow-hidden bg-brand-cream relative">
                <SafeImage 
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=100&q=80`} 
                  alt="Plant preview"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-pure-white font-bold text-sm md:text-lg leading-tight">100+ Plants</span>
            <span className="text-pure-white/60 text-[10px] md:text-xs">In our collection</span>
          </div>
        </motion.div>

        {/* Bottom-Right Asymmetric Cutout Overlay */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-0 right-0 bg-brand-cream rounded-tl-[32px] md:rounded-tl-[80px] p-4 sm:p-5 md:p-6 lg:p-8 flex items-center gap-2 md:gap-4 z-20"
        >
          <button className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-pure-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform group shrink-0">
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-dark group-hover:text-accent-green transition-colors" />
          </button>
          <button className="bg-primary-dark text-pure-white font-medium text-xs sm:text-sm md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-8 rounded-[24px] md:rounded-full hover:bg-black transition-colors shrink-0 text-center whitespace-nowrap">
            Drop fresh of plants
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
