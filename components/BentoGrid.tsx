'use client';

import SafeImage from '@/components/SafeImage';
import { motion } from 'framer-motion';

export default function BentoGrid() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-24 max-w-[1440px] mx-auto">
      
      {/* 1. Section Header Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end w-full mb-12 md:mb-16 gap-6 md:gap-0"
      >
        <p className="text-primary-dark/60 max-w-[280px] text-sm md:text-base leading-relaxed">
          Check out our video content inside the template gallery section. Look at our plants.
        </p>
        <h2 className="font-display font-black text-5xl md:text-7xl text-primary-dark tracking-tighter leading-none">
          Indoor<br/>Collection
        </h2>
      </motion.div>

      {/* 2. Bento Grid Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        
        {/* Top Left: Small Box (Span 7) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-pure-white"
        >
          <SafeImage 
            src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80" 
            alt="Philodendron"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
          <h3 className="absolute bottom-8 left-8 text-pure-white font-display font-bold text-3xl">
            Philodendron
          </h3>
        </motion.div>

        {/* Top Right: Tall Box (Span 5) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-5 h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-pure-white"
        >
          <SafeImage 
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1000&q=80" 
            alt="Calathea"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
          <h3 className="absolute bottom-8 left-8 text-pure-white font-display font-bold text-3xl">
            Calathea
          </h3>
        </motion.div>

        {/* Bottom Left: Highlight Box (Span 5) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-5 h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-[#152e20]"
        >
          {/* Subtle graphic or pattern can go here, using a solid color for now as per design */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
             <h3 className="text-accent-green font-display font-bold text-4xl mb-4">
               Rare Finds
             </h3>
             <p className="text-pure-white/80 font-medium">
               Limited stock of exotic species.
             </p>
          </div>
        </motion.div>

        {/* Bottom Right: Wide Box (Span 7) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="md:col-span-7 h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-pure-white"
        >
          <SafeImage 
            src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=1200&q=80" 
            alt="Low Light Tolerant"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
          <h3 className="absolute bottom-8 left-8 text-pure-white font-display font-bold text-3xl">
            Low Light Tolerant
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
