import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
import { Reveal, SectionHeading, PageHero } from '../components/ui';
import { IMAGES } from '../data/site';
import { BLOGS } from '../data/content';

export default function Blog() {
  const [featured, ...rest] = BLOGS;
  return (
    <main>
      <PageHero eyebrow="Wellness Journal" title={<>Learn the <span className="italic text-gold-gradient">Ayurvedic Way</span></>} sub="Herb guides, daily routines and honest wellness education." image={IMAGES.yoga} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <Reveal>
          <article className="grid lg:grid-cols-2 rounded-[32px] overflow-hidden border border-emerald-deep/10 bg-white shadow-xl">
            <div className="relative h-72 lg:h-auto"><img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover" />
              <span className="absolute top-5 left-5 text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-gold to-gold-dark text-emerald-ink px-4 py-2 rounded-full">Featured</span>
            </div>
            <div className="p-8 md:p-12">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-dark">{featured.category} · {featured.read}</p>
              <h2 className="font-display text-3xl md:text-4xl text-emerald-ink mt-3 leading-tight">{featured.title}</h2>
              <p className="text-ink/60 mt-4 leading-relaxed">{featured.excerpt}</p>
              <p className="text-xs text-ink/45 mt-4 inline-flex items-center gap-1.5"><CalendarDays size={13} /> {featured.date}</p>
              <div className="mt-6"><span className="inline-flex items-center gap-2 bg-emerald-deep text-ivory font-bold text-sm px-7 py-3 rounded-full">Read Article <ArrowRight size={15} /></span></div>
            </div>
          </article>
        </Reveal>

        <SectionHeading eyebrow="All Articles" title={<>Explore the <span className="italic text-gold-gradient">Journal</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 -mt-2">
          {rest.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 3) * 0.07}>
              <article className="lux-card bg-white border border-emerald-deep/10 rounded-[26px] overflow-hidden group cursor-pointer">
                <div className="h-56 overflow-hidden relative">
                  <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-ivory/90 text-emerald-deep px-3 py-1.5 rounded-full">{b.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-ink/45 inline-flex items-center gap-3"><span className="inline-flex items-center gap-1"><CalendarDays size={12} /> {b.date}</span><span className="inline-flex items-center gap-1"><Clock size={12} /> {b.read}</span></p>
                  <h3 className="font-display text-[22px] text-emerald-ink mt-2 leading-snug group-hover:text-emerald-deep transition-colors">{b.title}</h3>
                  <p className="text-sm text-ink/60 mt-2 line-clamp-2">{b.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-deep mt-4 group-hover:gap-3 transition-all">Read More <ArrowRight size={15} /></span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <p className="text-sm text-ink/55">Want an article on a specific concern? <Link to="/contact" className="font-bold text-emerald-deep underline underline-offset-4">Request a topic →</Link></p>
        </Reveal>
      </section>
    </main>
  );
}
