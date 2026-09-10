import { Link } from 'react-router-dom';
import { MessageCircle, Heart, Eye, Sprout, BadgeCheck, FlaskConical, ArrowRight } from 'lucide-react';
import { Reveal, SectionHeading, PageHero } from '../components/ui';
import { IMAGES, waLink, DEFAULT_WA_MSG } from '../data/site';

const JOURNEY = [
  { year: '2021', title: 'The Seed', desc: 'Family vaidya recipes documented; first Giloy & Amla batches for friends and neighbours.' },
  { year: '2022', title: 'Kitchen-Lab', desc: 'Small GMP-partnered production begins. 500+ families served via WhatsApp.' },
  { year: '2024', title: 'SKDG is Born', desc: 'Luxury packaging, lab-tested extracts, Instagram community crosses 10K.' },
  { year: '2026', title: 'Pan-India Wellness', desc: '12 signature formulations, 10,000+ families, clinics & resellers nationwide.' },
];

export default function About() {
  return (
    <main>
      <PageHero eyebrow="Our Story" title={<>Rooted in Wisdom, <span className="italic text-gold-gradient">Crafted for Today</span></>} sub="SKDG Ayurvedic blends 5,000 years of shastra wisdom with modern lab precision." image={IMAGES.mortar} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-emerald-deep">Brand Story</span>
          <h2 className="font-display text-4xl md:text-5xl text-emerald-ink mt-3 leading-tight">From a Family Kitchen to <span className="italic text-gold-gradient">10,000 Homes</span></h2>
          <p className="text-ink/65 mt-5 leading-relaxed">SKDG began with our grandfather's handwritten kadha diary — Giloy for fevers, Brahmi for young minds, warm oils for tired joints. We refused to dilute those recipes. Instead we gave them what they deserved: standardised extracts, NABL lab testing and packaging beautiful enough to gift.</p>
          <p className="text-ink/65 mt-4 leading-relaxed">Today every SKDG formulation is traceable from farm to bottle — no steroids, no chemicals, no shortcuts. Just honest Ayurveda, delivered with luxury care on WhatsApp.</p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[['10K+', 'Happy Families'], ['12', 'Formulations'], ['4.9★', 'Avg. Rating']].map(([n, l]) => (
              <div key={l} className="bg-white border border-emerald-deep/10 rounded-2xl p-4 text-center shadow-sm">
                <p className="font-display text-3xl text-emerald-deep">{n}</p>
                <p className="text-xs text-ink/55 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.bowls} alt="Brand" loading="lazy" className="rounded-3xl h-64 w-full object-cover" />
            <img src={IMAGES.spiceMarket} alt="Sourcing" loading="lazy" className="rounded-3xl h-64 w-full object-cover mt-8" />
            <img src={IMAGES.oils} alt="Oils" loading="lazy" className="rounded-3xl h-64 w-full object-cover -mt-8" />
            <img src={IMAGES.tea} alt="Ritual" loading="lazy" className="rounded-3xl h-64 w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="bg-emerald-ink py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, t: 'Our Mission', d: 'Make authentic, lab-tested Ayurveda the first choice of every Indian household — affordable, beautiful and honest.' },
            { icon: Eye, t: 'Our Vision', d: 'A world where ancient wisdom and modern science walk together — SKDG as India’s most trusted luxury Ayurvedic house.' },
            { icon: Sprout, t: 'Founder Message', d: '“We will never sell what we would not give our own parents. That single rule guides every batch.” — Team SKDG' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-8 h-full hover:border-gold/40 transition-all">
                <span className="w-12 h-12 grid place-items-center rounded-2xl bg-gradient-to-br from-gold to-gold-dark text-emerald-ink"><c.icon size={22} /></span>
                <h3 className="font-display text-2xl text-ivory mt-4">{c.t}</h3>
                <p className="text-ivory/65 mt-2 leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <SectionHeading eyebrow="Purity Promise" title={<>Manufacturing & <span className="italic text-gold-gradient">Certifications</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: BadgeCheck, t: 'GMP Certified', d: 'Manufactured in GMP-certified hygienic facilities.' },
            { icon: FlaskConical, t: 'Lab Tested', d: 'Heavy metals, microbes & potency verified per batch.' },
            { icon: Sprout, t: 'Farm Traceable', d: 'Geo-tagged herb sourcing from trusted growers.' },
            { icon: Heart, t: 'Chemical Free', d: 'No steroids, parabens, colours or artificial flavours.' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="lux-card bg-white border border-emerald-deep/10 rounded-3xl p-7 text-center">
                <span className="mx-auto w-14 h-14 grid place-items-center rounded-2xl bg-emerald-deep text-gold-light"><c.icon size={24} /></span>
                <h3 className="font-display text-xl text-emerald-ink mt-4">{c.t}</h3>
                <p className="text-sm text-ink/60 mt-2">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Milestones" title={<>Our <span className="italic text-gold-gradient">Journey</span></>} />
          <div className="relative max-w-3xl mx-auto">
            <span className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold via-emerald-deep to-gold/30 md:-translate-x-1/2" />
            {JOURNEY.map((j, i) => (
              <Reveal key={j.year}>
                <div className={`relative flex gap-6 pb-10 md:w-1/2 ${i % 2 ? 'md:ml-auto md:pl-10' : 'md:pr-10 md:flex-row-reverse md:text-right'}`}>
                  <span className={`relative z-10 shrink-0 w-10 h-10 grid place-items-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-emerald-ink font-bold text-xs shadow-lg md:absolute md:top-0 ${i % 2 ? 'md:-left-[61px]' : 'md:-right-[61px]'}`}>{j.year.slice(2)}</span>
                  <div className="bg-white border border-emerald-deep/10 rounded-2xl p-5 shadow-sm flex-1">
                    <p className="text-gold-dark font-bold text-sm tracking-widest">{j.year}</p>
                    <h3 className="font-display text-xl text-emerald-ink">{j.title}</h3>
                    <p className="text-sm text-ink/60 mt-1.5">{j.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="text-center mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/products" className="inline-flex items-center gap-2 bg-emerald-deep text-ivory font-bold px-8 py-3.5 rounded-full hover:bg-emerald-dark transition-all">Shop Our Formulations <ArrowRight size={17} /></Link>
          <a href={waLink(DEFAULT_WA_MSG)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-emerald-deep text-emerald-deep font-bold px-8 py-3.5 rounded-full hover:bg-emerald-deep hover:text-ivory transition-all"><MessageCircle size={17} /> Talk to Us</a>
        </Reveal>
      </section>
    </main>
  );
}
