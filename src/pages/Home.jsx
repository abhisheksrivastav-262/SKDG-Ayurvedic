import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, ShoppingBag, Leaf, FlaskConical, BadgeCheck, Sparkles, HeartHandshake,
  ChevronLeft, ChevronRight, ArrowRight, Award, Microscope, Sprout, PackageCheck, Truck, Star,
} from 'lucide-react';
import { InstagramIcon } from '../components/icons';
import { Reveal, SectionHeading, Stars } from '../components/ui';
import ProductCard from '../components/ProductCard';
import { IMAGES, waLink, DEFAULT_WA_MSG, INSTAGRAM_URL, INSTAGRAM } from '../data/site';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { INGREDIENTS, TESTIMONIALS } from '../data/content';

const TRUST = [
  { icon: Leaf, title: '100% Natural', desc: 'Farm-sourced botanicals' },
  { icon: Sprout, title: 'Ayurvedic Formula', desc: 'Classical shastra-based' },
  { icon: BadgeCheck, title: 'GMP Quality', desc: 'Certified manufacturing' },
  { icon: FlaskConical, title: 'Chemical Free', desc: 'No steroids, no additives' },
  { icon: HeartHandshake, title: 'Trusted Wellness', desc: '10,000+ happy families' },
];

const WHY = [
  { icon: Leaf, title: 'Natural Ingredients', desc: 'Traceable farms, shade-dried herbs, zero shortcuts.' },
  { icon: Award, title: 'Traditional Ayurveda', desc: 'Formulas rooted in Charaka Samhita wisdom.' },
  { icon: Microscope, title: 'Scientific Processing', desc: 'Standardised extracts, precise potency.' },
  { icon: FlaskConical, title: 'Quality Tested', desc: 'Every batch tested for metals & microbes.' },
  { icon: Sparkles, title: 'Expert Formulation', desc: 'Designed by vaidya-led wellness experts.' },
  { icon: HeartHandshake, title: 'Customer Satisfaction', desc: 'Personal WhatsApp care, COD & easy support.' },
];

const STEPS = ['Herb Selection', 'Purification', 'Extraction', 'Testing', 'Packaging', 'Delivery'];
const STEP_DESC = [
  'Only mature, high-potency herbs from trusted farms.',
  'Classical shodhana purification removes impurities.',
  'Slow, low-heat extraction preserves active compounds.',
  'Third-party lab testing for purity & safety.',
  'Hygienic, eco-conscious luxury packaging.',
  'Fast, tracked delivery to your doorstep.',
];

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-emerald-ink">
      <img src={IMAGES.hero} alt="Luxury Ayurvedic herbs" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-ink/95 via-emerald-ink/70 to-emerald-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-ink via-transparent to-emerald-ink/40" />
      <div className="hero-grain absolute inset-0" />
      {[...Array(7)].map((_, i) => (
        <span key={i} className="animate-leaf absolute text-emerald-200/40" style={{ left: `${8 + i * 13}%`, top: `${15 + ((i * 23) % 60)}%`, animationDelay: `${i * 0.9}s`, fontSize: `${18 + (i % 3) * 10}px` }}>🍃</span>
      ))}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-light border border-gold/40 bg-white/5 px-4 py-2 rounded-full backdrop-blur">
            <Sparkles size={13} /> Premium Ayurvedic Wellness
          </span>
          <h1 className="fluid-hero font-display text-ivory mt-6">
            Ancient Ayurveda,<br /><span className="text-gold-gradient italic">Modern Wellness</span>
          </h1>
          <p className="text-ivory/75 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
            Premium Ayurvedic formulations crafted with nature's finest herbs for holistic health and daily wellness.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-8">
            <Link to="/products" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-emerald-ink font-bold px-7 py-3.5 rounded-full shadow-[0_15px_40px_-10px_rgba(200,164,77,0.6)] hover:-translate-y-0.5 transition-all">
              <ShoppingBag size={18} /> Shop Products
            </Link>
            <a href={waLink(DEFAULT_WA_MSG)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ivory/30 text-ivory font-semibold px-7 py-3.5 rounded-full glass-dark hover:bg-white/15 transition-all">
              <MessageCircle size={18} /> WhatsApp Now
            </a>
          </div>
          <div className="flex items-center gap-4 mt-9">
            <div className="flex -space-x-3">
              {TESTIMONIALS.slice(0, 4).map((t) => (
                <img key={t.name} src={t.image} alt={t.name} className="w-10 h-10 rounded-full border-2 border-gold object-cover" loading="lazy" />
              ))}
            </div>
            <div>
              <Stars value={5} />
              <p className="text-ivory/70 text-xs mt-0.5">Loved by <b className="text-gold-light">10,000+</b> wellness families</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.25 }} className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-gold/25 to-transparent blur-2xl" />
            <div className="relative glass-dark border border-gold/30 rounded-[32px] p-4 shadow-2xl">
              <img src={IMAGES.bowls} alt="Ayurvedic bowls" className="rounded-[24px] h-[420px] w-full object-cover" />
              <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-4 flex items-center gap-4">
                <span className="w-12 h-12 grid place-items-center rounded-2xl bg-emerald-deep text-gold-light shrink-0"><Leaf size={22} /></span>
                <div>
                  <p className="font-display text-lg text-emerald-ink leading-tight">Shilajit Resin — Pure Himalayan</p>
                  <p className="text-xs text-ink/60">★ 5.0 · 3,204 reviews · <b>₹999</b></p>
                </div>
                <Link to="/products/shilajit-resin" className="ml-auto text-xs font-bold bg-emerald-deep text-ivory px-4 py-2.5 rounded-full hover:bg-emerald-dark">View</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="w-6 h-10 rounded-full border-2 border-ivory/30 flex justify-center pt-2"><span className="w-1 h-2 rounded-full bg-gold" /></motion.span>
      </div>
    </section>
  );
}

