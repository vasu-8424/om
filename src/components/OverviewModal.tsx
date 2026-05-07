import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const pillars = [
  {
    title: 'Our Mission',
    body: 'To deliver high-quality residential and government infrastructure projects with precision, reliability, and engineering excellence — ensuring every structure stands strong for generations.',
  },
  {
    title: 'Our Vision',
    body: 'To be the most trusted construction partner in the region, recognised for transparent execution, timely delivery, and unwavering commitment to structural durability.',
  },
  {
    title: 'Our Commitment',
    body: 'Strict quality and durability standards on every project — from 49+ homes and CC roads to MES-standard government works — delivered on time, every time.',
  },
];

export default function OverviewModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#overview') {
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; // prevent scrolling behind
      } else {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial check
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const close = () => {
    // Remove the hash without scrolling to top
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-stone-900/60 border border-white/10 rounded-none sm:rounded-xl overflow-hidden p-6 sm:p-10 shadow-2xl"
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-stone-400 hover:text-white hover:rotate-90 transition-all duration-300 z-10"
              aria-label="Close overview"
            >
              <X size={28} />
            </button>

            <div className="mb-10 text-center relative z-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 block mb-3">
                Company Overview
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight italic">
                Our Foundation
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 relative z-0">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="p-6 border border-white/10 bg-black/40 group hover:border-gold-400/40 transition-colors"
                >
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-3">
                    {p.title}
                  </h3>
                  <div className="w-6 h-px bg-gold-400/40 mb-4" />
                  <p className="text-[11px] text-stone-400 leading-relaxed font-light">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
