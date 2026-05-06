import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

/* ─── Project groups ─── */
const portfolioItems = [
  {
    id: 'bhpv',
    title: 'BHPV Employee Housing',
    category: 'Residential Construction',
    desc: 'Large-scale residential housing project for BHPV employees — executed across multiple phases with quality structural precision.',
    images: [
      { img: '/bhpv employee housing.png', label: 'BHPV Employee Housing' },
      { img: '/bhpv.png',                  label: 'BHPV Employee Housing' },
      { img: '/bhpv2.png',                 label: 'BHPV Employee Housing' },
      { img: '/bhpv3.png',                 label: 'BHPV Employee Housing' },
      { img: '/bhpv4.png',                 label: 'BHPV Employee Housing' },
      { img: '/bhpv5.png',                 label: 'BHPV Employee Housing' },
      { img: '/bhpv6.png',                 label: 'BHPV Employee Housing' },
      { img: '/bhpv7.png',                 label: 'BHPV Employee Housing' },
    ],
  },
  {
    id: 'roads',
    title: 'Government CC Roads',
    category: 'Civil Infrastructure',
    desc: 'Government-contracted cement concrete road development with precision surface finishing across multiple road sections.',
    images: [
      { img: '/govt cc roads.png', label: 'Government CC Roads' },
      { img: '/cc2.png',           label: 'Government CC Roads' },
      { img: '/cc3.png',           label: 'Government CC Roads' },
      { img: '/cc4.png',           label: 'Government CC Roads' },
    ],
  },
  {
    id: 'mes',
    title: 'MES Projects',
    category: 'Military Engineering Services',
    desc: 'High-specification construction works across multiple phases for Military Engineering Services — under strict compliance standards.',
    images: [
      { img: '/mes.png',                        label: 'MES Projects' },
      { img: '/military engineer services.png',  label: 'MES Projects' },
      { img: '/mes 2.png',                      label: 'MES Projects' },
      { img: '/mes 3.png',                      label: 'MES Projects' },
      { img: '/mes 4.png',                      label: 'MES Projects' },
    ],
  },
];

/* ─── Individual card with its own internal slideshow ─── */
const ProjectCard = ({ item, index }: { item: typeof portfolioItems[number]; index: number }) => {
  const [current, setCurrent] = useState(0);
  const total = item.images.length;

  /* Auto-advance every 3 s, offset per card so they don't all change at once */
  useEffect(() => {
    const delay = setTimeout(() => {
      const t = setInterval(() => setCurrent(i => (i + 1) % total), 3000);
      return () => clearInterval(t);
    }, index * 900);
    return () => clearTimeout(delay);
  }, [total, index]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent(i => (i > 0 ? i - 1 : total - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent(i => (i < total - 1 ? i + 1 : 0));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="border border-white/10 hover:border-gold-400/30 transition-colors bg-white/[0.02] overflow-hidden group"
    >
      {/* Slideshow image area */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={item.images[current].img}
            alt={item.images[current].label}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Photo counter badge */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-[8px] font-bold text-gold-400 uppercase tracking-widest">
          {current + 1} / {total}
        </div>

        {/* Prev / Next arrows — show on hover */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 border border-white/20 text-white text-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-gold-400 hover:text-gold-400 transition-all touch-manipulation"
          aria-label="Previous"
        >‹</button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 border border-white/20 text-white text-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-gold-400 hover:text-gold-400 transition-all touch-manipulation"
          aria-label="Next"
        >›</button>

        {/* Slide label at bottom of image */}
        <div className="absolute bottom-3 left-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={item.images[current].label}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-[8px] font-bold uppercase tracking-[0.2em] text-gold-400/90"
            >
              {item.images[current].label}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <motion.div
          key={`bar-${item.id}-${current}`}
          className="absolute bottom-0 left-0 h-[2px] bg-gold-400 z-10"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'linear' }}
        />
      </div>

      {/* Card info */}
      <div className="p-5">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400 block mb-1">
          {item.category}
        </span>
        <h3 className="font-serif text-base sm:text-lg text-stone-100 italic mb-2">{item.title}</h3>
        <p className="text-[10px] text-stone-500 leading-relaxed">{item.desc}</p>

        {/* Dot indicators */}
        <div className="flex gap-1.5 mt-4">
          {item.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 touch-manipulation ${
                i === current ? 'w-5 bg-gold-400' : 'w-1 bg-stone-700 hover:bg-stone-500'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Portfolio Section ─── */
const Portfolio = () => (
  <section id="portfolio" className="py-14 sm:py-16 bg-black border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-3 block">
          Selected Portfolio
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight italic">
          Execution <span className="text-gold-400 not-italic font-semibold">in Focus</span>.
        </h2>
      </div>

      {/* 3-column grid — each card has its own slideshow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioItems.map((item, i) => (
          <ProjectCard key={item.id} item={item} index={i} />
        ))}
      </div>

    </div>
  </section>
);

export default Portfolio;
