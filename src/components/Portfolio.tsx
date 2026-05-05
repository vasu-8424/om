import { motion } from 'motion/react';

const portfolioItems = [
  {
    title: 'Structural Frameworks',
    category: 'Civil Engineering',
    img: 'https://images.unsplash.com/photo-1541888086953-ce15bf8cb4e1?auto=format&fit=crop&q=80&w=1000',
    desc: 'Precision site progress focusing on structural stability.'
  },
  {
    title: 'Premium Interiors',
    category: 'Interior Design',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    desc: 'Functional design and aesthetic luxury finishes.'
  },
  {
    title: 'Modern Infrastructure',
    category: 'Civil Infrastructure',
    img: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1000',
    desc: 'Roads, bridges, and high-quality utility networks.'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-3 mb-6"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gold-400">Selected Portfolio</span>
        </motion.div>
        <h2 className="font-serif text-4xl md:text-5xl font-normal text-stone-900 tracking-tight italic">
          Execution <span className="text-gold-400 not-italic font-semibold">in Focus</span>.
        </h2>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 space-y-24">
        {portfolioItems.map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="group relative overflow-hidden aspect-[4/3] md:aspect-[21/9] bg-stone-900 rounded-sm"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 transition-opacity duration-700"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-12 md:p-24 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-gold-400"></span>
                <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gold-400">{item.category}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-4xl font-normal text-white tracking-tight mb-4 italic">{item.title}</h3>
              <p className="text-[12px] uppercase font-light text-stone-300 tracking-widest leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
