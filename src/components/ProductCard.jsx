import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Eye, BadgeCheck } from 'lucide-react';
import { Stars } from './ui';
import { orderLink } from '../data/site';

export default function ProductCard({ product, index = 0 }) {
  const discount = Math.round((1 - product.price / product.mrp) * 100);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="lux-card group relative bg-white rounded-[26px] overflow-hidden border border-emerald-deep/10 shadow-[0_18px_45px_-20px_rgba(6,78,59,0.3)]"
    >
      <div className="relative h-60 overflow-hidden">
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-ink/60 via-transparent to-transparent" />
        {product.tag && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 text-[11px] font-bold tracking-wide uppercase bg-gradient-to-r from-gold to-gold-dark text-emerald-ink px-3 py-1.5 rounded-full shadow-lg">
            <BadgeCheck size={12} /> {product.tag}
          </span>
        )}
        <span className="absolute top-4 right-4 text-[11px] font-bold bg-emerald-ink/80 text-gold-light px-2.5 py-1.5 rounded-full backdrop-blur border border-gold/30">
          -{discount}%
        </span>
        <span className="absolute bottom-4 left-4 text-[11px] font-semibold tracking-widest uppercase text-ivory/90 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20">
          {product.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2">
          <Stars value={product.rating} />
          <span className="text-xs text-ink/55 font-medium">{product.rating} ({product.reviews.toLocaleString('en-IN')})</span>
        </div>
        <h3 className="font-display text-[22px] text-emerald-ink mt-2 leading-snug">{product.name}</h3>
        <p className="text-sm text-ink/60 mt-1.5 line-clamp-2 leading-relaxed">{product.short}</p>
        <div className="flex items-baseline gap-2 mt-3">
          <span className="font-display text-2xl text-emerald-deep font-semibold">₹{product.price}</span>
          <span className="text-sm text-ink/45 line-through">₹{product.mrp}</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 mt-5">
          <Link to={`/products/${product.id}`} className="touch-target inline-flex justify-center items-center gap-1.5 border-2 border-emerald-deep/20 text-emerald-deep text-sm font-semibold px-3 py-2.5 rounded-2xl hover:border-emerald-deep hover:bg-emerald-deep/5 transition-all">
            <Eye size={15} /> Details
          </Link>
          <a href={orderLink(product.name, product.price)} target="_blank" rel="noreferrer" className="btn-shine touch-target inline-flex justify-center items-center gap-1.5 bg-gradient-to-r from-emerald-deep to-emerald-dark text-ivory text-sm font-semibold px-3 py-2.5 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <MessageCircle size={15} /> Order
          </a>
        </div>
      </div>
    </motion.article>
  );
}
