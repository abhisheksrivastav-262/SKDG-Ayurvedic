import { IMAGES } from './site';

export const INGREDIENTS = [
  { name: 'Ashwagandha', latin: 'Withania somnifera', ayurvedic: 'Rasayana • Vajikarana', image: IMAGES.mortar, benefits: ['Lowers stress & cortisol', 'Boosts strength & stamina', 'Deepens sleep'], traditional: 'Used for 3000+ years as a rejuvenating Rasayana for warriors and yogis.', modern: 'Adaptogen for work stress, gym recovery and better sleep.' },
  { name: 'Giloy', latin: 'Tinospora cordifolia', ayurvedic: 'Amrita • Immunomodulator', image: IMAGES.juice, benefits: ['Strengthens immunity', 'Supports fever recovery', 'Purifies blood'], traditional: 'Called Amrita — the nectar of immortality — for chronic fever and debility.', modern: 'Daily immunity juice, post-viral recovery and skin clarity.' },
  { name: 'Tulsi', latin: 'Ocimum sanctum', ayurvedic: 'Holy Basil • Kapha-Vata hara', image: IMAGES.tea, benefits: ['Fights cough & cold', 'Eases stress', 'Supports lungs'], traditional: 'Sacred plant worshipped in every home; decoctions for cough and prayer alike.', modern: 'Tulsi drops, herbal teas and pollution-defence rituals.' },
  { name: 'Shilajit', latin: 'Asphaltum punjabianum', ayurvedic: 'Mineral Rasayana', image: IMAGES.cooking, benefits: ['Raw energy & stamina', 'Fulvic acid minerals', 'Faster recovery'], traditional: 'Harvested from Himalayan rocks; prescribed for vitality and longevity.', modern: 'Pre-workout resin, Himalayan mineral stack for men’s strength.' },
  { name: 'Amla', latin: 'Emblica officinalis', ayurvedic: 'Dhatri • Vitamin C queen', image: IMAGES.spiceMarket, benefits: ['Vitamin C + antioxidants', 'Hair growth & shine', 'Gut-friendly'], traditional: 'Mother fruit — Dhatri — core of Chyawanprash and Triphala.', modern: 'Powders, candies and glow-from-within routines.' },
  { name: 'Neem', latin: 'Azadirachta indica', ayurvedic: 'Sarva Roga Nivarini', image: IMAGES.aloe, benefits: ['Clear acne-prone skin', 'Blood purification', 'Oral care'], traditional: 'Village pharmacy — twigs for teeth, leaves for skin, bark for fever.', modern: 'Capsules for acne, detox and sugar-balance support.' },
  { name: 'Brahmi', latin: 'Bacopa monnieri', ayurvedic: 'Medhya Rasayana', image: IMAGES.honey, benefits: ['Memory & focus', 'Calm anxiety', 'Better sleep'], traditional: 'Brain tonic given to students and meditators for dharana.', modern: 'Study syrups, focus stacks and digital-calm routines.' },
  { name: 'Turmeric', latin: 'Curcuma longa', ayurvedic: 'Haridra • Golden healer', image: IMAGES.spices, benefits: ['Joint comfort', 'Glowing skin', 'Antioxidant shield'], traditional: 'Haldi-doodh for injuries; paste for weddings and wounds.', modern: 'Golden milk, curcumin capsules and skin rituals.' },
];

