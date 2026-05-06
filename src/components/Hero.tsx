import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">

      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/80" />

      {/* Content — safe padding for iOS notch */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-36 pb-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-4">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400">
              Engineering Distinction since 2025
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-stone-100 leading-[1.15] tracking-tight mb-5 italic">
            Building Excellence <br />
            with <span className="text-gold-400 not-italic font-semibold">Precision</span>.
          </h1>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed mb-8 font-light max-w-md">
            End-to-end construction solutions with a focus on quality, precision, and timely delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-7 py-3.5 bg-gold-400 text-black text-[11px] uppercase tracking-widest font-bold hover:bg-gold-500 transition-all text-center active:scale-[0.97] touch-manipulation"
            >
              Get a Quote
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#portfolio"
              className="px-7 py-3.5 border border-stone-600 text-stone-200 text-[11px] uppercase tracking-widest font-bold hover:border-gold-400 hover:text-gold-400 transition-all text-center touch-manipulation"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Stats bar — fixed width per item, never merges on any screen */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/75 backdrop-blur-md z-10 overflow-hidden">
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {[
            { label: 'Homes Under Execution', value: '49+' },
            { label: 'Govt Projects Delivered', value: '₹1 Cr+' },
            { label: 'Standard Execution', value: 'MES' },
            { label: 'Quality Commitment', value: '100%' },
            { label: 'Established', value: 'Since 2023' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                width: '140px',
                flexShrink: 0,
                flexGrow: 0,
                padding: '14px 12px',
                textAlign: 'center',
                borderRight: i !== 4 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <div style={{ fontSize: '16px', fontFamily: 'serif', color: '#c9a84c', marginBottom: '3px', whiteSpace: 'nowrap' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '7px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: '#6b7280', whiteSpace: 'nowrap' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
