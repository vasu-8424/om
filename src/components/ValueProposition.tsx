import { motion } from 'motion/react';
import { CheckCircle2, Award, Clock, Map, HardHat } from 'lucide-react';

const reasons = [
  { title: 'End-to-End Solutions', desc: 'From initial survey to final handover, we manage every phase.', icon: Map },
  { title: 'Technical Mastery', desc: 'Concrete ratios, steel durability, and MEP safety protocols.', icon: Award },
  { title: 'Local Expertise', desc: 'Deep knowledge of local infrastructure and government projects.', icon: HardHat },
  { title: 'Unmatched Quality', desc: 'Strict adherence to structural standards and execution precision.', icon: CheckCircle2 },
  { title: 'Timely Delivery', desc: 'Professional management ensuring deadlines are met consistently.', icon: Clock }
];

const ValueProposition = () => {
  return (
    <section className="py-14 sm:py-16 bg-stone-950 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-3 block">Distinction & Trust</span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight italic">
            Why Choose <span className="text-gold-400 not-italic font-semibold">OM Infra</span>.
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 border border-white/10">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`p-6 hover:bg-white/5 transition-colors group ${i !== reasons.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-white/10' : ''}`}
              >
                <Icon className="w-5 h-5 text-gold-400 mb-4" />
                <h3 className="font-serif text-base font-normal text-white mb-2 italic leading-tight">{reason.title}</h3>
                <p className="text-[10px] text-stone-500 leading-relaxed tracking-wide">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ValueProposition;
