import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const InstagramIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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
    { name: 'Overview', href: '#overview' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Let Overview modal handle its own native hash change
    if (href === '#overview') {
      setIsMenuOpen(false);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      
      const scrollAction = () => {
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
      };

      if (isMenuOpen) {
        setIsMenuOpen(false);
        // Wait for menu exit animation (0.25s) to complete to avoid mobile lag
        setTimeout(scrollAction, 260);
      } else {
        scrollAction();
      }
    }
  };

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
              <a
                href="https://www.instagram.com/ominfraprojects_?igsh=MXFkNDAzcDByc2Zqbg=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-stone-400 hover:text-gold-400 transition-colors group"
                aria-label="Follow us on Instagram"
              >
                <span className="text-gold-400 group-hover:scale-110 transition-transform"><InstagramIcon size={11} /></span>
                <span>@ominfraprojects_</span>
              </a>
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
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-400 hover:text-gold-400 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
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
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 py-4 bg-gold-400 text-black font-bold uppercase tracking-widest text-sm text-center hover:bg-gold-500 transition-all active:scale-[0.98]"
                onClick={(e) => handleNavClick(e, '#contact')}
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
                <a
                  href="https://www.instagram.com/ominfraprojects_?igsh=MXFkNDAzcDByc2Zqbg=="
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[10px] text-stone-500 flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                  <span className="text-gold-400"><InstagramIcon size={10} /></span> @ominfraprojects_
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
