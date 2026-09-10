import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Check, MessageCircle, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, Stars } from '../components/ui';
import { getBlog, BLOGS } from '../data/blogs';
import { getProduct } from '../data/products';
import { orderLink, waLink } from '../data/site';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = getBlog(slug);

  if (!blog) {
    return (
      <main className="pt-40 pb-24 text-center px-5">
        <p className="font-display text-4xl text-emerald-ink">Article not found</p>
        <Link to="/blog" className="inline-flex items-center gap-2 mt-6 bg-emerald-deep text-ivory px-7 py-3 rounded-full font-bold"><ArrowLeft size={16} /> Back to Journal</Link>
      </main>
    );
  }

  const product = getProduct(blog.productId);
  const more = BLOGS.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <main className="pt-20 lg:pt-24 bg-ivory">
      <article className="max-w-3xl mx-auto px-5 md:px-8 pt-10">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-deep hover:gap-3 transition-all"><ArrowLeft size={16} /> All articles</Link>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mt-6">{blog.category} · SKDG Product Guide</p>
          <h1 className="font-display text-4xl md:text-5xl text-emerald-ink mt-3 leading-[1.08]">{blog.title}</h1>
          <p className="text-xs text-ink/45 mt-4 inline-flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><CalendarDays size={13} /> {blog.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {blog.read}</span>
          </p>
        </motion.div>
      </article>

      <Reveal className="max-w-3xl mx-auto px-5 md:px-8 mt-8">
        <div className="rounded-[28px] overflow-hidden border border-emerald-deep/10 bg-gradient-to-b from-white to-cream/60 p-6 md:p-10 shadow-lg">
          <img src={blog.image} alt={blog.title} className="w-full max-h-[420px] object-contain" />
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10">
        <Reveal>
          <p className="font-display text-xl md:text-2xl text-emerald-deep leading-relaxed italic border-l-4 border-gold pl-5">{blog.excerpt}</p>
        </Reveal>
        {blog.paras.map((para, i) => (
          <Reveal key={i}>
            <h2 className="font-display text-2xl text-emerald-ink mt-8">{i === 0 ? `The Ayurvedic Wisdom Behind ${blog.title}` : i === 1 ? 'Key Benefits & Ingredients' : 'How to Use It Right'}</h2>
            <p className="text-ink/70 leading-[1.85] mt-3">{para}</p>
          </Reveal>
        ))}

        <Reveal>
          <div className="bg-cream/70 border border-gold/30 rounded-3xl p-6 md:p-8 mt-8">
            <h3 className="font-display text-xl text-emerald-ink">Why You\u2019ll Love It</h3>
            <ul className="mt-4 space-y-2.5">
              {blog.benefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-[15px] text-ink/75"><span className="w-5 h-5 grid place-items-center rounded-full bg-emerald-deep text-ivory shrink-0 mt-0.5"><Check size={12} /></span>{b}</li>
              ))}
            </ul>
            <p className="text-sm text-ink/65 mt-5 pt-4 border-t border-gold/25"><b className="text-emerald-ink">Usage: </b>{blog.usage}</p>
          </div>
        </Reveal>

        {product && (
          <Reveal>
            <div className="mt-8 rounded-[28px] bg-emerald-ink p-7 md:p-9 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #C8A44D66 0, transparent 45%)' }} />
              <img src={product.image} alt={product.name} loading="lazy" className="relative w-28 h-36 object-contain bg-ivory rounded-2xl p-2 shrink-0" />
              <div className="relative text-center sm:text-left flex-1">
                <p className="text-gold-light text-[11px] tracking-[0.28em] uppercase font-bold">Get This Product</p>
                <h3 className="font-display text-2xl text-ivory mt-1">{product.name} — ₹{product.price}</h3>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-1.5"><Stars value={product.rating} size={13} /><span className="text-ivory/60 text-xs">{product.rating} · {product.reviews.toLocaleString('en-IN')} reviews</span></div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 mt-4">
                  <a href={orderLink(product.name, product.price)} target="_blank" rel="noreferrer" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-emerald-ink text-sm font-bold px-6 py-3 rounded-full"><MessageCircle size={15} /> Order Now</a>
                  <Link to={`/products/${product.id}`} className="inline-flex items-center gap-2 border border-ivory/30 text-ivory text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/10"><ShoppingBag size={15} /> Details</Link>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal className="text-center mt-10">
          <p className="text-sm text-ink/55">Questions about this product? <a href={waLink(`Hello SKDG Ayurvedic, I read your article on ${blog.title} and have a question.`)} target="_blank" rel="noreferrer" className="font-bold text-emerald-deep underline underline-offset-4">Ask our experts free →</a></p>
        </Reveal>
      </div>

      <section className="bg-cream/60 py-14">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-display text-3xl text-emerald-ink text-center">Keep <span className="italic text-gold-gradient">Reading</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {more.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.07}>
                <Link to={`/blog/${b.slug}`} className="lux-card bg-white border border-emerald-deep/10 rounded-[26px] overflow-hidden block h-full">
                  <div className="aspect-[4/3] bg-gradient-to-b from-ivory to-cream/70 p-5"><img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-contain" /></div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-emerald-ink leading-snug">{b.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-deep mt-3">Read More <ArrowRight size={15} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
