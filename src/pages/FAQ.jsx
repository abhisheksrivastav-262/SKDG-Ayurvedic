import { useState } from 'react';
import { ChevronDown, MessageCircle, Search } from 'lucide-react';
import { Reveal, SectionHeading, PageHero } from '../components/ui';
import { IMAGES, waLink, DEFAULT_WA_MSG } from '../data/site';
import { FAQS } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [q, setQ] = useState('');
  const list = FAQS.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase()));

  return (
    <main>
      <PageHero eyebrow="Good Questions" title={<>Everything You're <span className="italic text-gold-gradient">Wondering</span></>} sub="Authenticity, usage, shipping, safety — answered honestly." image={IMAGES.teaPour} />

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-14">
        <Reveal>
          <label className="flex items-center gap-2.5 bg-white border border-emerald-deep/15 rounded-2xl px-5 py-4 shadow-sm">
            <Search size={18} className="text-emerald-deep" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions... (e.g. shipping, safety)" className="bg-transparent outline-none text-sm w-full" />
          </label>
        </Reveal>
        <div className="mt-6 space-y-3.5">
          {list.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 0.04, 0.3)}>
              <div className={`border rounded-2xl overflow-hidden transition-all ${open === i ? 'border-gold bg-cream/60 shadow-lg' : 'border-emerald-deep/12 bg-white'}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-display text-lg text-emerald-ink">{f.q}</span>
                  <span className={`shrink-0 w-9 h-9 grid place-items-center rounded-full transition-all ${open === i ? 'bg-emerald-deep text-ivory rotate-180' : 'bg-emerald-deep/10 text-emerald-deep'}`}><ChevronDown size={17} /></span>
                </button>
                {open === i && <p className="px-6 pb-6 text-[15px] text-ink/65 leading-relaxed">{f.a}</p>}
              </div>
            </Reveal>
          ))}
          {!list.length && <p className="text-center text-ink/55 py-10">No answers found — ask us directly on WhatsApp below.</p>}
        </div>

        <Reveal>
          <div className="mt-10 rounded-[28px] bg-emerald-ink p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #C8A44D66 0, transparent 50%)' }} />
            <h3 className="relative font-display text-2xl md:text-3xl text-ivory">Still curious? <span className="italic text-gold-gradient">Ask us anything.</span></h3>
            <p className="relative text-ivory/65 text-sm mt-2">Real humans reply Mon–Sat, 9 AM – 8 PM IST.</p>
            <a href={waLink(q ? `Hello SKDG Ayurvedic, I have a question: ${q}` : DEFAULT_WA_MSG)} target="_blank" rel="noreferrer" className="relative btn-shine inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-gold to-gold-dark text-emerald-ink font-bold px-8 py-3.5 rounded-full"><MessageCircle size={17} /> Ask on WhatsApp</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
