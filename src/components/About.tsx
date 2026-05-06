import { motion } from 'motion/react';
import { User, ShieldCheck, Cpu, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const leaders = [
    {
      name: 'Varun Sinisetty',
      role: 'Founder & Operations Head',
      description: 'Drives vision and execution across planning, site execution, and client coordination.',
      icon: User
    },
    {
      name: 'Sreenivasa Rao',
      role: 'Projects & Operations Manager',
      description: 'Expertise in large-scale execution, workforce management, and site operations.',
      icon: User
    }
  ];

  const engineering = [
    { name: 'Charish', creds: 'M.Tech Structural Engg (AU)', focus: 'Safety & Stability', icon: ShieldCheck },
    { name: 'Reddi Eswar Sai', creds: 'Civil Engineering (Vignan)', focus: 'Site-Structural Alignment', icon: Cpu },
    { name: 'Vijay Sri Padmakar', creds: 'B.Tech (Mech) & MBA (GITAM)', focus: 'Resource Optimization', icon: TrendingUp }
  ];

  const allMembers = leaders.concat(
    engineering.map(e => ({ name: e.name, role: e.creds, description: e.focus, icon: e.icon }))
  );

  return (
    <section id="about" className="bg-black border-b border-white/10">
      <div className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Header */}
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-3 block">Our Team</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight italic leading-tight">
              The Minds Behind <span className="text-gold-400 not-italic font-semibold">The Structures</span>.
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
            {allMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 border border-white/10 hover:border-gold-400/40 transition-colors bg-white/[0.02] group"
              >
                <member.icon className="w-5 h-5 text-gold-400 mb-4" />
                <h3 className="text-sm font-bold text-stone-100 tracking-widest uppercase mb-1">{member.name}</h3>
                <div className="text-[10px] text-stone-500 uppercase tracking-[0.15em] font-medium mb-3">{member.role}</div>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Operations Backbone */}
          <div className="border border-white/10 bg-white/[0.02]">
            <div className="px-4 py-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h4 className="font-serif text-lg italic text-stone-100">Operations Backbone</h4>
              <span className="text-[9px] font-bold text-gold-400 uppercase tracking-[0.3em]">Execution & Logistics</span>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { name: 'Bhagavan', role: 'Operational Excellence Lead' },
                { name: 'Shashidhar', role: 'Resource & Workforce Coordinator' },
                { name: 'Shiva', role: 'Site Foreman' }
              ].map((op) => (
                <div key={op.name} className="px-6 py-5 text-center hover:bg-white/5 transition-colors">
                  <h5 className="text-sm font-bold text-stone-100 mb-1 tracking-widest uppercase">{op.name}</h5>
                  <p className="text-[9px] font-bold text-stone-500 uppercase tracking-[0.2em]">{op.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
