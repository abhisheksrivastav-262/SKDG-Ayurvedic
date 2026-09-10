import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { waLink, DEFAULT_WA_MSG } from '../data/site';
import logoImg from '../assets/logo.png';

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-emerald-ink">
          <div className="text-center">
            <motion.img
              src={logoImg}
              alt="SKDG Ayurvedic logo"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto h-[85px] md:h-[100px] lg:h-[120px] w-auto object-contain drop-shadow-[0_0_40px_rgba(200,164,77,0.5)]"
            />
            <p className="font-display text-2xl md:text-3xl text-ivory mt-5">SKDG <span className="text-gold-gradient">Ayurvedic</span></p>
            <p className="text-[10px] md:text-[11px] tracking-[0.32em] uppercase text-ivory/50 mt-1.5">Ancient • Modern • Pure</p>
            <div className="mt-5 h-1 w-44 md:w-56 mx-auto rounded-full bg-white/10 overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" initial={{ x: '-100%' }} animate={{ x: '220%' }} transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '45%' }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink(DEFAULT_WA_MSG)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: 'spring', stiffness: 260, damping: 18 }}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40 animate-ping" />
      <span className="relative grid place-items-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-2xl group-hover:scale-110 transition-transform border-2 border-gold/60">
        <MessageCircle size={26} />
      </span>
    </motion.a>
  );
}

export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return null;
}
