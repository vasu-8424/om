import { motion } from 'motion/react';

const CompanyOverview = () => {
  return (
    <section id="about" className="bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">

        {/* Top label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight italic leading-tight max-w-xl">
              About <span className="text-gold-400 not-italic font-semibold">OM Infra Projects</span>.
            </h2>
            <div className="text-stone-400 text-sm leading-relaxed max-w-xl font-light space-y-4">
              <p>
                A dedicated construction and infrastructure firm committed to delivering high-quality
                residential and government projects with precision and reliability. With proven experience
                executing <span className="text-stone-200 font-semibold">49+ homes</span> and infrastructure
                works — including CC roads and MES-standard projects — we build structures that stand
                strong for generations through <span className="text-stone-200 font-semibold">timely delivery</span>,{' '}
                <span className="text-stone-200 font-semibold">transparent execution</span>, and{' '}
                <span className="text-stone-200 font-semibold">engineering excellence</span>.
              </p>
              <p>
                Our approach combines technical expertise, durable construction practices, and transparent project execution to ensure every project meets the highest standards of quality and safety. We believe in timely delivery, professional workmanship, and building long-term trust with our clients through consistency and commitment.
              </p>
              <p>
                From residential developments to government infrastructure projects, OM Infra Projects continues to contribute towards building strong, sustainable, and dependable infrastructure for the future.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyOverview;
