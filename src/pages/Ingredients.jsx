import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, History, Sparkles } from 'lucide-react';
import { Reveal, SectionHeading, PageHero } from '../components/ui';
import { IMAGES } from '../data/site';
import { INGREDIENTS } from '../data/content';

export default function Ingredients() {
  return (
    <main>
      <PageHero eyebrow="Botanical Library" title={<>Eight Legendary <span className="italic text-gold-gradient">Herbs</span></>} sub="Ayurvedic names, Latin science, traditional uses and modern rituals — honestly explained." image={IMAGES.spices} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 space-y-10">
        {INGREDIENTS.map((g, i) => (
          <Reveal key={g.name}>
            <article className={`grid lg:grid-cols-2 gap-0 rounded-[32px] overflow-hidden border border-emerald-deep/10 bg-white shadow-[0_25px_60px_-25px_rgba(6,78,59,0.35)] ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative h-80 lg:h-auto min-h-[320px]">
                <img src={g.image} alt={g.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-ink/70 to-transparent lg:bg-gradient-to-r" />
                <span className="absolute top-5 left-5 text-[11px] font-bold tracking-[0.25em] uppercase bg-ivory/90 text-emerald-deep px-4 py-2 rounded-full backdrop-blur">Herb 0{i + 1}</span>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-gold-light italic font-display text-lg">{g.latin}</p>
                  <h2 className="font-display text-4xl text-ivory">{g.name}</h2>
                  <p className="text-ivory/75 text-sm">{g.ayurvedic}</p>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-2">
                  {g.benefits.map((b) => (
                    <span key={b} className="text-xs font-semibold bg-emerald-deep/10 text-emerald-deep border border-emerald-deep/15 px-3.5 py-2 rounded-full">{b}</span>
                  ))}
                </div>
                <div className="mt-6 space-y-5">
                  <div className="flex gap-3.5">
                    <span className="w-10 h-10 grid place-items-center rounded-xl bg-gold/20 text-gold-dark shrink-0"><History size={18} /></span>
                    <div><b className="font-display text-lg text-emerald-ink">Traditional Use</b><p className="text-ink/60 text-[15px] mt-1 leading-relaxed">{g.traditional}</p></div>
                  </div>
                  <div className="flex gap-3.5">
                    <span className="w-10 h-10 grid place-items-center rounded-xl bg-emerald-deep/10 text-emerald-deep shrink-0"><FlaskConical size={18} /></span>
                    <div><b className="font-display text-lg text-emerald-ink">Modern Wellness</b><p className="text-ink/60 text-[15px] mt-1 leading-relaxed">{g.modern}</p></div>
                  </div>
                </div>
                <Link to="/products" className="inline-flex items-center gap-2 mt-7 text-sm font-bold text-emerald-deep border-b-2 border-gold pb-1 hover:gap-3.5 transition-all">Shop {g.name} formulations <ArrowRight size={15} /></Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <Reveal>
          <div className="relative rounded-[32px] overflow-hidden bg-emerald-ink p-10 md:p-14 text-center">
            <Sparkles size={28} className="mx-auto text-gold" />
            <h2 className="font-display text-3xl md:text-4xl text-ivory mt-4">Every herb traceable. <span className="italic text-gold-gradient">Every batch tested.</span></h2>
            <p className="text-ivory/65 mt-3 max-w-xl mx-auto">Ask us where your bottle's herbs grew — we love answering that.</p>
            <Link to="/products" className="btn-shine inline-flex items-center gap-2 mt-7 bg-gradient-to-r from-gold to-gold-dark text-emerald-ink font-bold px-8 py-3.5 rounded-full">Shop the Collection <ArrowRight size={17} /></Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
