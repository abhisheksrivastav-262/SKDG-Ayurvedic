import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { waLink, DEFAULT_WA_MSG } from '../data/site';

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
            <motion.div
              animate={{ scale: [0.92, 1.06, 0.92], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="mx-auto w-20 h-20 grid place-items-center rounded-3xl bg-gradient-to-br from-emerald-deep to-emerald-dark border border-gold/50 shadow-[0_0_60px_-10px_#C8A44D]"
            >
              <span className="font-display text-4xl text-gold-light">S</span>
            </motion.div>
            <p className="font-display text-2xl text-ivory mt-5">SKDG <span className="text-gold-gradient">Ayurvedic</span></p>
            <div className="mt-4 h-1 w-44 mx-auto rounded-full bg-white/10 overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-emerald-deep via-gold to-gold-light" initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '60%' }} />
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
