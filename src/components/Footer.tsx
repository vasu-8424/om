const Footer = () => {
  return (
    <footer className="bg-white text-stone-900 pt-20 pb-10 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <img src="/logo.png" alt="OM Infra Projects Logo" className="h-20 w-auto max-w-[200px] object-contain mix-blend-multiply" />
            </div>
            <p className="text-stone-500 text-[10px] uppercase font-semibold leading-loose tracking-[0.1em] mb-10 italic">
              "At OM Infra Projects, we provide end-to-end construction solutions with a focus on quality, precision, and timely delivery."
            </p>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-8 font-semibold">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-[11px] font-semibold tracking-[0.1em] uppercase text-stone-500 hover:text-gold-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-8 font-semibold">Specializations</h4>
            <ul className="space-y-4">
              {['Civil Construction', 'Structural Engineering', 'Interior Works', 'Infrastructure MEP', 'Project Management'].map(s => (
                <li key={s} className="text-[11px] font-semibold tracking-[0.1em] uppercase text-stone-500">{s}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-8 font-semibold">Contact</h4>
            <div className="p-6 bg-beige-50 border border-stone-200">
              <div className="text-[11px] font-bold mb-1 tracking-widest text-stone-900">ANAKAPALLI, VISHAKAPATNAM</div>
              <p className="text-[10px] font-medium text-stone-500 uppercase tracking-widest leading-relaxed">
                India
              </p>
              <div className="mt-6 flex flex-col gap-3">
                 <span className="text-[11px] font-bold text-stone-900 uppercase tracking-widest">ominfraprojects0@gmail.com</span>
                 <span className="text-[11px] font-bold text-stone-900 uppercase tracking-widest">+91 7661056224 <br/> +91 7816099379</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] font-semibold">
            © 2026 OM Infra Projects. Precision & Integrity.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold text-stone-400 uppercase tracking-widest hover:text-gold-400 transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold text-stone-400 uppercase tracking-widest hover:text-gold-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