function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="glass border border-emerald-deep/10 rounded-[32px] p-8 md:p-12 shadow-[0_30px_70px_-25px_rgba(6,78,59,0.4)] text-center relative overflow-hidden">
        <span className="font-display text-[120px] leading-none text-gold/25 absolute top-2 left-8 select-none">“</span>
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.45 }}>
            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mx-auto border-[3px] border-gold shadow-lg" loading="lazy" />
            <Stars value={t.rating} size={17} />
            <p className="font-display text-xl md:text-2xl text-emerald-ink leading-relaxed mt-4 italic">“{t.text}”</p>
            <p className="font-bold text-emerald-deep mt-5">{t.name}</p>
            <p className="text-xs tracking-[0.25em] uppercase text-ink/50">{t.city}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-3 mt-6">
        <button onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous" className="w-11 h-11 grid place-items-center rounded-full border border-emerald-deep/20 text-emerald-deep hover:bg-emerald-deep hover:text-ivory transition-all"><ChevronLeft size={18} /></button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} aria-label={`Go to ${i + 1}`} onClick={() => setIdx(i)} className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-gold' : 'w-2 bg-emerald-deep/25'}`} />
          ))}
        </div>
        <button onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)} aria-label="Next" className="w-11 h-11 grid place-items-center rounded-full border border-emerald-deep/20 text-emerald-deep hover:bg-emerald-deep hover:text-ivory transition-all"><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}

