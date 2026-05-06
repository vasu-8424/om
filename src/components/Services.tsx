import { motion } from 'motion/react';
import { Building2, Layers, Zap, Briefcase, HardHat, Compass } from 'lucide-react';

const services = [
  { title: 'Civil Construction', description: 'Residential, commercial, and industrial projects with emphasis on structural quality.', icon: Building2, features: ['Foundation Integrity', 'Structural Quality', 'Workmanship'] },
  { title: 'Design & Planning', description: 'Efficient layouts, detailed drawings, and cost-effective plans tailored to project needs.', icon: Compass, features: ['Efficient Layouts', 'Architectural Drawings', 'Cost Optimization'] },
  { title: 'Interior Works', description: 'Complete interior solutions including space planning, finishes, and functional design.', icon: Layers, features: ['Space Planning', 'Aesthetic Finishes', 'Functional Design'] },
  { title: 'MEP Services', description: 'Electrical, plumbing, and HVAC systems ensuring safety and operational efficiency.', icon: Zap, features: ['Electrical Systems', 'Plumbing & HVAC', 'Civil Infrastructure'] },
  { title: 'Infrastructure Works', description: 'Roads, drainage systems, and overall site infrastructure development.', icon: HardHat, features: ['Road Development', 'Drainage Systems', 'Site Infrastructure'] },
  { title: 'Project Management', description: 'End-to-end handling: estimation, planning, supervision, and quality control.', icon: Briefcase, features: ['Cost Estimation', 'Quality Control', 'Timeline Discipline'] }
];

const Services = () => {
  return (
    <section id="services" className="py-14 sm:py-16 bg-stone-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-3 block">Our Expertise</span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight italic leading-tight">
            Comprehensive Construction <span className="text-gold-400 not-italic font-semibold">Solutions</span>.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="p-6 flex flex-col bg-white/[0.02] border border-white/10 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-gold-400 tracking-widest">{String(index + 1).padStart(2, '0')}</span>
                  <Icon className="w-5 h-5 text-stone-600 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg font-normal text-stone-100 mb-2 italic leading-tight">{service.title}</h3>
                <p className="text-stone-500 text-[11px] font-light leading-relaxed mb-4 flex-1">{service.description}</p>
                <ul className="space-y-1.5 pt-4 border-t border-white/10">
                  {service.features.map(feat => (
                    <li key={feat} className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-400">
                      <span className="w-1 h-1 bg-gold-400 flex-shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
