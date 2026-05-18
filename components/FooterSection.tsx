'use client';

import { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import SafeImage from '@/components/SafeImage';
import { useApp } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function FooterSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const { openVideoModal, showToast } = useApp();

  const faqs = [
    {
      question: "How do I care for my indoor plants?",
      answer: "Each plant comes with a detailed care guide covering watering schedules, light requirements, and humidity preferences tailored to its specific needs."
    },
    {
      question: "What is your return policy on plants?",
      answer: "We guarantee healthy plants upon arrival. If your plant is damaged during shipping, contact us within 48 hours with a photo for a full replacement."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within the contiguous United States to ensure our plants spend minimal time in transit and arrive healthy."
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setTimeout(() => {
      showToast(`Successfully subscribed with ${email}!`);
      setEmail('');
    }, 500);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-16 pb-6 md:pt-24 md:pb-8 max-w-[1440px] mx-auto bg-brand-cream overflow-hidden">
      
      {/* 1. Quality Plants Showcase & Video */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-12 md:mb-16"
      >
        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-primary-dark mb-4 tracking-tight">
          Quality Plants & <br className="md:hidden" />Curated Goods
        </h2>
        <p className="text-primary-dark/60 max-w-lg mx-auto text-sm md:text-base">
          Our team selects only the healthiest specimens, ensuring your space is instantly elevated with vibrant, living design.
        </p>
      </motion.div>

      {/* Massive Video Preview Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onClick={openVideoModal}
        className="relative w-full aspect-[4/3] md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden mb-20 md:mb-32 shadow-xl group cursor-pointer isolate"
      >
        <SafeImage 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80" 
          alt="Video showcase"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/30 transition-colors duration-500" />
        
        {/* Centered Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-pure-white/90 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-pure-white group-hover:scale-110 transition-all duration-300">
            <Play className="w-6 h-6 md:w-10 md:h-10 text-primary-dark ml-2" />
          </div>
        </div>
      </motion.div>

      {/* 2. FAQ Accordion & Newsletter Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 md:mb-32">
        
        {/* FAQs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h3 className="font-display font-bold text-3xl md:text-4xl text-primary-dark mb-8">
            Frequently <br className="hidden md:block" />Asked Questions
          </h3>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b border-black/10 pb-4 cursor-pointer transition-colors ${openFaq === index ? 'pt-4' : 'pt-2'}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center group">
                  <h4 className={`font-bold text-lg md:text-xl transition-colors ${openFaq === index ? 'text-accent-green' : 'text-primary-dark group-hover:text-primary-dark/70'}`}>
                    {faq.question}
                  </h4>
                  <span className="text-2xl font-light text-primary-dark/50 ml-4 shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </div>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-primary-dark/70 leading-relaxed max-w-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter & Info */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center bg-pure-white p-8 md:p-12 rounded-3xl shadow-sm"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-dark mb-3">
            Join the community
          </h3>
          <p className="text-primary-dark/60 mb-8 max-w-sm">
            Subscribe to our newsletter for early access to rare plant drops and care tips.
          </p>
          
          <form onSubmit={handleSubscribe} className="relative flex items-center w-full max-w-md">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full bg-brand-cream border border-black/5 rounded-full py-4 pl-6 pr-16 text-primary-dark placeholder:text-primary-dark/40 focus:outline-none focus:ring-2 focus:ring-accent-green/50 transition-all"
              required
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-dark text-pure-white rounded-full flex items-center justify-center hover:bg-accent-green hover:scale-105 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* 3. Dark Green Footer Capsule */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-primary-dark rounded-[32px] md:rounded-[48px] px-6 py-12 md:px-16 md:py-20 flex flex-col"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 border-b border-pure-white/10 pb-12 mb-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col">
            <h2 className="font-display font-black text-3xl md:text-4xl text-pure-white tracking-tight mb-4">
              Petal power
            </h2>
            <p className="text-pure-white/60 max-w-[240px] text-sm">
              Cultivating serene spaces with premium indoor plants.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-pure-white font-bold mb-2">Shop</h4>
              <a href="#" className="text-pure-white/60 hover:text-accent-green text-sm transition-colors">All Plants</a>
              <a href="#" className="text-pure-white/60 hover:text-accent-green text-sm transition-colors">Care Accessories</a>
              <a href="#" className="text-pure-white/60 hover:text-accent-green text-sm transition-colors">Gift Cards</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-pure-white font-bold mb-2">Company</h4>
              <a href="#" className="text-pure-white/60 hover:text-accent-green text-sm transition-colors">Our Story</a>
              <a href="#" className="text-pure-white/60 hover:text-accent-green text-sm transition-colors">Journal</a>
              <a href="#" className="text-pure-white/60 hover:text-accent-green text-sm transition-colors">Contact</a>
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="text-pure-white font-bold mb-2">Legal</h4>
              <a href="#" className="text-pure-white/60 hover:text-accent-green text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-pure-white/60 hover:text-accent-green text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-0">
          <p className="text-pure-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Petal Power. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-pure-white/5 rounded-full flex items-center justify-center text-pure-white hover:bg-accent-green hover:text-primary-dark transition-colors font-bold text-xs">
              IG
            </a>
            <a href="#" className="w-10 h-10 bg-pure-white/5 rounded-full flex items-center justify-center text-pure-white hover:bg-accent-green hover:text-primary-dark transition-colors font-bold text-xs">
              TW
            </a>
            <a href="#" className="w-10 h-10 bg-pure-white/5 rounded-full flex items-center justify-center text-pure-white hover:bg-accent-green hover:text-primary-dark transition-colors font-bold text-xs">
              FB
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
