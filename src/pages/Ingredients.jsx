import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, HeartHandshake, ClipboardList } from 'lucide-react';
import { Reveal, SectionHeading, PageHero } from '../components/ui';
import { PRODUCTS, getProduct } from '../data/products';

const INFO = {
  'skdg-gulkand-250g': { type: 'Herbal Preserve', keys: 'Rose Petals, Mishri, Cardamom' },
  'ortho-ds-capsules': { type: 'Capsule', keys: 'Shallaki, Nirgundi, Ashwagandha, Guggul' },
  'ubtan-face-wash': { type: 'Face Wash', keys: 'Turmeric, Sandalwood, Saffron' },
  'shainshah-gold-capsule': { type: 'Capsule', keys: 'Shilajit, Kesar, Swarn Bhasma' },
  'bhumi-amla-churan': { type: 'Churan', keys: 'Bhumi Amla, Triphala Herbs' },
  'liver-care-syrup': { type: 'Syrup', keys: 'Kalmegh, Bhumi Amla, Kutki, Punarnava' },
  'orthi-rlif-oil': { type: 'Oil', keys: 'Sesame Oil, Nirgundi, Ashwagandha, Camphor' },
  'pancham-haldi': { type: 'Churan', keys: 'Turmeric, Ginger, Black Pepper, Amla' },
  'neem-aloevera-face-wash': { type: 'Face Wash', keys: 'Neem, Aloevera' },
  'diabetes-care-gold-churan': { type: 'Churan', keys: 'Gurmar, Jamun, Methi, Karela' },
  'leco-protct-ds-syrup': { type: 'Syrup', keys: 'Ashoka, Lodhra, Shatavari' },
  'skdg-herbal-tea': { type: 'Herbal Tea', keys: 'Tulsi, Giloy, Ginger, Cinnamon, Black Pepper' },
  'liver-care-powder': { type: 'Churan', keys: 'Kalmegh, Bhumi Amla, Kutki' },
  'bp-cardio-capsules': { type: 'Capsule', keys: 'Arjuna, Garlic, Ashwagandha' },
  'charcoal-face-wash': { type: 'Face Wash', keys: 'Activated Charcoal, Aloevera, Tea Tree' },
};

const ORDER = Object.keys(INFO);
const heroProduct = getProduct('skdg-gulkand-250g');

export default function Ingredients() {
  return (
    <main>
      <PageHero eyebrow="Know Your Formulation" title={<>SKDG Herbal <span className="italic text-gold-gradient">Product Information</span></>} sub="Explore the ingredients, benefits, and usage of our premium Ayurvedic formulations." image={heroProduct.image} />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <SectionHeading eyebrow="Transparency First" title={<>Every Product, <span className="italic text-gold-gradient">Explained Honestly</span></>} sub="Real images, real ingredients, moderate claims — exactly as Ayurvedic labelling guidance recommends." />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 -mt-2">
          {ORDER.map((id, i) => {
            const p = getProduct(id);
            if (!p) return null;
            const info = INFO[id];
            return (
              <Reveal key={id} delay={(i % 3) * 0.07}>
                <article className="lux-card glass border border-emerald-deep/10 rounded-[28px] overflow-hidden h-full flex flex-col shadow-[0_20px_50px_-25px_rgba(6,78,59,0.35)]">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-ivory to-cream/70 p-6">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.22em] uppercase bg-emerald-deep text-gold-light px-3.5 py-2 rounded-full shadow">{info.type}</span>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <h2 className="font-display text-2xl text-emerald-ink leading-snug">{p.name}</h2>
                    <div className="flex gap-2.5 mt-4">
                      <span className="w-9 h-9 grid place-items-center rounded-xl bg-emerald-deep/10 text-emerald-deep shrink-0"><Leaf size={16} /></span>
                      <p className="text-sm text-ink/70"><b className="text-emerald-ink">Key Ingredients: </b>{info.keys}</p>
                    </div>
                    <div className="flex gap-2.5 mt-3.5">
                      <span className="w-9 h-9 grid place-items-center rounded-xl bg-gold/20 text-gold-dark shrink-0"><HeartHandshake size={16} /></span>
                      <p className="text-sm text-ink/70"><b className="text-emerald-ink">Benefits: </b>{p.benefits.slice(0, 3).join(', ').toLowerCase().replace(/^./, (c) => c.toUpperCase())}.</p>
                    </div>
                    <div className="flex gap-2.5 mt-3.5">
                      <span className="w-9 h-9 grid place-items-center rounded-xl bg-emerald-deep/10 text-emerald-deep shrink-0"><ClipboardList size={16} /></span>
                      <p className="text-sm text-ink/70"><b className="text-emerald-ink">Usage: </b>{p.usage}</p>
                    </div>
                    <div className="mt-auto pt-5">
                      <Link to={`/products/${p.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-emerald-deep border-t border-emerald-deep/10 w-full pt-4 hover:gap-3.5 transition-all">
                        View Product — ₹{p.price} <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="text-center text-xs text-ink/45 max-w-2xl mx-auto mt-12 leading-relaxed">
            Information only — these traditional formulations support everyday wellness and are not intended to diagnose, treat or cure any disease. Pregnant or medicated users should consult a physician first.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
