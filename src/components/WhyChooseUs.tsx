import { motion } from 'motion/react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-14 sm:py-16 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-3 block">Why Choose Us</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight mb-5 italic leading-tight">
              Execution meets <span className="text-gold-400 not-italic font-semibold">Mastery</span>.
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-8 font-light">
              OM Infra Projects bridges technical engineering and client-focused project management — from first survey to final finish.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Technical Mastery', desc: 'Concrete ratios, steel durability, and MEP safety standards.' },
                { title: 'Local Expertise', desc: 'Deep knowledge of regional infrastructure and government projects.' },
                { title: 'End-to-End', desc: 'Complete oversight ensuring zero gaps from planning to handover.' },
                { title: 'Timely Delivery', desc: 'Disciplined management guaranteeing scheduled completion.' }
              ].map(item => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-gold-400 flex-shrink-0" />
                    <h4 className="font-bold text-stone-100 uppercase tracking-widest text-[10px]">{item.title}</h4>
                  </div>
                  <p className="text-stone-500 text-[10px] tracking-wider leading-relaxed pl-3.5">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              alt="Construction Progress"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
