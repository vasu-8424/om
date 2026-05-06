import { motion } from 'motion/react';
import { useState } from 'react';

const portfolioItems = [
  {
    title: 'BHPV Employee Housing',
    category: 'Residential Construction',
    img: '/bhpv employee housing.png',
    desc: 'Large-scale residential housing project for BHPV employees with quality structural execution.'
  },
  {
    title: 'Government CC Roads',
    category: 'Civil Infrastructure',
    img: '/govt cc roads.png',
    desc: 'Government-contracted cement concrete road development with precision surface finishing.'
  },
  {
    title: 'MES Project',
    category: 'Military Engineering',
    img: '/mes.png',
    desc: 'Specialized construction project executed for Military Engineering Services.'
  },
  {
    title: 'Military Engineer Services',
    category: 'Defence Infrastructure',
    img: '/military engineer services.png',
    desc: 'High-specification defence infrastructure works delivered with strict compliance standards.'
  },
  {
    title: 'MES Site Works — Phase 2',
    category: 'Military Engineering',
    img: '/mes 2.png',
    desc: 'Continued MES site works focusing on structural quality and execution discipline across Phase 2 operations.'
  },
  {
    title: 'MES Site Works — Phase 3',
    category: 'Military Engineering',
    img: '/mes 3.png',
    desc: 'Phase 3 MES project execution showcasing on-ground construction progress and site management.'
  },
  {
    title: 'MES Site Works — Phase 4',
    category: 'Military Engineering',
    img: '/mes 4.png',
    desc: 'Final phase MES construction work completed under strict quality control and MES compliance standards.'
  }
];


const Portfolio = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-14 sm:py-16 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-3 block">Selected Portfolio</span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight italic">
            Execution <span className="text-gold-400 not-italic font-semibold">in Focus</span>.
          </h2>
        </div>

        {/* Portfolio grid — 1 col mobile, 2 col tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden bg-stone-900 aspect-[4/3] cursor-pointer touch-manipulation"
              onClick={() => setSelected(i)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400 block mb-1">{item.category}</span>
                <h3 className="font-serif text-sm sm:text-base font-normal text-white italic">{item.title}</h3>
              </div>
              {/* Tap indicator */}
              <div className="absolute top-3 right-3">
                <div className="w-7 h-7 bg-gold-400/90 flex items-center justify-center text-black text-xs font-bold rounded-sm">↗</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox — mobile optimized */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/97 flex flex-col items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={portfolioItems[selected].img}
              alt={portfolioItems[selected].title}
              className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
            />

            {/* Info */}
            <div className="mt-4 px-1">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400 block mb-1">{portfolioItems[selected].category}</span>
              <h3 className="font-serif text-lg sm:text-xl text-white italic mb-1">{portfolioItems[selected].title}</h3>
              <p className="text-stone-400 text-xs sm:text-sm">{portfolioItems[selected].desc}</p>
            </div>

            {/* Controls */}
            <div className="mt-4 flex justify-between items-center gap-2">
              <div className="flex gap-2">
                <button
                  onClick={() => setSelected(s => s !== null && s > 0 ? s - 1 : portfolioItems.length - 1)}
                  className="px-4 py-2.5 border border-white/20 text-stone-300 text-xs hover:border-gold-400 hover:text-gold-400 transition-colors touch-manipulation"
                >← Prev</button>
                <button
                  onClick={() => setSelected(s => s !== null && s < portfolioItems.length - 1 ? s + 1 : 0)}
                  className="px-4 py-2.5 border border-white/20 text-stone-300 text-xs hover:border-gold-400 hover:text-gold-400 transition-colors touch-manipulation"
                >Next →</button>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-2.5 bg-gold-400 text-black text-xs font-bold hover:bg-gold-500 transition-colors touch-manipulation"
              >✕ Close</button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {portfolioItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-2 h-2 rounded-full transition-colors touch-manipulation ${i === selected ? 'bg-gold-400' : 'bg-stone-700'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
