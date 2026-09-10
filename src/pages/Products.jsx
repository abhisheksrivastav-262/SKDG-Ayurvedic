import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PageHero, Reveal } from '../components/ui';
import ProductCard from '../components/ProductCard';
import { IMAGES } from '../data/site';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function Products() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [sort, setSort] = useState('popular');

  const list = useMemo(() => {
    let l = PRODUCTS.filter((p) =>
      (cat === 'All' || p.category === cat) &&
      (p.name.toLowerCase().includes(query.toLowerCase()) || p.short.toLowerCase().includes(query.toLowerCase()))
    );
    if (sort === 'low') l = [...l].sort((a, b) => a.price - b.price);
    if (sort === 'high') l = [...l].sort((a, b) => b.price - a.price);
    if (sort === 'rating') l = [...l].sort((a, b) => b.rating - a.rating);
    return l;
  }, [query, cat, sort]);

  return (
    <main>
      <PageHero eyebrow="The Collection" title={<>Shop Premium <span className="italic text-gold-gradient">Ayurveda</span></>} sub="12 signature formulations — lab-tested, GMP-made, loved by 10,000+ families." image={IMAGES.bowls} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <Reveal>
          <div className="glass border border-emerald-deep/10 rounded-3xl p-4 md:p-5 shadow-lg flex flex-col lg:flex-row gap-3 lg:items-center sticky top-20 lg:top-24 z-30">
            <label className="flex items-center gap-2.5 bg-white border border-emerald-deep/15 rounded-2xl px-4 py-3 flex-1">
              <Search size={18} className="text-emerald-deep shrink-0" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Ashwagandha, oil, immunity..." className="bg-transparent outline-none text-sm w-full placeholder:text-ink/40" />
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {['All', ...CATEGORIES.map((c) => c.name)].map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`touch-target whitespace-nowrap text-[13px] font-semibold px-4 py-2.5 rounded-full border transition-all ${cat === c ? 'bg-emerald-deep text-ivory border-emerald-deep shadow' : 'border-emerald-deep/20 text-emerald-deep hover:border-emerald-deep'}`}>{c}</button>
              ))}
            </div>
            <label className="flex items-center gap-2 text-sm font-semibold text-emerald-deep shrink-0">
              <SlidersHorizontal size={16} />
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="touch-target bg-white border border-emerald-deep/15 rounded-xl px-3 py-2.5 outline-none text-[13px]">
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
              </select>
            </label>
          </div>
        </Reveal>

        <p className="text-sm text-ink/55 mt-8">Showing <b className="text-emerald-deep">{list.length}</b> formulation{list.length !== 1 && 's'}{cat !== 'All' && <> in <b>{cat}</b></>}</p>

        {list.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
            {list.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-emerald-deep/10 mt-5">
            <p className="font-display text-3xl text-emerald-ink">No formulations found</p>
            <p className="text-ink/55 text-sm mt-2">Try a different search or category.</p>
            <button onClick={() => { setQuery(''); setCat('All'); }} className="mt-5 bg-emerald-deep text-ivory text-sm font-bold px-6 py-3 rounded-full">Reset Filters</button>
          </div>
        )}
      </section>
    </main>
  );
}
