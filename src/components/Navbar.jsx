import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { InstagramIcon } from './icons';
import { PHONE, waLink, DEFAULT_WA_MSG } from '../data/site';
import logoImg from '../assets/logo.png';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/ingredients', label: 'Ingredients' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  // Header is always pinned + solid so it never scrolls away or turns invisible
  const solid = true;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass shadow-[0_10px_40px_-15px_rgba(6,78,59,0.35)] border-b border-emerald-deep/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[72px] md:h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-2 group min-w-0">
            <img src={logoImg} alt="SKDG Ayurvedic logo" className="h-10 md:h-[70px] lg:h-[80px] w-auto object-contain flex-shrink-0 drop-shadow-[0_4px_14px_rgba(6,78,59,0.35)] group-hover:scale-105 transition-transform" />
            <span className="leading-tight min-w-0">
              <span className={`block font-display text-[17px] md:text-xl font-semibold tracking-wide whitespace-nowrap ${solid ? 'text-emerald-ink' : 'text-ivory'}`}>SKDG <span className="text-gold-gradient">Ayurvedic</span></span>
              <span className={`block text-[9px] md:text-[10px] tracking-[0.18em] md:tracking-[0.32em] uppercase whitespace-nowrap ${solid ? 'text-emerald-deep/70' : 'text-ivory/70'}`}>Ancient • Modern • Pure</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-[14px] font-medium tracking-wide transition-all ${isActive
                    ? 'bg-emerald-deep text-ivory shadow-md shadow-emerald-dark/25'
                    : solid
                      ? 'text-emerald-ink/80 hover:bg-emerald-deep/10 hover:text-emerald-deep'
                      : 'text-ivory/85 hover:bg-white/10 hover:text-white'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className={`flex items-center gap-2 text-sm font-semibold ${solid ? 'text-emerald-ink' : 'text-ivory'}`}>
              <Phone size={16} className="text-gold" /> {PHONE}
            </a>
            <a href={waLink(DEFAULT_WA_MSG)} target="_blank" rel="noreferrer"
              className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-emerald-deep to-emerald-dark text-ivory text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-emerald-dark/30 hover:shadow-xl hover:-translate-y-0.5 transition-all border border-gold/40">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>

          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
            className={`lg:hidden touch-target h-12 w-12 grid place-items-center rounded-xl border flex-shrink-0 ${solid ? 'border-emerald-deep/20 text-emerald-ink' : 'border-white/25 text-ivory'}`}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-emerald-deep/10 px-5 py-4 space-y-1 max-h-[70vh] overflow-auto">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `block px-4 py-3 rounded-xl font-medium ${isActive ? 'bg-emerald-deep text-ivory' : 'text-emerald-ink hover:bg-emerald-deep/10'}`}>
              {l.label}
            </NavLink>
          ))}
          <div className="flex gap-2 pt-2">
            <a href={waLink(DEFAULT_WA_MSG)} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 bg-emerald-deep text-ivory font-semibold px-4 py-3 rounded-xl">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href="https://instagram.com/skdg_ayurvedic_" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 border border-emerald-deep/20 text-emerald-ink font-semibold px-4 py-3 rounded-xl">
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
