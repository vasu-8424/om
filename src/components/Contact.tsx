import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 border border-stone-200 bg-white">
          {/* Info Section */}
          <div className="p-12 lg:p-20 bg-[#F2EFE9] flex flex-col justify-between border-r border-stone-200">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 font-semibold underline underline-offset-8 decoration-gold-400/30">Connect With Us</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mb-8 italic">
                Inquire <span className="text-gold-400 not-italic font-semibold">Today</span>.
              </h2>
              <div className="space-y-8 mt-12">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 font-semibold tracking-[0.2em]">Location</div>
                  <div className="text-sm font-bold text-stone-900 tracking-widest uppercase">Anakapalli, Andhra Pradesh</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 font-semibold tracking-[0.2em]">Email</div>
                  <div className="text-sm font-bold text-stone-900 tracking-widest uppercase underline underline-offset-4 decoration-gold-400">projects@ominfra.com</div>
                </div>
              </div>
            </div>

            <div className="pt-12 mt-12 border-t border-stone-300 flex justify-between items-end">
              <div className="text-4xl font-serif text-gold-400 italic font-light leading-none">Engineering<br/>Integrity.</div>
            </div>
          </div>

          {/* Form */}
          <div className="p-12 lg:p-20">
             <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-3 font-semibold">FullName</label>
                  <input type="text" className="w-full border-b border-stone-200 py-2 outline-none focus:border-gold-400 transition-colors uppercase text-[11px] font-bold text-stone-900 tracking-widest placeholder:text-stone-300" placeholder="YOUR NAME" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-3 font-semibold">EmailAddress</label>
                  <input type="email" className="w-full border-b border-stone-200 py-2 outline-none focus:border-gold-400 transition-colors uppercase text-[11px] font-bold text-stone-900 tracking-widest placeholder:text-stone-300" placeholder="YOUR@EMAIL.COM" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-3 font-semibold">ProjectInquiry</label>
                  <textarea rows={4} className="w-full border-b border-stone-200 py-2 outline-none focus:border-gold-400 transition-colors uppercase text-[11px] font-bold text-stone-900 tracking-widest placeholder:text-stone-300" placeholder="PROJECT DETAILS..."></textarea>
                </div>
                <button className="w-full py-5 bg-stone-900 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-400 transition-all">Submit Case →</button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
