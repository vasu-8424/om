import { motion } from 'motion/react';

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

const CompanyOverview = () => {
  return (
    <section id="company-overview" className="bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">

        {/* Top label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-3 block">
            Company Overview
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight italic leading-tight max-w-xl">
              About <span className="text-gold-400 not-italic font-semibold">OM Infra Projects</span>.
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xl font-light">
              A dedicated construction and infrastructure firm committed to delivering high-quality
              residential and government projects with precision and reliability. With proven experience
              executing <span className="text-stone-200 font-semibold">49+ homes</span> and infrastructure
              works — including CC roads and MES-standard projects — we build structures that stand
              strong for generations through <span className="text-stone-200 font-semibold">timely delivery</span>,{' '}
              <span className="text-stone-200 font-semibold">transparent execution</span>, and{' '}
              <span className="text-stone-200 font-semibold">engineering excellence</span>.
            </p>
          </div>
        </motion.div>

        {/* Mission / Vision / Commitment cards */}
        <div className="grid sm:grid-cols-3 gap-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="p-6 border border-white/10 hover:border-gold-400/40 transition-colors bg-white/[0.02] group"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-3">
                {p.title}
              </h3>
              <div className="w-6 h-px bg-gold-400/40 mb-4" />
              <p className="text-[11px] text-stone-400 leading-relaxed font-light">{p.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompanyOverview;