export default function Home() {
  const best = PRODUCTS.slice(0, 4);
  return (
    <main>
      <Hero />

      {/* Trust strip */}
      <section className="relative bg-ivory py-10 border-b border-emerald-deep/10 overflow-hidden">
        <div className="flex animate-marquee gap-4 w-max px-4">
          {[...TRUST, ...TRUST].map((t, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-emerald-deep/10 rounded-2xl px-6 py-4 shadow-sm min-w-[250px]">
              <span className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-deep to-emerald-dark text-gold-light shrink-0"><t.icon size={20} /></span>
              <span><b className="block text-emerald-ink text-[15px]">{t.title}</b><small className="text-ink/55">{t.desc}</small></span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow="Curated Rituals" title={<>Shop by <span className="italic text-gold-gradient">Wellness Need</span></>} sub="Six signature collections — each crafted as a complete daily ritual, not just a product." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.08}>
              <Link to="/products" className="lux-card group relative block rounded-[28px] overflow-hidden h-72 border border-emerald-deep/10">
                <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-ink/90 via-emerald-ink/30 to-transparent" />
                <div className="absolute bottom-0 p-6 w-full">
                  <p className="text-gold-light text-[10px] tracking-[0.3em] uppercase font-bold">Collection 0{i + 1}</p>
                  <h3 className="font-display text-2xl text-ivory mt-1">{c.name}</h3>
                  <p className="text-ivory/70 text-sm mt-1">{c.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold-light text-sm font-semibold mt-3 group-hover:gap-3 transition-all">Explore <ArrowRight size={15} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-gradient-to-b from-cream/60 to-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Customer Favourites" title={<>Bestselling <span className="italic text-gold-gradient">Formulations</span></>} sub="Loved, reordered and reviewed by thousands of families across India." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {best.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <Reveal className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 border-2 border-emerald-deep text-emerald-deep font-bold px-8 py-3.5 rounded-full hover:bg-emerald-deep hover:text-ivory transition-all">View All 12 Products <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Why SKDG */}
      <section className="bg-emerald-ink relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, #C8A44D55 0, transparent 35%), radial-gradient(circle at 85% 70%, #0B6B4588 0, transparent 40%)' }} />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <img src={IMAGES.mortar} alt="Why SKDG" loading="lazy" className="rounded-[32px] h-[540px] w-full object-cover border border-gold/25 shadow-2xl" />
              <div className="absolute -bottom-6 -right-2 md:right-8 glass rounded-2xl px-6 py-4 shadow-xl flex items-center gap-3">
                <span className="font-display text-4xl text-emerald-deep font-semibold">12+</span>
                <span className="text-sm text-ink/65 leading-tight">Signature<br /><b>formulations</b></span>
              </div>
              <div className="absolute top-6 left-6 glass-dark border border-gold/30 rounded-2xl px-5 py-3 flex items-center gap-2.5">
                <Star size={16} className="text-gold" /><span className="text-ivory text-sm font-semibold">4.9 ★ · 10,000+ reviews</span>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading center={false} dark eyebrow="Why SKDG Ayurvedic" title={<>Luxury You Can <span className="italic text-gold-gradient">Trust Blindly</span></>} sub="Every bottle carries classical wisdom, modern lab proof and obsessive craftsmanship." />
            <div className="grid sm:grid-cols-2 gap-4 -mt-4">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={(i % 2) * 0.08}>
                  <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.1] hover:border-gold/40 hover:-translate-y-1 transition-all">
                    <span className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-dark text-emerald-ink"><w.icon size={20} /></span>
                    <h3 className="text-ivory font-display text-lg mt-3">{w.title}</h3>
                    <p className="text-ivory/60 text-sm mt-1 leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow="Botanical Library" title={<>Nature's Finest <span className="italic text-gold-gradient">Ingredients</span></>} sub="Eight legendary herbs — traceable, potent and explained honestly." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {INGREDIENTS.map((g, i) => (
            <Reveal key={g.name} delay={(i % 4) * 0.07}>
              <Link to="/ingredients" className="lux-card group block bg-white rounded-[24px] overflow-hidden border border-emerald-deep/10">
                <div className="h-44 overflow-hidden"><img src={g.image} alt={g.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" /></div>
                <div className="p-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-gold-dark font-bold italic">{g.latin}</p>
                  <h3 className="font-display text-xl text-emerald-ink">{g.name}</h3>
                  <p className="text-[13px] text-ink/60 mt-1">{g.benefits[0]}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-emerald-dark relative overflow-hidden py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading dark eyebrow="Seed to Shelf" title={<>Our Ayurvedic <span className="italic text-gold-gradient">Process</span></>} sub="Six sacred gates every herb crosses before it earns the SKDG seal." />
          <div className="relative grid md:grid-cols-6 gap-4">
            <span className="hidden md:block absolute top-9 left-8 right-8 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />
            {STEPS.map((s, i) => (
              <Reveal key={s} delay={i * 0.08}>
                <div className="relative text-center bg-white/[0.05] border border-white/10 rounded-2xl p-5 hover:border-gold/50 transition-all">
                  <span className="relative mx-auto w-[52px] h-[52px] grid place-items-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-emerald-ink font-display font-bold text-lg shadow-lg z-10">{i + 1}</span>
                  <h3 className="text-ivory font-display text-[17px] mt-3">{s}</h3>
                  <p className="text-ivory/55 text-xs mt-1.5 leading-relaxed">{STEP_DESC[i]}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-ivory/70 text-sm">
            <span className="inline-flex items-center gap-2"><Microscope size={16} className="text-gold" /> NABL Lab Partners</span>
            <span className="inline-flex items-center gap-2"><PackageCheck size={16} className="text-gold" /> Hygienic Packing</span>
            <span className="inline-flex items-center gap-2"><Truck size={16} className="text-gold" /> 3–6 Day Delivery</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow="Real Stories" title={<>Loved Across <span className="italic text-gold-gradient">India</span></>} sub="Verified reviews from Jaipur to Hyderabad — collected via WhatsApp & Instagram." />
        <TestimonialCarousel />
      </section>

      {/* Instagram */}
      <section className="bg-cream/60 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Community" title={<>Follow <span className="italic text-gold-gradient">{INSTAGRAM}</span></>} sub="Daily rituals, herb education and behind-the-scenes from our kitchen-lab." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[IMAGES.spa, IMAGES.tea, IMAGES.bowls, IMAGES.oils].map((src, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="group relative block rounded-3xl overflow-hidden h-64">
                  <img src={src} alt="Instagram post" loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <span className="absolute inset-0 bg-emerald-ink/0 group-hover:bg-emerald-ink/50 transition-all grid place-items-center"><span className="text-white opacity-0 group-hover:opacity-100 transition-all inline-flex"><InstagramIcon size={30} /></span></span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-emerald-deep to-emerald-dark text-ivory font-bold px-8 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all"><InstagramIcon size={18} /> Follow @skdg_ayurvedic_</a>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={IMAGES.heroAlt} alt="CTA" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-emerald-ink/85" />
        <div className="relative max-w-4xl mx-auto px-5 py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl text-ivory leading-tight">Begin Your Ayurvedic <span className="italic text-gold-gradient">Journey Today</span></h2>
            <p className="text-ivory/70 mt-5 max-w-xl mx-auto">Chat with our wellness experts — get a free personalised routine on WhatsApp within minutes.</p>
            <div className="flex flex-wrap justify-center gap-3.5 mt-9">
              <a href={waLink(DEFAULT_WA_MSG)} target="_blank" rel="noreferrer" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-emerald-ink font-bold px-8 py-4 rounded-full shadow-xl hover:-translate-y-0.5 transition-all"><MessageCircle size={19} /> Chat on WhatsApp</a>
              <Link to="/products" className="inline-flex items-center gap-2 border border-ivory/40 text-ivory font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"><ShoppingBag size={18} /> Explore Products</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
