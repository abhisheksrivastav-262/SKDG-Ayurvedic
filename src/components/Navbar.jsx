import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { InstagramIcon } from './icons';
import { PHONE, waLink, DEFAULT_WA_MSG } from '../data/site';

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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solid ? 'glass shadow-[0_10px_40px_-15px_rgba(6,78,59,0.35)] border-b border-emerald-deep/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-deep to-emerald-dark shadow-lg shadow-emerald-dark/30 group-hover:rotate-6 transition-transform">
              <span className="font-display text-2xl text-gold-light leading-none">S</span>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gold border-2 border-ivory" />
            </span>
            <span className="leading-tight">
              <span className={`block font-display text-xl font-semibold tracking-wide ${solid ? 'text-emerald-ink' : 'text-ivory'}`}>SKDG <span className="text-gold-gradient">Ayurvedic</span></span>
              <span className={`block text-[10px] tracking-[0.32em] uppercase ${solid ? 'text-emerald-deep/70' : 'text-ivory/70'}`}>Ancient • Modern • Pure</span>
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
            className={`lg:hidden touch-target p-2.5 grid place-items-center rounded-xl border ${solid ? 'border-emerald-deep/20 text-emerald-ink' : 'border-white/25 text-ivory'}`}>
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
