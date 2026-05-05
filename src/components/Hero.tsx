import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center hero-gradient overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-40 md:pt-48 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6 lg:mb-8">
            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-gold-400">Engineering Distinction since 20XX</span>
          </div>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-stone-900 leading-[1.1] tracking-tight mb-8 lg:mb-10 italic">
            Building Excellence <br /> 
            with <span className="text-gold-400 not-italic font-semibold">Precision</span>.
          </h1>
          
          <p className="text-sm md:text-lg lg:text-xl text-stone-600 max-w-xl leading-relaxed mb-10 lg:mb-12 font-light tracking-wide uppercase text-[12px]">
            At OM Infra Projects, we provide end-to-end construction solutions with a focus on quality, precision, and timely delivery.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="px-12 py-5 bg-stone-900 text-white text-[12px] uppercase tracking-widest font-bold hover:bg-stone-800 transition-all shadow-2xl"
            >
              Get a Quote
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#portfolio" 
              className="px-12 py-5 border-2 border-stone-400 text-stone-900 text-[12px] uppercase tracking-widest font-bold hover:border-gold-400 transition-all bg-white/50 backdrop-blur-sm"
            >
              View Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full border-t border-stone-200/40 bg-white/60 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between">
           {[
             { label: 'Successful Projects', value: '150+' },
             { label: 'Years of Experience', value: '10+' },
             { label: 'Expert Engineers', value: '25+' },
             { label: 'Client Satisfaction', value: '100%' }
           ].map((stat, i) => (
             <div key={stat.label} className={`py-8 px-6 flex-1 text-center ${i !== 3 ? 'border-r border-stone-300/40' : ''}`}>
               <div className="text-3xl font-serif text-gold-400 mb-1">{stat.value}</div>
               <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-600">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
