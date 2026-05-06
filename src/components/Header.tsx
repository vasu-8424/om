import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/96 backdrop-blur-md py-1.5 shadow-lg border-b border-white/10' : 'bg-black py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Top info bar — large desktop only */}
        {!isScrolled && (
          <div className="hidden xl:flex justify-between items-center pb-2 mb-2 border-b border-white/10 text-[9px] text-stone-500 font-medium tracking-widest uppercase">
            <div className="flex gap-6">
              <span className="flex items-center gap-1.5"><Phone size={10} className="text-gold-400" /> +91 7661056224 · +91 7816099379</span>
              <span className="flex items-center gap-1.5"><Mail size={10} className="text-gold-400" /> ominfraprojects0@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><MapPin size={10} className="text-gold-400" /> Anakapalli, Vishakapatnam</span>
              <a href="https://www.instagram.com/ominfraprojects_?igsh=MXFkNDAzcDByc2Zqbg==" target="_blank" rel="noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors">Instagram</a>
            </div>
          </div>
        )}

        {/* Main nav row */}
        <div className="flex justify-between items-center">

          {/* Logo — bigger on all screen sizes */}
          <a href="#" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="OM Infra Projects"
              className="h-20 md:h-24 w-auto object-contain logo-on-dark"
              style={{ maxWidth: '240px' }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-400 hover:text-gold-400 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gold-400 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gold-500 transition-all whitespace-nowrap"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 -mr-1 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black border-b border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-3 px-4 text-sm font-bold text-stone-200 uppercase tracking-widest hover:text-gold-400 hover:bg-white/5 transition-colors rounded-sm border-b border-white/5 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 py-4 bg-gold-400 text-black font-bold uppercase tracking-widest text-sm text-center hover:bg-gold-500 transition-all active:scale-[0.98]"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </a>
              {/* Mobile contact info */}
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                <p className="text-[10px] text-stone-500 flex items-center gap-2">
                  <Phone size={10} className="text-gold-400" /> +91 7661056224 · +91 7816099379
                </p>
                <p className="text-[10px] text-stone-500 flex items-center gap-2">
                  <Mail size={10} className="text-gold-400" /> ominfraprojects0@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
