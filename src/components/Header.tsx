import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gold-200/30' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Bar - Only on desktop and if not scrolled */}
        {!isScrolled && (
          <div className="hidden lg:flex justify-between items-center pb-4 mb-4 border-b border-white/20 text-xs text-stone-600 font-medium tracking-widest uppercase">
            <div className="flex gap-8">
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-gold-400" /> +91 [Available on Request]
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-gold-400" /> info@ominfraprojects.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold-400" /> Anakapalli, India
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <a href="#" className="flex items-baseline space-x-2 group">
            <span className="text-2xl font-semibold tracking-tighter font-serif uppercase text-stone-900 group-hover:text-gold-400 transition-colors">
              OM <span className="text-gold-400">Infra</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-[0.2em] border-l border-stone-300 pl-2 text-stone-500 hidden sm:inline">
              Precision & Integrity
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${isScrolled ? 'text-stone-600 hover:text-gold-400' : 'text-stone-800 hover:text-gold-400'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-stone-300 mx-2"></div>
            <div className="text-[11px] text-right leading-tight hidden lg:block">
              <div className="font-semibold text-stone-900">Anakapalli, AP</div>
              <div className="text-stone-500 lowercase">projects@ominfra.com</div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-stone-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-100 shadow-2xl p-8"
        >
          <div className="flex flex-col gap-6 items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-stone-800 uppercase tracking-widest hover:text-gold-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="w-full py-4 gold-gradient text-white rounded-sm font-bold uppercase tracking-widest shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
