import { motion } from 'motion/react';
import { User, ShieldCheck, Cpu, HardHat, TrendingUp } from 'lucide-react';

const LeadershipSection = () => {
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
    <section id="about" className="py-24 bg-[#F2EFE9] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          {/* Leadership & Identity */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 font-semibold underline underline-offset-8 decoration-gold-400/30">Why Choose Us</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-stone-900 tracking-tight mb-8 italic">
                Execution meets <span className="text-gold-400 not-italic font-semibold">Mastery</span>.
              </h2>
              <ul className="space-y-6 mb-12">
                {[
                  'Technical Mastery in Concrete & Steel',
                  'Local Expertise & Government Projects',
                  'Guaranteed Timely Delivery',
                  'Strict Adherence to Safety Standards'
                ].map(item => (
                  <li key={item} className="flex items-center space-x-4 text-xs font-semibold tracking-widest uppercase text-stone-600">
                    <span className="w-1 h-1 bg-gold-400 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-stone-300 hidden lg:block">
              <div className="text-4xl font-serif text-gold-400 italic font-light leading-none">Where Expertise<br/>Meets Execution.</div>
            </div>
          </div>

          {/* Technical Excellence */}
          <div className="bg-white p-10 border border-stone-200 flex flex-col justify-between shadow-sm">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-semibold mb-4">Executive Leadership</span>
              </div>
              
              <div className="grid gap-12">
                {leaders.concat(engineering.map(e => ({ name: e.name, role: e.creds, description: e.focus, icon: e.icon }))).slice(0, 3).map((leader, i) => (
                  <motion.div 
                    key={leader.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="text-sm font-bold text-stone-900 tracking-[0.1em] uppercase group-hover:text-gold-400 transition-colors">{leader.name}</div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-semibold mt-1">{leader.role}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-stone-200 mt-12 flex justify-between items-end">
               <p className="text-[10px] text-stone-400 uppercase leading-loose tracking-[0.1em] max-w-xs">
                 Quality in every detail. Commitment in every step. Excellence in every project. © 2026 OM Infra Projects.
               </p>
               <a href="#contact" className="text-[10px] uppercase tracking-widest font-bold border-b border-gold-400 pb-1 text-stone-900 group">Inquire Now →</a>
            </div>
          </div>
        </div>

        {/* Operations Backbone */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 border border-stone-300 bg-stone-50/50 uppercase tracking-widest">
           <div className="p-8 border-r border-stone-300 flex flex-col justify-center">
             <h4 className="font-serif text-xl italic text-stone-900 mb-1 leading-none">Backbone.</h4>
             <p className="text-[9px] font-bold text-gold-400 uppercase tracking-[0.3em] font-semibold">Operational Excellence</p>
           </div>
           {[
             { name: 'Bhagavan', role: 'Operational Excellence Lead' },
             { name: 'Shashidhar', role: 'Resource & Workforce Coordinator' },
             { name: 'Shiva', role: 'Site Foreman' }
           ].map((op, i) => (
             <div key={op.name} className={`p-8 border-stone-300 hover:bg-white transition-colors ${i < 2 ? 'border-r' : ''}`}>
               <h5 className="text-[11px] font-bold text-stone-900 mb-2 tracking-widest">{op.name}</h5>
               <p className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em] font-semibold">{op.role}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
