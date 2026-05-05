import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    const text = `Hello OM Infra Projects,\n\nMy name is ${name}${email ? ` (${email})` : ''}.\n\nI have a project inquiry:\n${message}`;
    const whatsappUrl = `https://wa.me/917661056224?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 border border-stone-200 bg-white shadow-2xl">
          {/* Info Section */}
          <div className="p-16 lg:p-24 bg-[#F2EFE9] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 font-semibold underline underline-offset-8 decoration-gold-400/30">Connect With Us</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mb-8 italic leading-tight">
                Inquire <span className="text-gold-400 not-italic font-semibold">Today</span>.
              </h2>
              <div className="space-y-12 mt-12">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 font-semibold tracking-[0.2em]">Location</div>
                  <div className="text-sm font-bold text-stone-900 tracking-widest uppercase">Anakapalli, Vishakapatnam</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 font-semibold tracking-[0.2em]">Contact</div>
                  <div className="text-sm font-bold text-stone-900 tracking-widest uppercase mb-1 underline underline-offset-4 decoration-gold-400">ominfraprojects0@gmail.com</div>
                  <div className="text-sm font-bold text-stone-900 tracking-widest uppercase mt-4 leading-relaxed">+91 7661056224 <br/> +91 7816099379</div>
                </div>
              </div>
            </div>

            <div className="pt-16 mt-16 border-t border-stone-300 flex justify-between items-end">
              <div className="text-4xl font-serif text-gold-400 italic font-light leading-none">Engineering<br/>Integrity.</div>
            </div>
          </div>

          {/* Form */}
          <div className="p-16 lg:p-24 flex flex-col justify-center">
             <form className="space-y-12" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 font-semibold">FullName *</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full border-b-2 border-stone-200 py-3 outline-none focus:border-gold-400 transition-colors uppercase text-[13px] font-bold text-stone-900 tracking-widest placeholder:text-stone-300" placeholder="YOUR NAME" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 font-semibold">EmailAddress</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-b-2 border-stone-200 py-3 outline-none focus:border-gold-400 transition-colors uppercase text-[13px] font-bold text-stone-900 tracking-widest placeholder:text-stone-300" placeholder="YOUR@EMAIL.COM" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 font-semibold">ProjectInquiry *</label>
                  <textarea rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border-b-2 border-stone-200 py-3 outline-none focus:border-gold-400 transition-colors uppercase text-[13px] font-bold text-stone-900 tracking-widest placeholder:text-stone-300" placeholder="PROJECT DETAILS..."></textarea>
                </div>
                <button type="submit" className="w-full py-6 mt-8 bg-stone-900 text-white text-[13px] font-bold uppercase tracking-[0.4em] hover:bg-gold-400 transition-all shadow-xl">Send via WhatsApp →</button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
