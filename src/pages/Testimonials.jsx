import { Link } from 'react-router-dom';
import { MessageCircle, BadgeCheck } from 'lucide-react';
import { Reveal, SectionHeading, Stars, PageHero } from '../components/ui';
import { IMAGES, waLink } from '../data/site';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  return (
    <main>
      <PageHero eyebrow="Verified Love" title={<>Stories From <span className="italic text-gold-gradient">Real Families</span></>} sub="4.9★ average across thousands of WhatsApp & Instagram reviews." image={IMAGES.spaMassage} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <figure className="lux-card bg-white border border-emerald-deep/10 rounded-[26px] p-7 h-full flex flex-col">
                <Stars value={t.rating} />
                <blockquote className="text-ink/70 text-[15px] leading-relaxed mt-3 flex-1">“{t.text}”</blockquote>
                <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-emerald-deep/10">
                  <img src={t.image} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full object-cover border-2 border-gold" />
                  <div>
                    <p className="font-bold text-emerald-ink text-[15px] inline-flex items-center gap-1.5">{t.name} <BadgeCheck size={14} className="text-emerald-deep" /></p>
                    <p className="text-xs text-ink/50 tracking-widest uppercase">{t.city} · Verified Buyer</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <SectionHeading eyebrow="Wall of Love" title={<>Your Story Could Be <span className="italic text-gold-gradient">Next</span></>} sub="Tried SKDG? Message your review and get featured — plus 10% off your next order." />
        <Reveal className="text-center -mt-4 flex flex-wrap justify-center gap-3">
          <a href={waLink('Hello SKDG Ayurvedic, I want to share my review of your products!')} target="_blank" rel="noreferrer" className="btn-shine inline-flex items-center gap-2 bg-emerald-deep text-ivory font-bold px-8 py-3.5 rounded-full hover:bg-emerald-dark"><MessageCircle size={17} /> Share Your Review</a>
          <Link to="/products" className="inline-flex items-center gap-2 border-2 border-emerald-deep text-emerald-deep font-bold px-8 py-3.5 rounded-full hover:bg-emerald-deep hover:text-ivory">Shop Bestsellers</Link>
        </Reveal>
      </section>
    </main>
  );
}
