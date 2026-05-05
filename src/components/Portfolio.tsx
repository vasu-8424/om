import { motion } from 'motion/react';

const portfolioItems = [
  {
    title: 'Structural Frameworks',
    category: 'Civil Engineering',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000',
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
    <section id="portfolio" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400">Selected Portfolio</span>
        </motion.div>
        <h2 className="font-serif text-4xl md:text-5xl font-normal text-stone-900 tracking-tight italic">
          Execution <span className="text-gold-400 not-italic font-semibold">in Focus</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-0 border-y border-stone-200">
        {portfolioItems.map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`group relative overflow-hidden aspect-[4/5] bg-stone-900 ${i !== portfolioItems.length - 1 ? 'border-r border-stone-200' : ''}`}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold-400">{item.category}</span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-white tracking-tight mb-3 italic">{item.title}</h3>
              <p className="text-[10px] uppercase font-semibold text-stone-400 tracking-widest leading-relaxed">
                {item.desc}
              </p>
            </div>
            
            <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-gold-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
