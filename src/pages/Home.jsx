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
import { PRODUCTS, getProduct } from '../data/products';
import { TESTIMONIALS } from '../data/content';

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

const HIGHLIGHTS = [
  { id: 'skdg-gulkand-250g', desc: 'Traditional herbal rose preserve for digestive wellness.' },
  { id: 'shainshah-gold-capsule', desc: 'Premium Ayurvedic vitality formulation.' },
  { id: 'pancham-haldi', desc: 'High-quality turmeric blend for daily immunity.' },
  { id: 'skdg-herbal-tea', desc: 'Herbal wellness tea for a refreshing lifestyle.' },
  { id: 'liver-care-syrup', desc: 'Ayurvedic liver support formula.' },
  { id: 'ortho-ds-capsules', desc: 'Herbal joint and bone wellness support.' },
];

const HERO_TRUST = [
  { icon: Leaf, label: '100% Natural' },
  { icon: BadgeCheck, label: 'GMP Quality' },
  { icon: FlaskConical, label: 'Chemical Free' },
  { icon: HeartHandshake, label: 'Trusted by Families' },
];

const HERO_LEAVES = [8, 24, 40, 56, 72, 88];

function Hero() {
  const gulkand = getProduct('skdg-gulkand-250g');
  const haldi = getProduct('pancham-haldi');
  const neem = getProduct('neem-aloevera-face-wash');
  const [par, setPar] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPar({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  };
  const layer = (d) => ({ transform: `translate3d(${(par.x * d).toFixed(1)}px, ${(par.y * d).toFixed(1)}px, 0)` });

  return (
    <section onMouseMove={onMove} className="relative min-h-[90svh] lg:min-h-[100svh] flex items-center overflow-hidden bg-emerald-ink">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-ink via-emerald-dark to-emerald-ink" />
      <div className="absolute -top-48 -right-48 h-[560px] w-[560px] rounded-full bg-gold/15 blur-[130px]" />
      <div className="absolute top-1/3 -left-40 h-[480px] w-[480px] rounded-full bg-emerald-deep/40 blur-[120px]" />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(115deg, transparent 40%, rgba(200,164,77,0.12) 45%, transparent 55%, transparent 62%, rgba(200,164,77,0.08) 67%, transparent 72%)' }} />
      <div className="hero-grain absolute inset-0" />
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-gold/15" />
      <div className="absolute -right-20 top-1/4 mt-12 h-72 w-72 rounded-full border border-gold/10" />
      {HERO_LEAVES.map((left, i) => (
        <span key={i} className="animate-leaf absolute text-emerald-200/30" style={{ left: `${left}%`, top: `${12 + ((i * 29) % 62)}%`, animationDelay: `${i * 1.1}s` }}>
          <Leaf size={20 + (i % 3) * 8} />
        </span>
      ))}

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-light border border-gold/40 bg-white/5 px-4 py-2 rounded-full backdrop-blur">
            🌿 100% Ayurvedic • GMP Certified
          </span>
          <h1 className="fluid-hero font-display text-ivory mt-6">
            Heal Naturally with the <span className="text-gold-gradient italic">Power of Ayurveda</span>
          </h1>
          <p className="text-ivory/75 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
            Experience authentic herbal wellness crafted from nature's finest formulations for immunity, liver care, skincare &amp; everyday health.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-8">
            <Link to="/products" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-emerald-ink font-bold px-7 py-3.5 rounded-full shadow-[0_15px_40px_-10px_rgba(200,164,77,0.6)] hover:-translate-y-0.5 transition-all">
              <ShoppingBag size={18} /> Explore Products
            </Link>
            <a href={waLink(DEFAULT_WA_MSG)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ivory/30 text-ivory font-semibold px-7 py-3.5 rounded-full glass-dark hover:bg-white/15 transition-all">
              <MessageCircle size={18} /> Order on WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-9 max-w-xl">
            {HERO_TRUST.map((t) => (
              <div key={t.label} className="flex items-center gap-2">
                <span className="w-9 h-9 grid place-items-center rounded-xl bg-gold/15 border border-gold/30 text-gold-light shrink-0"><t.icon size={15} /></span>
                <span className="text-ivory/85 text-[13px] font-semibold leading-tight">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.25 }} className="relative mx-auto w-full max-w-[430px]">
          <div className="relative h-[430px] sm:h-[500px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-white/5 border border-gold/20 backdrop-blur-sm" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-gold/10 border border-gold/15 blur-[1px]" />
            {[12, 30, 52, 70, 86].map((left, i) => (
              <span key={i} className="animate-leaf absolute h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(200,164,77,0.9)]" style={{ left: `${left}%`, top: `${8 + ((i * 37) % 80)}%`, animationDelay: `${i * 0.7}s` }} />
            ))}
            <div className="absolute left-0 top-6 w-36 sm:w-44 -rotate-6" style={layer(28)}>
              <div className="animate-leaf glass-dark border border-gold/30 rounded-[22px] p-2.5 shadow-2xl" style={{ animationDelay: '0.8s' }}>
                <img src={haldi.image} alt={haldi.name} className="h-40 sm:h-48 w-full object-contain rounded-xl bg-ivory/95" loading="eager" />
                <p className="text-center text-ivory text-[11px] font-bold mt-2 truncate">{haldi.name}</p>
                <p className="text-center text-gold-light text-[11px] font-semibold">₹{haldi.price}</p>
              </div>
            </div>
            <div className="absolute right-0 bottom-6 w-36 sm:w-44 rotate-6" style={layer(22)}>
              <div className="animate-leaf glass-dark border border-gold/30 rounded-[22px] p-2.5 shadow-2xl" style={{ animationDelay: '1.6s' }}>
                <img src={neem.image} alt={neem.name} className="h-40 sm:h-48 w-full object-contain rounded-xl bg-ivory/95" loading="eager" />
                <p className="text-center text-ivory text-[11px] font-bold mt-2 truncate">{neem.name}</p>
                <p className="text-center text-gold-light text-[11px] font-semibold">₹{neem.price}</p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-60" style={layer(12)}>
              <div className="animate-leaf glass-dark border border-gold/40 rounded-[26px] p-3 shadow-[0_30px_80px_-20px_rgba(200,164,77,0.45)]">
                <img src={gulkand.image} alt={gulkand.name} className="h-60 sm:h-72 w-full object-contain rounded-2xl bg-ivory/95" loading="eager" />
                <p className="text-center text-ivory text-xs font-bold mt-2.5 truncate">{gulkand.name}</p>
                <p className="text-center text-gold-light text-xs font-semibold">₹{gulkand.price}</p>
              </div>
            </div>
            <span className="animate-leaf absolute left-6 bottom-16 w-11 h-11 grid place-items-center rounded-full glass border border-gold/30 text-emerald-deep" style={{ animationDelay: '0.4s' }}>
              <Leaf size={17} />
            </span>
            <span className="animate-leaf absolute right-8 top-14 w-11 h-11 grid place-items-center rounded-full glass border border-gold/30 text-emerald-deep" style={{ animationDelay: '2s' }}>
              <Leaf size={17} />
            </span>
          </div>
        </motion.div>
      </div>

      <svg className="absolute bottom-0 left-0 block w-full text-ivory -mb-px" viewBox="0 0 1440 70" fill="currentColor" preserveAspectRatio="none" style={{ height: 56 }}>
        <path d="M0,40 C240,80 480,0 720,30 C960,60 1200,80 1440,30 L1440,70 L0,70 Z" />
      </svg>
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

      {/* Product Highlights */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow="Product Highlights" title={<>SKDG Premium <span className="italic text-gold-gradient">Herbal Products</span></>} sub="Discover our authentic Ayurvedic formulations crafted for everyday wellness." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((h, i) => {
            const p = PRODUCTS.find((x) => x.id === h.id);
            if (!p) return null;
            return (
              <Reveal key={h.id} delay={(i % 3) * 0.08}>
                <Link to={`/products/${p.id}`} className="lux-card group block bg-white rounded-[24px] overflow-hidden border border-emerald-deep/10">
                  <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-ivory to-cream/70 p-5">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-gold-dark font-bold">{p.category}</p>
                    <h3 className="font-display text-[22px] text-emerald-ink mt-1">{p.name}</h3>
                    <p className="text-sm text-ink/60 mt-1.5">{h.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-deep mt-3 group-hover:gap-3 transition-all">View Details <ArrowRight size={15} /></span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
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
