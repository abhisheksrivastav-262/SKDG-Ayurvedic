import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, sub, center = true, dark = false }) {
  return (
    <Reveal className={`${center ? 'text-center mx-auto' : ''} max-w-3xl mb-12`}>
      <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.28em] uppercase text-emerald-deep bg-emerald-deep/10 border border-emerald-deep/15 px-4 py-2 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        {eyebrow}
      </span>
      <h2 className={`font-display text-4xl md:text-5xl mt-5 leading-[1.08] ${dark ? 'text-ivory' : 'text-emerald-ink'}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-base md:text-lg leading-relaxed ${dark ? 'text-ivory/70' : 'text-ink/65'}`}>{sub}</p>}
    </Reveal>
  );
}

export function Stars({ value = 5, size = 14 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} star rating`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24" fill={s <= Math.round(value) ? '#C8A44D' : 'none'} stroke="#C8A44D" strokeWidth="1.6">
          <path d="M12 2l2.9 6.26 6.6.57-5 4.36 1.5 6.45L12 16.9 5.99 19.64l1.5-6.45-5-4.36 6.6-.57L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function PageHero({ eyebrow, title, sub, image }) {
  return (
    <header className="relative overflow-hidden bg-emerald-dark">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-ink/80 via-emerald-dark/70 to-emerald-ink/90" />
      <div className="hero-grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-36 pb-20 md:pt-44 md:pb-28 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-light border border-gold/40 bg-white/5 px-4 py-2 rounded-full backdrop-blur">
            {eyebrow}
          </span>
          <h1 className="fluid-page font-display text-ivory mt-6">{title}</h1>
          {sub && <p className="text-ivory/75 max-w-2xl mx-auto mt-5 text-base md:text-lg">{sub}</p>}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-lg">❖</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>
      </div>
      <svg className="relative block w-full text-ivory -mb-px" viewBox="0 0 1440 70" fill="currentColor" preserveAspectRatio="none" style={{ height: 56 }}>
        <path d="M0,40 C240,80 480,0 720,30 C960,60 1200,80 1440,30 L1440,70 L0,70 Z" />
      </svg>
    </header>
  );
}
