import { motion } from 'motion/react';
import { User, ShieldCheck, Cpu, HardHat, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const leaders = [
    {
      name: 'Varun Sinisetty',
      role: 'Founder & Operations Head',
      bg: 'BITS Pilani',
      description: 'Drives vision and execution across planning, site execution, and client coordination.',
      icon: User
    },
    {
      name: 'Sreenivasa Rao',
      role: 'Projects & Operations Manager',
      bg: 'Senior Contractor',
      description: 'Expertise in large-scale execution, workforce management, and site operations.',
      icon: User
    }
  ];

  const engineering = [
    {
      name: 'Charish',
      creds: 'M.Tech Structural Engineering (AU)',
      focus: 'Safety and Stability',
      icon: ShieldCheck
    },
    {
      name: 'Reddi Eswar Sai',
      creds: 'Civil Engineering (Vignan)',
      focus: 'Site-Structural Alignment',
      icon: Cpu
    },
    {
      name: 'Vijay Sri Padmakar',
      creds: 'B.Tech (Mech) & MBA (GITAM)',
      focus: 'Resource Optimization',
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className="bg-[#F9F7F2] border-b border-stone-300">
      {/* Why Choose Us Section */}
      <div className="py-32 border-b border-stone-300 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gold-400 font-semibold underline underline-offset-8 decoration-gold-400/30">Why Choose Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-stone-900 tracking-tight mb-8 italic leading-tight">
              Execution meets <span className="text-gold-400 not-italic font-semibold">Mastery</span>.
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-10 font-light">
              OM Infra Projects stands out by bridging the gap between technical engineering and client-focused project management. We handle everything from the first survey to the final interior finish.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: 'Technical Mastery', desc: 'Focus on concrete ratios, steel durability, and MEP safety standards.' },
                { title: 'Local Expertise', desc: 'Deep understanding of infrastructure needs and government-funded projects.' },
                { title: 'End-to-End Solutions', desc: 'Comprehensive oversight ensuring zero gaps from planning to handover.' },
                { title: 'Timely Delivery', desc: 'Disciplined project management guaranteeing scheduled completion.' }
              ].map(item => (
                <div key={item.title}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 bg-gold-400"></span>
                    <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[11px]">{item.title}</h4>
                  </div>
                  <p className="text-stone-500 text-[11px] uppercase tracking-wider leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" alt="Construction Progress" className="object-cover w-full h-full shadow-2xl" />
            <div className="absolute inset-0 bg-stone-900/10"></div>
          </div>
        </div>
      </div>

      {/* Leadership & Engineering Section */}
      <div className="py-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 font-semibold mb-4 block">Our Team</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-stone-900 tracking-tight italic leading-tight">
              The Minds Behind <br /> <span className="text-gold-400 not-italic font-semibold">The Structures</span>.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leaders.concat(engineering.map(e => ({ name: e.name, role: e.creds, description: e.focus, icon: e.icon, bg: 'Engineering Division' }))).map((leader, i) => (
              <motion.div 
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 border border-stone-200 hover:border-gold-400/50 transition-colors shadow-sm group"
              >
                <div className="mb-8">
                  <leader.icon className="w-8 h-8 text-gold-400 mb-6" />
                  <h3 className="text-xl font-bold text-stone-900 tracking-widest uppercase mb-2">{leader.name}</h3>
                  <div className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">{leader.role}</div>
                </div>
                <div className="pt-8 border-t border-stone-100">
                  <p className="text-[11px] text-stone-600 font-medium uppercase tracking-widest leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Operations Backbone */}
          <div className="mt-20 border border-stone-300 bg-white">
             <div className="p-12 border-b border-stone-300 text-center bg-stone-50/50">
               <h4 className="font-serif text-3xl italic text-stone-900 mb-2">Operations Backbone</h4>
               <p className="text-[10px] font-bold text-gold-400 uppercase tracking-[0.3em]">Execution & Logistics</p>
             </div>
             <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-300">
               {[
                 { name: 'Bhagavan', role: 'Operational Excellence Lead' },
                 { name: 'Shashidhar', role: 'Resource & Workforce Coordinator' },
                 { name: 'Shiva', role: 'Site Foreman' }
               ].map((op) => (
                 <div key={op.name} className="p-10 text-center hover:bg-stone-50 transition-colors">
                   <h5 className="text-[14px] font-bold text-stone-900 mb-3 tracking-widest uppercase">{op.name}</h5>
                   <p className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em]">{op.role}</p>
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
