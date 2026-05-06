import { motion } from 'motion/react';

const leadership = [
  {
    name: 'Varun Sinisetty',
    role: 'Founder & Operations Head',
    credentials: 'BITS Pilani',
    description:
      'Drives the overall vision and execution strategy of OM Infra Projects with a hands-on approach. Directly oversees project planning, site execution, and client coordination — ensuring every commitment is met with precision and accountability.',
  },
  {
    name: 'Sreenivasa Rao',
    role: 'Projects & Operations Manager',
    credentials: 'Senior Contractor — 20+ Years in Civil Construction',
    description:
      'Brings deep, field-tested expertise in large-scale civil project execution. Manages workforce deployment, site logistics, and multi-phase project operations — the cornerstone of on-ground reliability for every OM Infra site.',
  },
];

const engineering = [
  {
    name: 'Chakrish CH',
    role: 'Structural Engineer',
    credentials: 'M.Tech, Structural Engineering — Andhra University',
    description:
      'Leads structural design and detailed analysis for all projects. Specializes in ensuring structural safety, load calculations, and construction stability — translating engineering principles into durable, code-compliant structures.',
  },
  {
    name: 'Reddi Eswar Sai',
    role: 'Civil Engineer — Site & Structural Execution',
    credentials: 'B.Tech, Civil Engineering — Vignan University',
    description:
      'Bridges the gap between design specifications and site execution. Manages day-to-day structural coordination to ensure construction activities precisely follow approved drawings and engineering standards.',
  },
  {
    name: 'Vijay Sri Padmakar',
    role: 'Project Planning & Operations',
    credentials: 'B.Tech (Mech) — GITAM University | MBA — Andhra University',
    description:
      'Over 7 years of experience in project planning and operational efficiency. Drives resource optimization, procurement planning, and schedule management — ensuring projects are delivered on time and within budget.',
  },
];

const operations = [
  {
    name: 'Bhagavan',
    role: 'Operational Excellence Lead',
    description:
      'Directs process improvement and execution efficiency across active sites. Ensures high standards of quality control are maintained through structured supervision and systematic workflow management.',
  },
  {
    name: 'Dinesh',
    role: 'QA/QC Incharge',
    description:
      'Responsible for implementing rigorous Quality Assurance and Quality Control protocols across all project phases — ensuring every deliverable meets the highest standards of structural integrity and compliance.',
  },
  {
    name: 'Shashidhar',
    role: 'Resource & Workforce Coordinator',
    description:
      'Manages manpower planning, daily labor scheduling, and site logistics. Ensures uninterrupted workflow and optimal labor utilization across concurrent project sites.',
  },
  {
    name: 'Shiva',
    role: 'Site Foreman',
    description:
      'Oversees daily on-site operations and workmanship quality. Acts as the direct link between site engineers and ground crews — maintaining safety practices and execution discipline at the task level.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-black border-b border-white/10">
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Section Header */}
          <div className="mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-3 block">Our Team</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight italic leading-tight">
                OM Infra Projects — <span className="text-gold-400 not-italic font-semibold">Leadership</span>.
              </h2>
              <p className="text-stone-500 text-xs font-light leading-relaxed max-w-xs hidden md:block">
                Where Expertise Meets Execution. Quality in Every Detail. Commitment in Every Step.
              </p>
            </div>
          </div>

          {/* ── LEADERSHIP ── */}
          <div className="mb-4">
            <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-500 mb-3 pl-1">Leadership</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {leadership.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 border border-white/10 hover:border-gold-400/40 transition-colors bg-white/[0.02] group"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-stone-100 tracking-widest uppercase">{member.name}</h3>
                    <span className="text-[8px] font-bold text-gold-400 uppercase tracking-widest whitespace-nowrap mt-0.5">Leadership</span>
                  </div>
                  <div className="text-[10px] text-gold-400/80 uppercase tracking-[0.15em] font-medium mb-1">{member.role}</div>
                  <div className="text-[9px] text-stone-500 uppercase tracking-widest mb-4">{member.credentials}</div>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-[10px] text-stone-400 leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── ENGINEERING ── */}
          <div className="mb-4">
            <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-500 mb-3 pl-1">Engineering & Technical Excellence</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {engineering.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-6 border border-white/10 hover:border-gold-400/40 transition-colors bg-white/[0.02] group"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-stone-100 tracking-widest uppercase">{member.name}</h3>
                    <span className="text-[8px] font-bold text-gold-400 uppercase tracking-widest whitespace-nowrap mt-0.5">Engineer</span>
                  </div>
                  <div className="text-[10px] text-gold-400/80 uppercase tracking-[0.15em] font-medium mb-1">{member.role}</div>
                  <div className="text-[9px] text-stone-500 uppercase tracking-widest mb-4">{member.credentials}</div>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-[10px] text-stone-400 leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── OPERATIONS BACKBONE ── */}
          <div className="border border-white/10 bg-white/[0.02]">
            <div className="px-5 py-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h4 className="font-serif text-lg italic text-stone-100">Operations Backbone</h4>
              <span className="text-[9px] font-bold text-gold-400 uppercase tracking-[0.3em]">Execution & Logistics</span>
            </div>
            <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {operations.map((op, i) => (
                <motion.div
                  key={op.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="px-6 py-6 hover:bg-white/5 transition-colors"
                >
                  <h5 className="text-sm font-bold text-stone-100 mb-1 tracking-widest uppercase">{op.name}</h5>
                  <p className="text-[9px] font-bold text-gold-400/70 uppercase tracking-[0.2em] mb-3">{op.role}</p>
                  <p className="text-[10px] text-stone-500 leading-relaxed">{op.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Execution Strength banner */}
          <div className="mt-3 px-5 py-4 border border-white/10 bg-white/[0.015] flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-500 block mb-1">Execution Strength</span>
              <p className="text-[10px] text-stone-400 leading-relaxed max-w-2xl">
                Behind our core team is a skilled workforce of technicians and operators who bring discipline and speed to every stage of construction.
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-[9px] font-bold text-gold-400 uppercase tracking-widest italic">
                Quality in Every Detail.<br />Commitment in Every Step.<br />Excellence in Every Project.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
