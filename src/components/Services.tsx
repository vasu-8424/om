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
    description: 'Execution of residential, commercial, and industrial projects with a strong focus on structural quality, foundation integrity, and workmanship.',
    icon: Building2,
    features: ['Foundation Integrity', 'Structural Quality', 'Workmanship Excellence']
  },
  {
    title: 'Design & Planning',
    description: 'Efficient layouts, architectural drawings, and cost-effective planning tailored specifically to meet your project goals and constraints.',
    icon: Compass,
    features: ['Efficient Layouts', 'Architectural Drawings', 'Cost Optimization']
  },
  {
    title: 'Interior Works',
    description: 'Complete interior solutions including space planning, aesthetic finishes, and functional design that transforms spaces into experiences.',
    icon: Layers,
    features: ['Space Planning', 'Aesthetic Finishes', 'Functional Design']
  },
  {
    title: 'MEP & Infrastructure',
    description: 'Electrical, plumbing, and HVAC systems along with roads, drainage, and large-scale infrastructure development projects.',
    icon: Zap,
    features: ['Electrical Systems', 'Plumbing & HVAC', 'Civil Infrastructure']
  },
  {
    title: 'Project Management',
    description: 'End-to-end handling including estimation, supervision, quality control, and strict timeline management for flawless delivery.',
    icon: Briefcase,
    features: ['Cost Estimation', 'Quality Control', 'Timeline Discipline']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400">Our Expertise</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-normal text-stone-900 tracking-tight italic"
          >
            Clustered Construction <span className="text-gold-400 not-italic font-semibold">Solutions</span>.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-0 border border-stone-200">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 flex flex-col justify-between hover:bg-stone-50 transition-colors ${index !== services.length - 1 ? 'border-r border-stone-200' : ''}`}
            >
              <div>
                <div className="text-[11px] font-bold text-gold-400 mb-6 tracking-widest">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="font-serif text-xl font-normal text-stone-900 mb-6 tracking-tight leading-tight italic">
                  {service.title}
                </h3>
              </div>
              
              <div>
                <p className="text-stone-500 text-[10px] uppercase font-semibold leading-relaxed tracking-wider mb-6">
                  {service.description}
                </p>
                <div className="h-[1px] w-8 bg-gold-400"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
