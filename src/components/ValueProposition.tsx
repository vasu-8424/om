import { motion } from 'motion/react';
import { CheckCircle2, Award, Clock, Map, HardHat } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'End-to-End Solutions',
      desc: 'From initial survey and planning to final handover, we manage every phase.',
      icon: Map
    },
    {
      title: 'Technical Mastery',
      desc: 'Strong focus on concrete ratios, steel durability, and MEP safety protocols.',
      icon: Award
    },
    {
      title: 'Local Expertise',
      desc: 'Deep understanding of local infrastructure and government-related projects.',
      icon: HardHat
    },
    {
      title: 'Unmatched Quality',
      desc: 'Strict adherence to structural standards and execution precision.',
      icon: CheckCircle2
    },
    {
      title: 'Timely Delivery',
      desc: 'Professional project management ensuring deadlines are met consistently.',
      icon: Clock
    }
  ];

  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400">Distinction & Trust</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-normal tracking-tight italic">
              Why Choose <span className="text-gold-400 not-italic font-semibold italic">OM Infra.</span>
            </h2>
          </div>

          <div className="lg:col-span-12">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 border border-white/10">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-10 flex flex-col justify-between hover:bg-white/5 transition-colors ${i !== reasons.length - 1 ? 'border-r border-white/10' : ''}`}
                >
                  <div>
                    <div className="text-[11px] font-bold text-gold-400 mb-8 tracking-widest">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="font-serif text-xl font-normal text-white mb-6 italic tracking-tight leading-tight">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-[10px] uppercase font-semibold text-stone-500 leading-relaxed tracking-wider">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
