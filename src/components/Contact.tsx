import React, { useState } from 'react';
import { motion } from 'motion/react';

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
            <div className="pt-8 mt-8 border-t border-white/10">
              <div className="font-serif text-2xl text-gold-400 italic font-light leading-tight">Engineering<br />Integrity.</div>
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
