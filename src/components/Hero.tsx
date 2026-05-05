import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center hero-gradient overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400">Engineering Distinction since 20XX</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-stone-900 leading-[1.1] tracking-tight mb-8 italic">
            Building Excellence <br /> 
            with <span className="text-gold-400 not-italic font-semibold">Precision</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 max-w-xl leading-relaxed mb-10 font-light tracking-wide uppercase text-[12px]">
            End-to-end civil construction solutions delivered with engineering mastery and disciplined execution.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="px-10 py-4 bg-stone-900 text-white text-[11px] uppercase tracking-widest font-semibold hover:bg-stone-800 transition-all shadow-xl"
            >
              Get a Quote
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#portfolio" 
              className="px-10 py-4 border border-stone-400 text-stone-900 text-[11px] uppercase tracking-widest font-semibold hover:border-gold-400 transition-all bg-white/50 backdrop-blur-sm"
            >
              View Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
