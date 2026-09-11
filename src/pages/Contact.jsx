import { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/icons';
import { Reveal, SectionHeading, PageHero } from '../components/ui';
import { IMAGES, PHONE, INSTAGRAM, INSTAGRAM_URL, FACEBOOK_URL, EMAIL, waLink } from '../data/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello SKDG Ayurvedic,%0A%0A*New Enquiry from Website*%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919592244442?text=${msg}`, '_blank');
  };

  const input = 'w-full bg-ivory border border-emerald-deep/15 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all placeholder:text-ink/35';

  return (
    <main>
      <PageHero eyebrow="Namaste" title={<>Let's Begin Your <span className="italic text-gold-gradient">Conversation</span></>} sub="Free expert guidance, bulk enquiries & love letters — we reply fast." image={IMAGES.spaCandle} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-2">
          <div className="bg-emerald-ink rounded-[28px] p-8 md:p-10 h-full relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, #C8A44D66 0, transparent 45%)' }} />
            <div className="relative">
              <h2 className="font-display text-3xl text-ivory">Reach Us <span className="italic text-gold-gradient">Directly</span></h2>
              <div className="mt-7 space-y-5">
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex gap-4 items-start group">
                  <span className="w-12 h-12 grid place-items-center rounded-2xl bg-gold text-emerald-ink shrink-0"><Phone size={20} /></span>
                  <span><b className="text-ivory block">Phone / WhatsApp</b><span className="text-gold-light group-hover:underline">{PHONE}</span></span>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex gap-4 items-start group">
                  <span className="w-12 h-12 grid place-items-center rounded-2xl bg-white/10 border border-white/15 text-gold-light shrink-0"><InstagramIcon size={20} /></span>
                  <span><b className="text-ivory block">Instagram</b><span className="text-gold-light group-hover:underline">{INSTAGRAM}</span></span>
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="flex gap-4 items-start group">
                  <span className="w-12 h-12 grid place-items-center rounded-2xl bg-white/10 border border-white/15 text-gold-light shrink-0"><FacebookIcon size={20} /></span>
                  <span><b className="text-ivory block">Facebook</b><span className="text-gold-light group-hover:underline">Follow us on Facebook</span></span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex gap-4 items-start group">
                  <span className="w-12 h-12 grid place-items-center rounded-2xl bg-white/10 border border-white/15 text-gold-light shrink-0"><Mail size={20} /></span>
                  <span><b className="text-ivory block">Email</b><span className="text-gold-light group-hover:underline break-all">{EMAIL}</span></span>
                </a>
                <div className="flex gap-4 items-start">
                  <span className="w-12 h-12 grid place-items-center rounded-2xl bg-white/10 border border-white/15 text-gold-light shrink-0"><MapPin size={20} /></span>
                  <span><b className="text-ivory block">Location</b><span className="text-ivory/65 text-sm">Punjab, India — shipping pan-India</span></span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-12 h-12 grid place-items-center rounded-2xl bg-white/10 border border-white/15 text-gold-light shrink-0"><Clock size={20} /></span>
                  <span><b className="text-ivory block">Business Hours</b><span className="text-ivory/65 text-sm">Mon–Sat, 9 AM – 8 PM IST</span></span>
                </div>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden border border-white/15 h-44 grid place-items-center bg-white/5">
                <div className="text-center"><MapPin size={26} className="mx-auto text-gold" /><p className="text-ivory/70 text-sm mt-2">Find us on Google Maps<br /><span className="text-xs text-ivory/45">SKDG Ayurvedic · Punjab, India</span></p></div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={submit} className="bg-white border border-emerald-deep/10 rounded-[28px] p-8 md:p-10 shadow-xl h-full">
            <SectionHeading center={false} eyebrow="Send a Message" title={<>We Reply Within <span className="italic text-gold-gradient">Minutes</span></>} sub="Submitting opens WhatsApp with your message pre-filled — no spam, ever." />
            <div className="grid sm:grid-cols-2 gap-4 -mt-4">
              <div><label className="text-xs font-bold tracking-widest uppercase text-emerald-deep">Your Name *</label><input required value={form.name} onChange={set('name')} placeholder="e.g. Priya Sharma" className={input + ' mt-2'} /></div>
              <div><label className="text-xs font-bold tracking-widest uppercase text-emerald-deep">Phone *</label><input required value={form.phone} onChange={set('phone')} placeholder="+91 ..." className={input + ' mt-2'} /></div>
            </div>
            <div className="mt-4"><label className="text-xs font-bold tracking-widest uppercase text-emerald-deep">Email</label><input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" className={input + ' mt-2'} /></div>
            <div className="mt-4"><label className="text-xs font-bold tracking-widest uppercase text-emerald-deep">Message *</label><textarea required rows={5} value={form.message} onChange={set('message')} placeholder="Tell us your concern — sleep, stress, hair, joints, immunity..." className={input + ' mt-2 resize-none'} /></div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button type="submit" className="btn-shine flex-1 inline-flex justify-center items-center gap-2 bg-gradient-to-r from-emerald-deep to-emerald-dark text-ivory font-bold px-7 py-4 rounded-full shadow-lg hover:-translate-y-0.5 transition-all"><Send size={17} /> Send via WhatsApp</button>
              <a href={waLink('Hello SKDG Ayurvedic, I would like to know more about your Ayurvedic products.')} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 border-2 border-gold text-gold-dark font-bold px-7 py-4 rounded-full hover:bg-gold hover:text-emerald-ink transition-all"><MessageCircle size={17} /> Quick Chat</a>
            </div>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
