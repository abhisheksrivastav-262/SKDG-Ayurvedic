import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Clock, Leaf, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './icons';
import { PHONE, INSTAGRAM, waLink, DEFAULT_WA_MSG, INSTAGRAM_URL } from '../data/site';
import { PRODUCTS } from '../data/products';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="relative bg-emerald-ink text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #C8A44D 0, transparent 40%), radial-gradient(circle at 80% 60%, #0B6B45 0, transparent 45%)' }} />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="SKDG Ayurvedic logo" className="h-[70px] md:h-[80px] lg:h-[90px] w-auto object-contain drop-shadow-[0_4px_16px_rgba(200,164,77,0.3)]" />
              <div>
                <p className="font-display text-2xl">SKDG <span className="text-gold-gradient">Ayurvedic</span></p>
                <p className="text-[10px] tracking-[0.32em] uppercase text-ivory/60">Ancient • Modern • Pure</p>
              </div>
            </div>
            <p className="text-ivory/65 text-sm leading-relaxed mt-5">
              Premium Ayurvedic formulations crafted with nature's finest herbs for holistic health and daily wellness. GMP quality, 100% natural, chemical free.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="touch-target w-11 h-11 grid place-items-center rounded-full bg-white/8 border border-white/15 hover:bg-gold hover:text-emerald-ink hover:border-gold transition-all">
                <InstagramIcon size={17} />
              </a>
              <a href={waLink(DEFAULT_WA_MSG)} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="touch-target w-11 h-11 grid place-items-center rounded-full bg-white/8 border border-white/15 hover:bg-gold hover:text-emerald-ink hover:border-gold transition-all">
                <MessageCircle size={17} />
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} aria-label="Call" className="touch-target w-11 h-11 grid place-items-center rounded-full bg-white/8 border border-white/15 hover:bg-gold hover:text-emerald-ink hover:border-gold transition-all">
                <Phone size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold-light text-xs font-semibold tracking-[0.28em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[['/', 'Home'], ['/about', 'About Us'], ['/why-choose-us', 'Why Choose Us'], ['/testimonials', 'Testimonials'], ['/blog', 'Blog'], ['/faq', 'FAQ']].map(([to, label]) => (
                <li key={to + label}><Link to={to} className="text-ivory/70 hover:text-gold-light inline-flex items-center gap-1.5 transition-colors"><Leaf size={12} className="text-gold/70" />{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold-light text-xs font-semibold tracking-[0.28em] uppercase mb-5">Bestsellers</h4>
            <ul className="space-y-3 text-sm">
              {PRODUCTS.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`} className="text-ivory/70 hover:text-gold-light inline-flex items-center gap-1.5 transition-colors group">
                    {p.name} <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold-light text-xs font-semibold tracking-[0.28em] uppercase mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-ivory/70">
              <li className="flex gap-2.5"><Phone size={16} className="text-gold shrink-0 mt-0.5" /><a href={`tel:${PHONE.replace(/\s/g, '')}`} className="hover:text-gold-light">{PHONE}</a></li>
              <li className="flex gap-2.5"><span className="text-gold shrink-0 mt-0.5 inline-flex"><InstagramIcon size={16} /></span><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-gold-light">{INSTAGRAM}</a></li>
              <li className="flex gap-2.5"><MapPin size={16} className="text-gold shrink-0 mt-0.5" />Punjab, India — shipping across India</li>
              <li className="flex gap-2.5"><Clock size={16} className="text-gold shrink-0 mt-0.5" />Mon–Sat, 9 AM – 8 PM IST</li>
            </ul>
            <a href={waLink(DEFAULT_WA_MSG)} target="_blank" rel="noreferrer" className="btn-shine mt-5 inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-emerald-ink text-sm font-bold px-5 py-2.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all">
              <MessageCircle size={16} /> Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/55">
          <p>© 2026 SKDG Ayurvedic. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gold-light">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-light">Terms & Conditions</Link>
            <Link to="/contact" className="hover:text-gold-light">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
