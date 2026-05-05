import { motion } from 'motion/react';

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation & Site Survey',
    description: 'We begin with an in-depth analysis of your site, understanding technical requirements, soil conditions, and project scope.'
  },
  {
    step: '02',
    title: 'Engineering & Architectural Design',
    description: 'Our structural engineers and architects draft detailed blueprints ensuring maximum spatial efficiency and absolute structural safety.'
  },
  {
    step: '03',
    title: 'Foundation & Structural Execution',
    description: 'Disciplined deployment of workforce and materials. We strictly monitor concrete mixes, steel frameworks, and curing processes.'
  },
  {
    step: '04',
    title: 'MEP Integration & Interior Finishing',
    description: 'Seamless installation of plumbing, electrical, and HVAC systems followed by premium interior aesthetic finishings.'
  },
  {
    step: '05',
    title: 'Final Handover',
    description: 'Comprehensive quality assurance checks and safety audits before the final project is handed over to the client on schedule.'
  }
];

const Process = () => {
  return (
    <section className="py-32 bg-stone-900 border-b border-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24 md:flex justify-between items-end gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gold-400">Our Workflow</span>
            </motion.div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white tracking-tight italic leading-tight">
              The Blueprint of <br /> <span className="text-gold-400 not-italic font-semibold">Excellence</span>.
            </h2>
          </div>
          <div className="hidden md:block max-w-sm">
             <p className="text-stone-400 text-sm font-light leading-relaxed">
               A systematic, engineered approach to construction ensuring zero compromises on quality and timeline delivery.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 border-t border-stone-800">
          {processSteps.map((item, i) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`pt-12 pb-16 px-6 relative group ${i !== processSteps.length - 1 ? 'border-b md:border-b-0 md:border-r border-stone-800' : ''}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              
              <div className="text-4xl font-serif text-stone-800 mb-6 italic">{item.step}</div>
              <h3 className="font-bold text-white uppercase tracking-widest text-[11px] mb-4 min-h-[30px]">{item.title}</h3>
              <p className="text-stone-400 text-[11px] leading-relaxed tracking-wider">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
