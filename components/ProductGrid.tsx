'use client';

import { Play, Plus } from 'lucide-react';
import SafeImage from '@/components/SafeImage';
import { useApp } from '@/context/AppContext';
import { motion } from 'framer-motion';

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: 'Bird of Paradise',
      type: 'Extra Large with Ceramic',
      price: '$125.00',
      image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Fiddle-Leaf Fig',
      type: 'Medium/Heavy with Ceramic',
      price: '$65.00',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Monstera Deliciosa',
      type: 'Large with Ceramic',
      price: '$85.00',
      image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const { addToCart, openVideoModal } = useApp();

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-32 max-w-[1440px] mx-auto">
      
      {/* 1. Intro Row & Video Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20"
      >
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-primary-dark max-w-md leading-[1.1]">
          Plants for the people.
        </h2>
        
        {/* Landscape Video Badge */}
        <div 
          onClick={openVideoModal}
          className="relative w-[280px] h-[120px] rounded-[32px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow shrink-0 isolate"
        >
          <SafeImage 
            src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=400&q=80" 
            alt="Plant landscape"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/30 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
            <div className="w-12 h-12 bg-pure-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-pure-white transition-colors">
              <Play className="w-5 h-5 text-primary-dark ml-1" />
            </div>
            <p className="text-pure-white font-medium text-sm text-right leading-tight drop-shadow-md">
              Watch our<br/>latest arrivals
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. Category Header Row */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-between items-end border-b border-black/10 pb-6 mb-12"
      >
        <h3 className="font-display font-bold text-3xl md:text-4xl text-primary-dark">New Plants</h3>
        <button className="text-primary-dark/60 font-medium hover:text-accent-green transition-colors pb-1">
          View all Collection
        </button>
      </motion.div>

      {/* 3. Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] bg-[#e6e8e5] rounded-[32px] md:rounded-[40px] overflow-hidden mb-6 isolate">
              <SafeImage 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>

            {/* Product Meta & Add Button */}
            <div className="flex justify-between items-start px-2">
              <div className="flex flex-col">
                <h4 className="font-display font-bold text-xl md:text-2xl text-primary-dark mb-1 group-hover:text-accent-green transition-colors">
                  {product.name}
                </h4>
                <p className="text-primary-dark/60 text-sm mb-2">{product.type}</p>
                <span className="font-bold text-lg text-primary-dark">{product.price}</span>
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart();
                }}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-pure-white transition-all duration-300"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
