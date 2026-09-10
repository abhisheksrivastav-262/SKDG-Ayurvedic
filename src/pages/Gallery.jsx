import { useState } from 'react';
import { X, Expand } from 'lucide-react';
import { Reveal, SectionHeading, PageHero } from '../components/ui';
import { IMAGES } from '../data/site';
import { PRODUCTS } from '../data/products';

const GALLERY = PRODUCTS.map((p) => ({ src: p.image, label: p.name, cat: p.category }));

const CATS = ['All', ...new Set(GALLERY.map((g) => g.cat))];

export default function Gallery() {
  const [cat, setCat] = useState('All');
  const [light, setLight] = useState(null);
  const list = GALLERY.filter((g) => cat === 'All' || g.cat === cat);

  return (
    <main>
      <PageHero eyebrow="Visual Diary" title={<>The World of <span className="italic text-gold-gradient">SKDG</span></>} sub="Farms, formulations, packaging and rituals — a luxury masonry diary." image={IMAGES.hero} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <Reveal className="flex flex-wrap justify-center gap-2 mb-10">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`touch-target text-[13px] font-semibold px-5 py-2.5 rounded-full border transition-all ${cat === c ? 'bg-emerald-deep text-ivory border-emerald-deep shadow' : 'border-emerald-deep/20 text-emerald-deep hover:border-emerald-deep'}`}>{c}</button>
          ))}
        </Reveal>

        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {list.map((g, i) => (
            <Reveal key={g.src + i} delay={(i % 3) * 0.05}>
              <button onClick={() => setLight(g)} className="group relative block w-full mb-4 rounded-3xl overflow-hidden border border-emerald-deep/10 text-left">
                <img src={g.src} alt={g.label} loading="lazy" className="w-full h-auto object-contain bg-ivory group-hover:scale-[1.03] transition-transform duration-700" />
                <span className="absolute inset-0 bg-gradient-to-t from-emerald-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-ivory font-display text-lg">{g.label}</span>
                  <span className="w-9 h-9 grid place-items-center rounded-full bg-gold text-emerald-ink"><Expand size={15} /></span>
                </span>
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-emerald-ink/70 text-gold-light px-3 py-1.5 rounded-full backdrop-blur">{g.cat}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {light && (
        <div onClick={() => setLight(null)} className="fixed inset-0 z-[90] bg-emerald-ink/90 backdrop-blur grid place-items-center p-5 cursor-zoom-out">
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={light.src} alt={light.label} className="w-full max-h-[78vh] object-contain rounded-3xl border border-gold/30 shadow-2xl" />
            <p className="text-center text-ivory font-display text-2xl mt-4">{light.label}</p>
            <button onClick={() => setLight(null)} aria-label="Close" className="absolute -top-3 -right-3 w-11 h-11 grid place-items-center rounded-full bg-gold text-emerald-ink shadow-xl hover:scale-110 transition-transform"><X size={19} /></button>
          </div>
        </div>
      )}
    </main>
  );
}
