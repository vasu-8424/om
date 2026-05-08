const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState('', document.title, window.location.pathname + window.location.search);
      } else {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 90; // Adjust for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          window.history.pushState('', document.title, window.location.pathname + href);
        }
      }
    }
  };

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
                { label: 'Our Team', href: '#team' },
                { label: 'Projects', href: '#portfolio' },
                { label: 'Contact',  href: '#contact' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-[10px] font-medium tracking-widest uppercase text-stone-500 hover:text-gold-400 transition-colors">
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
                    href="#team"
                    onClick={(e) => handleNavClick(e, '#team')}
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
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold text-stone-600 uppercase tracking-[0.2em]">
            © 2025 OM Infra Projects. Precision & Integrity.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/ominfraprojects_?igsh=MXFkNDAzcDByc2Zqbg=="
              target="_blank"
              rel="noreferrer"
              aria-label="Follow OM Infra Projects on Instagram"
              className="flex items-center justify-center w-7 h-7 rounded-sm border border-white/10 bg-white/5 text-stone-500 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] hover:border-transparent hover:text-white transition-all duration-300"
            >
              <InstagramIcon size={13} />
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-[9px] font-bold text-stone-600 uppercase tracking-widest hover:text-gold-400 transition-colors">Privacy</a>
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-[9px] font-bold text-stone-600 uppercase tracking-widest hover:text-gold-400 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