export const TESTIMONIALS = [
  { name: 'Priya Sharma', city: 'Jaipur', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop', text: 'Ashwagandha capsules changed my sleep completely. Within 3 weeks I felt calmer, stronger and genuinely rested. Truly premium quality.' },
  { name: 'Rajesh Kumar', city: 'Ludhiana', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop', text: 'Joint Relief Oil gave my father mobility back. He climbs stairs without pain now. We order on WhatsApp — delivery is always on time.' },
  { name: 'Anita Desai', city: 'Mumbai', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop', text: 'Hair Wellness Oil stopped my hair fall in 2 months. Smells divine, non-sticky, and my parlour asked what I was using!' },
  { name: 'Vikram Mehta', city: 'Delhi', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop', text: 'Pure Shilajit Resin is authentic — dissolves clean, gives steady energy for workouts. Best I have tried in India.' },
  { name: 'Kavitha Reddy', city: 'Hyderabad', rating: 5, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop', text: 'Giloy Juice for the whole family through seasonal change. No colds this winter. Packaging felt like a luxury gift.' },
  { name: 'Amit Patel', city: 'Ahmedabad', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop', text: 'Digestive Churna fixed years of acidity without side effects. SKDG feels like a brand that genuinely cares.' },
];

export const BLOGS = [
  { slug: 'benefits-of-ashwagandha', title: '7 Science-Backed Benefits of Ashwagandha', excerpt: 'From cortisol to deep sleep — why this 3000-year-old root is the modern stress antidote.', image: IMAGES.mortar, date: 'Aug 28, 2026', read: '6 min read', category: 'Herbs' },
  { slug: 'daily-ayurvedic-routine', title: 'The Perfect Daily Ayurvedic Routine (Dinacharya)', excerpt: 'A practical morning-to-night ritual for energy, digestion and calm — in 30 minutes.', image: IMAGES.yoga, date: 'Aug 20, 2026', read: '8 min read', category: 'Lifestyle' },
  { slug: 'immunity-through-ayurveda', title: 'Immunity Through Ayurveda: Giloy, Tulsi & Amla', excerpt: 'Build a season-proof shield with three kitchen legends and one morning ritual.', image: IMAGES.tea, date: 'Aug 12, 2026', read: '5 min read', category: 'Immunity' },
  { slug: 'herbal-wellness-guide', title: 'Herbal Wellness Guide: Oils, Churnas & Syrups', excerpt: 'Capsule or kadha? Oil or syrup? How to choose the right format for your body.', image: IMAGES.oils, date: 'Aug 02, 2026', read: '7 min read', category: 'Guide' },
  { slug: 'best-herbs-for-stress', title: '5 Best Herbs for Stress & Better Sleep', excerpt: 'Brahmi, Ashwagandha, Jatamansi and more — calm your nervous system naturally.', image: IMAGES.spaCandle, date: 'Jul 24, 2026', read: '6 min read', category: 'Mind' },
  { slug: 'turmeric-benefits', title: 'Turmeric: The Golden Healer for Joints & Skin', excerpt: 'How to unlock curcumin absorption and use haldi like Ayurveda intended.', image: IMAGES.spices, date: 'Jul 15, 2026', read: '5 min read', category: 'Herbs' },
];

export const GALLERY = [
  { src: IMAGES.hero, label: 'Herbal Harvest', cat: 'Herbs' },
  { src: IMAGES.bowls, label: 'Botanical Blends', cat: 'Herbs' },
  { src: IMAGES.mortar, label: 'Stone-Ground Formulations', cat: 'Manufacturing' },
  { src: IMAGES.oils, label: 'Cold-Infused Oils', cat: 'Products' },
  { src: IMAGES.spa, label: 'Ayurveda Therapy', cat: 'Lifestyle' },
  { src: IMAGES.spaMassage, label: 'Abhyanga Ritual', cat: 'Lifestyle' },
  { src: IMAGES.spices, label: 'Raw Spice Grading', cat: 'Herbs' },
  { src: IMAGES.spiceMarket, label: 'Farm Sourcing', cat: 'Herbal Farms' },
  { src: IMAGES.tea, label: 'Kadha Rituals', cat: 'Lifestyle' },
  { src: IMAGES.honey, label: 'Avaleha Crafting', cat: 'Manufacturing' },
  { src: IMAGES.serum, label: 'Hair Wellness Range', cat: 'Products' },
  { src: IMAGES.skincareSet, label: 'Luxury Packaging', cat: 'Packaging' },
];

export const FAQS = [
  { q: 'Are SKDG Ayurvedic products 100% authentic & natural?', a: 'Yes. Every formulation uses traceable, farm-sourced herbs, is manufactured in GMP-certified facilities, batch-tested for heavy metals and microbes, and contains no steroids, chemicals or artificial additives.' },
  { q: 'How do I order on WhatsApp?', a: 'Tap any "WhatsApp Order" button or message +91 95922 44442. Share the product name and your address — our team confirms availability, price and delivery within minutes during business hours.' },
  { q: 'How long before I see results?', a: 'Ayurveda works at the root. Most customers feel digestion, sleep or energy shifts in 2–3 weeks, with deeper results over 8–12 weeks of consistent use alongside diet and routine.' },
  { q: 'Are there any side effects?', a: 'Our products use classical, food-grade herbs at safe doses and are generally well tolerated. Pregnant/lactating women and those on medication should consult a doctor or our wellness team first.' },
  { q: 'What is the shipping time & cost?', a: 'Orders dispatch within 24–48 hours across India and arrive in 3–6 working days. Shipping is free above ₹499; COD is available in most pincodes.' },
  { q: 'How should I store Ayurvedic products?', a: 'Keep capsules, churnas and oils in a cool, dry place away from sunlight. Refrigerate juices/syrups after opening and always use a dry spoon for avaleha and powders.' },
  { q: 'Do you offer bulk / reseller / clinic partnerships?', a: 'Yes — we partner with clinics, gyms, spas and retailers. Message us on WhatsApp with your business details for wholesale pricing and display kits.' },
  { q: 'Which product is right for me?', a: 'Message us your concern (sleep, stress, hair, joints, immunity, digestion) on WhatsApp or Instagram @skdg_ayurvedic_ and our experts will suggest a personalised routine — free.' },
];
