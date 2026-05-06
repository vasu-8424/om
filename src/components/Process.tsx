import { motion } from 'motion/react';

const processSteps = [
  { step: '01', title: 'Consultation & Site Survey', description: 'In-depth analysis of site requirements, soil conditions, and project scope.' },
  { step: '02', title: 'Engineering & Design', description: 'Structural blueprints ensuring maximum spatial efficiency and structural safety.' },
  { step: '03', title: 'Foundation & Execution', description: 'Monitoring concrete mixes, steel frameworks, and curing processes strictly.' },
  { step: '04', title: 'MEP & Interior Finishing', description: 'Plumbing, electrical, HVAC systems followed by premium interior finishes.' },
  { step: '05', title: 'Final Handover', description: 'Quality assurance and safety audits before project handover on schedule.' }
];

const Process = () => {
  return (
    <section className="py-14 sm:py-16 bg-stone-950 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-3 block">Our Workflow</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white tracking-tight italic leading-tight">
              The Blueprint of <span className="text-gold-400 not-italic font-semibold">Excellence</span>.
            </h2>
          </div>
          <p className="text-stone-500 text-xs font-light leading-relaxed max-w-xs hidden md:block">
            A systematic, engineered approach ensuring zero compromises on quality and timeline delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 border-t border-white/10">
          {processSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`pt-6 pb-8 px-4 relative group ${i !== processSteps.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="text-2xl font-serif text-white/10 mb-4 italic">{item.step}</div>
              <h3 className="font-bold text-white uppercase tracking-widest text-[10px] mb-2 leading-snug">{item.title}</h3>
              <p className="text-stone-500 text-[10px] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
