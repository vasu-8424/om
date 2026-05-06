const Footer = () => {
  return (
    <footer className="bg-black text-stone-100 pt-10 sm:pt-12 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1 md:col-span-2">
            <img src="/logo.png" alt="OM Infra Projects" className="h-20 w-auto max-w-[220px] object-contain logo-on-dark mb-4" />
            <p className="text-stone-500 text-[10px] uppercase font-medium leading-loose tracking-[0.08em] italic">
              "End-to-end construction solutions with a focus on quality, precision, and timely delivery."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home',     href: '#' },
                { label: 'Workflow', href: '#process' },
                { label: 'Expertise',href: '#services' },
                { label: 'Our Team', href: '#about' },
                { label: 'Projects', href: '#portfolio' },
                { label: 'Contact',  href: '#contact' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-[10px] font-medium tracking-widest uppercase text-stone-500 hover:text-gold-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Experts */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-5">Our Experts</h4>
            <ul className="space-y-2.5">
              {[
                'Varun Sinisetty',
                'Sreenivasa Rao',
                'Chakrish CH',
                'Reddi Eswar Sai',
                'Vijay Sri Padmakar',
              ].map(name => (
                <li key={name}>
                  <a
                    href="#about"
                    className="text-[10px] font-medium tracking-widest uppercase text-stone-500 hover:text-gold-400 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-5">Specializations</h4>
            <ul className="space-y-2.5">
              {['Civil Construction', 'Structural Engineering', 'Interior Works', 'Infrastructure MEP', 'Project Management'].map(s => (
                <li key={s} className="text-[10px] font-medium tracking-widest uppercase text-stone-500">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-5">Contact</h4>
            <div className="p-4 bg-white/5 border border-white/10 space-y-3">
              <div>
                <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-0.5">Address</div>
                <div className="text-[10px] font-bold text-stone-200 uppercase tracking-wide">Anakapalli, Vishakapatnam</div>
              </div>
              <div>
                <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-0.5">Email</div>
                <div className="text-[10px] font-bold text-stone-200">ominfraprojects0@gmail.com</div>
              </div>
              <div>
                <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-0.5">Phone</div>
                <div className="text-[10px] font-bold text-stone-200">+91 7661056224 · +91 7816099379</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[9px] font-bold text-stone-600 uppercase tracking-[0.2em]">
            © 2025 OM Infra Projects. Precision & Integrity.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[9px] font-bold text-stone-600 uppercase tracking-widest hover:text-gold-400 transition-colors">Privacy</a>
            <a href="#" className="text-[9px] font-bold text-stone-600 uppercase tracking-widest hover:text-gold-400 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
