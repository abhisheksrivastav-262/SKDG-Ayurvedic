import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, Phone, Check, ChevronDown, ShieldCheck, Truck, RotateCcw, ArrowLeft } from 'lucide-react';
import { Reveal, SectionHeading, Stars } from '../components/ui';
import ProductCard from '../components/ProductCard';
import { getProduct, relatedProducts } from '../data/products';
import { PHONE, orderLink, waLink } from '../data/site';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);

  if (!product) {
    return (
      <main className="pt-40 pb-24 text-center px-5">
        <p className="font-display text-4xl text-emerald-ink">Product not found</p>
        <Link to="/products" className="inline-flex items-center gap-2 mt-6 bg-emerald-deep text-ivory px-7 py-3 rounded-full font-bold"><ArrowLeft size={16} /> Back to Shop</Link>
      </main>
    );
  }

  const related = relatedProducts(product.id);
  const discount = Math.round((1 - product.price / product.mrp) * 100);
  const faqs = [
    { q: `How do I use ${product.name}?`, a: product.usage },
    { q: 'Is it safe for daily use?', a: 'Yes — classical food-grade herbs at safe doses. Pregnant/lactating women or those on medication should consult a doctor first.' },
    { q: 'How should I store it?', a: product.storage },
    { q: 'How fast is delivery?', a: 'Dispatch in 24–48 hrs; delivery in 3–6 working days across India. COD available.' },
  ];

  return (
    <main className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-deep hover:gap-3 transition-all"><ArrowLeft size={16} /> Back to all products</Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-6">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-[28px] overflow-hidden border border-emerald-deep/10 shadow-xl">
                <img src={product.gallery[activeImg]} alt={product.name} className="h-[420px] md:h-[520px] w-full object-cover" />
                {product.tag && <span className="absolute top-5 left-5 text-[11px] font-bold uppercase tracking-wide bg-gradient-to-r from-gold to-gold-dark text-emerald-ink px-4 py-2 rounded-full shadow-lg">{product.tag}</span>}
              </div>
              <div className="grid grid-cols-3 gap-3 mt-3">
                {product.gallery.map((g, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`rounded-2xl overflow-hidden border-2 transition-all ${i === activeImg ? 'border-gold shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <img src={g} alt="" loading="lazy" className="h-24 w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-gold-dark">{product.category} · {product.badge || '100% Natural'}</p>
            <h1 className="font-display text-4xl md:text-5xl text-emerald-ink mt-2 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-2.5 mt-3">
              <Stars value={product.rating} size={16} />
              <span className="text-sm font-semibold text-emerald-deep">{product.rating}</span>
              <span className="text-sm text-ink/50">· {product.reviews.toLocaleString('en-IN')} verified reviews</span>
            </div>
            <p className="text-ink/65 mt-4 leading-relaxed">{product.short}</p>

            <div className="flex items-baseline gap-3 mt-5">
              <span className="font-display text-4xl text-emerald-deep font-semibold">₹{product.price * qty}</span>
              <span className="text-lg text-ink/40 line-through">₹{product.mrp * qty}</span>
              <span className="text-xs font-bold bg-emerald-deep text-ivory px-3 py-1.5 rounded-full">SAVE {discount}%</span>
            </div>
            <p className="text-xs text-ink/50 mt-1.5">Inclusive of all taxes · Free shipping above ₹499</p>

            <div className="flex flex-col min-[480px]:flex-row min-[480px]:items-center gap-3 mt-6">
              <div className="touch-target self-start flex items-center border-2 border-emerald-deep/20 rounded-full overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2.5 font-bold text-emerald-deep hover:bg-emerald-deep/10" aria-label="Decrease">−</button>
                <span className="px-2 font-bold w-8 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-2.5 font-bold text-emerald-deep hover:bg-emerald-deep/10" aria-label="Increase">+</button>
              </div>
              <a href={orderLink(`${product.name} x ${qty}`, product.price * qty)} target="_blank" rel="noreferrer" className="btn-shine flex-1 inline-flex justify-center items-center gap-2 bg-gradient-to-r from-emerald-deep to-emerald-dark text-ivory font-bold px-6 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all">
                <MessageCircle size={18} /> Order on WhatsApp
              </a>
            </div>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="mt-3 w-full inline-flex justify-center items-center gap-2 border-2 border-gold text-gold-dark font-bold px-6 py-3.5 rounded-full hover:bg-gold hover:text-emerald-ink hover:border-gold transition-all">
              <Phone size={17} /> Call {PHONE}
            </a>

            <div className="bg-cream/70 border border-gold/30 rounded-3xl p-6 mt-7">
              <h3 className="font-display text-xl text-emerald-ink">Key Benefits</h3>
              <ul className="mt-3 space-y-2.5">
                {product.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-ink/75"><span className="w-5 h-5 grid place-items-center rounded-full bg-emerald-deep text-ivory shrink-0 mt-0.5"><Check size={12} /></span>{b}</li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-5 text-sm">
              <div className="bg-white border border-emerald-deep/10 rounded-2xl p-5"><b className="text-emerald-ink font-display text-base">Ingredients</b><p className="text-ink/60 mt-1.5">{product.ingredients}</p></div>
              <div className="bg-white border border-emerald-deep/10 rounded-2xl p-5"><b className="text-emerald-ink font-display text-base">How to Use</b><p className="text-ink/60 mt-1.5">{product.usage}</p></div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-[13px] text-ink/60">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={15} className="text-emerald-deep" /> GMP · Lab Tested</span>
              <span className="inline-flex items-center gap-1.5"><Truck size={15} className="text-emerald-deep" /> 3–6 Day Delivery</span>
              <span className="inline-flex items-center gap-1.5"><RotateCcw size={15} className="text-emerald-deep" /> Easy WhatsApp Support</span>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-2xl text-emerald-ink">Product FAQs</h3>
              <div className="mt-4 space-y-3">
                {faqs.map((f, i) => (
                  <div key={i} className={`border rounded-2xl overflow-hidden transition-all ${openFaq === i ? 'border-gold bg-cream/50' : 'border-emerald-deep/12 bg-white'}`}>
                    <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-emerald-ink text-[15px]">
                      {f.q}<ChevronDown size={17} className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && <p className="px-5 pb-5 text-sm text-ink/65 leading-relaxed">{f.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-cream/60 py-16 mt-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="Complete the Ritual" title={<>You May Also <span className="italic text-gold-gradient">Love</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <p className="text-center mt-10 text-sm text-ink/55">Need help choosing? <a href={waLink(`Hello SKDG Ayurvedic, I need help choosing between products. I saw ${product.name}.`)} target="_blank" rel="noreferrer" className="font-bold text-emerald-deep underline underline-offset-4">Ask our experts free on WhatsApp →</a></p>
        </div>
      </section>
    </main>
  );
}
