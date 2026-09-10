import { Link } from 'react-router-dom';
import { Leaf, Award, Microscope, FlaskConical, Sparkles, HeartHandshake, MessageCircle, ArrowRight, ShieldCheck, Truck, Star } from 'lucide-react';
import { Reveal, SectionHeading, PageHero } from '../components/ui';
import { IMAGES, waLink, DEFAULT_WA_MSG } from '../data/site';

const PILLARS = [
  { icon: Leaf, stat: '100%', title: 'Natural Ingredients', desc: 'Shade-dried, farm-traceable herbs. No colours, no flavours, no fillers — ever.' },
  { icon: Award, stat: '5000+ yrs', title: 'Traditional Ayurveda', desc: 'Classical shastra formulations, respected exactly as the texts prescribe.' },
  { icon: Microscope, stat: '3rd-party', title: 'Scientific Processing', desc: 'Standardised extracts with measured potency — tradition verified by science.' },
  { icon: FlaskConical, stat: 'Every batch', title: 'Quality Tested', desc: 'NABL-partner labs screen heavy metals, microbes and adulteration.' },
  { icon: Sparkles, stat: 'Vaidya-led', title: 'Expert Formulation', desc: 'Doses, combinations and anupana designed with Ayurvedic experts.' },
  { icon: HeartHandshake, stat: '10,000+', title: 'Customer Satisfaction', desc: '4.9★ average, personal WhatsApp care, COD and fast resolutions.' },
];

const COMPARE = [
  ['Farm-traceable herbs', true, false],
  ['Batch lab-test reports', true, false],
  ['Classical shastra doses', true, false],
  ['No steroids or chemicals', true, false],
  ['Free WhatsApp expert guidance', true, false],
  ['Luxury gift-ready packaging', true, false],
];

export default function WhyChooseUs() {
  return (
    <main>
      <PageHero eyebrow="The SKDG Difference" title={<>Why 10,000 Families <span className="italic text-gold-gradient">Choose SKDG</span></>} sub="Six non-negotiable pillars behind every bottle we ship." image={IMAGES.spa} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <div className="lux-card relative bg-white border border-emerald-deep/10 rounded-[28px] p-8 overflow-hidden">
                <span className="absolute top-0 right-0 font-display text-[88px] leading-none text-emerald-deep/[0.06] select-none pr-4">0{i + 1}</span>
                <span className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-to-br from-emerald-deep to-emerald-dark text-gold-light shadow-lg"><p.icon size={24} /></span>
                <p className="text-gold-dark font-bold text-xs tracking-[0.25em] uppercase mt-5">{p.stat}</p>
                <h3 className="font-display text-2xl text-emerald-ink mt-1">{p.title}</h3>
                <p className="text-ink/60 text-[15px] mt-2 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-emerald-ink py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <SectionHeading dark eyebrow="Honest Comparison" title={<>SKDG vs <span className="italic text-gold-gradient">Ordinary Brands</span></>} />
          <Reveal>
            <div className="glass rounded-3xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-3 text-sm font-bold">
                <span className="p-3 sm:p-4 md:p-5 text-ivory/60">Promise</span>
                <span className="p-3 sm:p-4 md:p-5 text-center bg-emerald-deep text-gold-light">SKDG ✓</span>
                <span className="p-3 sm:p-4 md:p-5 text-center text-ivory/50">Others</span>
              </div>
              {COMPARE.map(([label, us, them]) => (
                <div key={label} className="grid grid-cols-3 text-[13px] sm:text-sm border-t border-white/10">
                  <span className="p-3 sm:p-4 md:p-5 text-ivory/80">{label}</span>
                  <span className="p-3 sm:p-4 md:p-5 text-center bg-emerald-deep/40 text-emerald-300 font-bold">{us ? '✓ Yes' : '—'}</span>
                  <span className="p-3 sm:p-4 md:p-5 text-center text-ivory/40">{them ? '✓' : '✕'}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-ivory/70 text-sm">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-gold" /> GMP Certified Facility</span>
            <span className="inline-flex items-center gap-2"><Star size={16} className="text-gold" /> 4.9★ from 10,000+ reviews</span>
            <span className="inline-flex items-center gap-2"><Truck size={16} className="text-gold" /> Pan-India 3–6 Day Shipping</span>
          </div>
          <Reveal className="text-center mt-10 flex flex-wrap justify-center gap-3">
            <a href={waLink(DEFAULT_WA_MSG)} target="_blank" rel="noreferrer" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-emerald-ink font-bold px-8 py-4 rounded-full"><MessageCircle size={18} /> Experience the Difference</a>
            <Link to="/testimonials" className="inline-flex items-center gap-2 border border-ivory/30 text-ivory font-semibold px-8 py-4 rounded-full hover:bg-white/10">Read Reviews <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
