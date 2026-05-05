import { motion } from 'motion/react';
import { 
  Building2, 
  PenTool, 
  Layers, 
  Zap, 
  Briefcase,
  Droplets,
  HardHat,
  Compass
} from 'lucide-react';

const services = [
  {
    title: 'Civil Construction',
    description: 'Execution of residential, commercial, and industrial projects with strong emphasis on structural quality and durability.',
    icon: Building2,
    features: ['Foundation Integrity', 'Structural Quality', 'Workmanship Excellence']
  },
  {
    title: 'Design & Planning',
    description: 'We develop efficient layouts, detailed drawings, and cost-effective plans tailored to project needs.',
    icon: Compass,
    features: ['Efficient Layouts', 'Architectural Drawings', 'Cost Optimization']
  },
  {
    title: 'Interior Works',
    description: 'Complete interior solutions including space planning, finishes, and functional design.',
    icon: Layers,
    features: ['Space Planning', 'Aesthetic Finishes', 'Functional Design']
  },
  {
    title: 'MEP Services',
    description: 'Installation and management of electrical, plumbing, and HVAC systems ensuring safety and efficiency.',
    icon: Zap,
    features: ['Electrical Systems', 'Plumbing & HVAC', 'Civil Infrastructure']
  },
  {
    title: 'Infrastructure Works',
    description: 'Development of roads, drainage systems, and overall site infrastructure.',
    icon: HardHat,
    features: ['Road Development', 'Drainage Systems', 'Site Infrastructure']
  },
  {
    title: 'Project Management',
    description: 'End-to-end project handling including estimation, planning, supervision, and quality control.',
    icon: Briefcase,
    features: ['Cost Estimation', 'Quality Control', 'Timeline Discipline']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gold-400">Our Expertise</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-normal text-stone-900 tracking-tight italic leading-tight"
          >
            Comprehensive Construction <span className="text-gold-400 not-italic font-semibold">Solutions</span>.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 lg:p-16 flex flex-col justify-between bg-stone-50/50 hover:bg-stone-50 border border-stone-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="text-[12px] font-bold text-gold-400 tracking-widest">{String(index + 1).padStart(2, '0')}</div>
                  <Icon className="w-8 h-8 text-stone-300 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-normal text-stone-900 mb-4 tracking-tight leading-tight italic">
                  {service.title}
                </h3>
              </div>
              
              <div>
                <p className="text-stone-500 text-[11px] lg:text-[12px] font-light leading-relaxed tracking-wide mb-8 min-h-[60px]">
                  {service.description}
                </p>
                
                <ul className="space-y-4 pt-8 border-t border-stone-200">
                  {service.features.map(feat => (
                    <li key={feat} className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-stone-900">
                      <span className="w-1.5 h-1.5 bg-gold-400"></span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Services;
