export const PHONE = '+91 89685 18005';
export const PHONE_LINK = '918968518005';
export const INSTAGRAM = '@skdg_ayurvedic_';
export const INSTAGRAM_URL = 'https://instagram.com/skdg_ayurvedic_';

export const waLink = (message) =>
  `https://wa.me/${PHONE_LINK}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WA_MSG =
  'Hello SKDG Ayurvedic, I would like to know more about your Ayurvedic products.';

export const orderLink = (productName, price) =>
  waLink(
    `Hello SKDG Ayurvedic, I would like to order *${productName}*${price ? ` (₹${price})` : ''}. Please share availability and delivery details.`
  );

const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: img('photo-1512069772995-ec65ed45afd6', 1800),
  heroAlt: img('photo-1471193945509-9ad0617afabf', 1800),
  bowls: img('photo-1515023115689-589c33041d3c', 1200),
  mortar: img('photo-1471864190281-a93a3070b6de', 1200),
  spa: img('photo-1544161515-4ab6ce6db874', 1200),
  spaMassage: img('photo-1540555700478-4be289fbecef', 1200),
  spices: img('photo-1509358271058-acd22cc93898', 1200),
  spiceMarket: img('photo-1596040033229-a9821ebd058d', 1200),
  cooking: img('photo-1466637574441-749b8f19452f', 1200),
  oils: img('photo-1607619056574-7b8d3ee536b2', 1200),
  serum: img('photo-1608571423902-eed4a5ad8108', 1200),
  cream: img('photo-1608248543803-ba4f8c70ae0b', 1200),
  skincare: img('photo-1556228578-8c89e6adf883', 1200),
  skincareSet: img('photo-1571781926291-c477ebfd024b', 1200),
  tea: img('photo-1564890369478-c89ca6d9cde9', 1200),
  teaPour: img('photo-1546874177-9d664107314e', 1200),
  honey: img('photo-1587049352846-4a222e784d38', 1200),
  juice: img('photo-1584362917165-526a968579e8', 1200),
  aloe: img('photo-1615485500704-8e990f9900f7', 1200),
  cactus: img('photo-1509423350716-97f9360b4e09', 1200),
  yoga: img('photo-1524863479829-916d8e77f114', 1200),
  spaCandle: img('photo-1519823551278-64ac92734fb1', 1200),
};
