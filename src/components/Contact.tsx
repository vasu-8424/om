import React, { useState } from 'react';
import { motion } from 'motion/react';

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    const text = `Hello OM Infra Projects,\n\nMy name is ${name}${email ? ` (${email})` : ''}.\n\nI have a project inquiry:\n${message}`;
    window.open(`https://wa.me/917661056224?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-16 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/10 bg-white/[0.02]">

          {/* Info Panel */}
          <div className="p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 mb-4 block">Connect With Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-stone-100 tracking-tight mb-6 italic leading-tight">
                Inquire <span className="text-gold-400 not-italic font-semibold">Today</span>.
              </h2>
              <div className="space-y-6 mt-8">
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-stone-500 mb-1">Location</div>
                  <div className="text-sm font-bold text-stone-100 tracking-widest uppercase">Anakapalli, Vishakapatnam</div>
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-stone-500 mb-1">Email</div>
                  <div className="text-sm font-bold text-stone-100 tracking-wide">ominfraprojects0@gmail.com</div>
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-stone-500 mb-1">Phone</div>
                  <div className="text-sm font-bold text-stone-100 tracking-widest">+91 7661056224 · +91 7816099379</div>
                </div>
              </div>
            </div>
            {/* Instagram Follow Block */}
            <div className="pt-8 mt-8 border-t border-white/10">
              <div className="text-[9px] font-bold uppercase tracking-widest text-stone-500 mb-3">Follow Us</div>
              <a
                href="https://www.instagram.com/ominfraprojects_?igsh=MXFkNDAzcDByc2Zqbg=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 group"
                aria-label="Follow OM Infra Projects on Instagram"
              >
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-sm border border-white/15 bg-white/5 text-stone-400 group-hover:bg-gradient-to-br group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#dc2743] group-hover:border-transparent group-hover:text-white transition-all duration-300"
                >
                  <InstagramIcon size={17} />
                </span>
                <div>
                  <div className="text-[11px] font-bold text-stone-100 tracking-wide group-hover:text-gold-400 transition-colors">@ominfraprojects_</div>
                  <div className="text-[9px] text-stone-600 uppercase tracking-widest">Instagram</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 lg:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500 mb-2">Full Name *</label>
                <input
                  type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-white/20 bg-transparent py-2 outline-none focus:border-gold-400 transition-colors text-[13px] font-medium text-stone-100 tracking-wide placeholder:text-stone-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500 mb-2">Email</label>
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-white/20 bg-transparent py-2 outline-none focus:border-gold-400 transition-colors text-[13px] font-medium text-stone-100 tracking-wide placeholder:text-stone-700"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500 mb-2">Project Inquiry *</label>
                <textarea
                  rows={4} required value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-b border-white/20 bg-transparent py-2 outline-none focus:border-gold-400 transition-colors text-[13px] font-medium text-stone-100 tracking-wide placeholder:text-stone-700 resize-none"
                  placeholder="Describe your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold-400 text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-500 transition-all"
              >
                Send via WhatsApp →
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
