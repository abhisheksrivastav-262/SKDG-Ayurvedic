import { PRODUCTS } from './products';

const P = (id) => PRODUCTS.find((p) => p.id === id);

const make = (slug, productId, category, date, read, excerpt, paras, benefits, usage) => ({
  slug,
  productId,
  title: P(productId).name,
  image: P(productId).image,
  category,
  date,
  read,
  excerpt,
  paras,
  benefits,
  usage,
});

export const BLOGS = [
  make(
    'skdg-gulkand-benefits', 'skdg-gulkand-250g', 'Digestion', 'Aug 28, 2026', '5 min read',
    'Cooling rose preserve for digestion, body heat and everyday gut wellness.',
    [
      'SKDG Gulkand is a traditional Ayurvedic rose-petal preserve, slow-crafted from fresh desi gulab and mishri. In Ayurveda, rose is sheetala — naturally cooling — which is why Gulkand has been the summer staple of Indian households for centuries, calming excess body heat from within.',
      'A spoon of Gulkand after meals supports smooth digestion, helps relieve acidity and constipation, and gently detoxifies the gut. Its cooling property also soothes the mind, supports restful sleep and brings a natural glow to the skin, since Ayurveda links clear skin directly to a clean digestive system.',
      'Unlike refined sweets, SKDG Gulkand contains no artificial colours or flavours — only pure rose petals prepared the traditional way. Available in 250g, 500g and 1kg packs, it is safe for the whole family, including children and elders.',
    ],
    ['Cools excess body heat naturally', 'Eases acidity, gas & constipation', 'Supports gut detox & clear skin', 'Calms the mind & aids sleep'],
    'Take 1–2 teaspoons daily after meals, with milk or water. Use a dry spoon and store in a cool place.'
  ),
  make(
    'shainshah-gold-vitality', 'shainshah-gold-capsule', 'Vitality', 'Aug 25, 2026', '5 min read',
    'Shilajit, Kesar & Swarn Bhasma capsules for energy, stamina and vitality.',
    [
      'Shainshah Gold Capsule is SKDG\u2019s premium vitality formulation, built around three legendary Ayurvedic treasures — Himalayan Shilajit, Kashmiri Kesar and Swarn Bhasma. Together they form a классикal vajikarana-style blend designed to rebuild deep energy rather than give a short stimulant kick. Regular use helps restore strength, confidence and everyday performance naturally.',
      'Shilajit supplies fulvic acid and trace minerals that support cellular energy and faster recovery, while Kesar acts as a powerful antioxidant for mood, stamina and reproductive wellness. Swarn Bhasma, prepared through classical purification, is traditionally used to strengthen immunity and overall vigour.',
      'With 60 capsules per pack, this is a complete two-month vitality course for men facing fatigue, low stamina or post-illness weakness. Best taken consistently with warm milk alongside a nourishing diet and proper sleep.',
    ],
    ['Boosts energy & physical stamina', 'Supports vitality & reproductive wellness', 'Aids recovery from fatigue & weakness', 'Strengthens immunity with Swarn Bhasma'],
    'Take 1 capsule twice daily with warm milk after meals, or as directed by a physician.'
  ),
  make(
    'pancham-haldi-immunity', 'pancham-haldi', 'Immunity', 'Aug 22, 2026', '4 min read',
    'Five-herb turmeric blend for inflammation care and daily immunity.',
    [
      'Pancham Haldi takes the humble haldi-doodh tradition five steps further. Alongside high-curcumin turmeric, it blends four supporting Ayurvedic herbs that improve absorption and widen its action — because Ayurveda has always known that turmeric works best in combination, not isolation. This synergy follows the classical Ayurvedic principle that herbs work best in thoughtful combination.',
      'Curcumin is one of nature\u2019s most researched anti-inflammatory compounds, supporting joint comfort, respiratory health and a balanced immune response. Daily use helps the body handle seasonal changes, pollution stress and everyday aches with greater resilience.',
      'The 100g family pack mixes effortlessly into warm milk or water. For best absorption, always pair turmeric with a little healthy fat (milk or ghee) and a pinch of black pepper — exactly as the shastras prescribe.',
    ],
    ['Supports a strong immune response', 'Helps manage everyday inflammation', 'Supports joints & respiratory wellness', 'Five-herb synergy for better absorption'],
    'Mix 1 teaspoon in warm milk or water every morning. Add a pinch of black pepper for absorption.'
  ),
  make(
    'skdg-herbal-tea-detox', 'skdg-herbal-tea', 'Detox', 'Aug 19, 2026', '4 min read',
    'A heart-friendly herbal brew for detox, metabolism and daily ritual.',
    [
      'SKDG Herbal Tea turns an ordinary chai break into a healing ritual. This 100g jar blends handpicked Ayurvedic botanicals traditionally used to kindle agni — the digestive fire — so every cup gently detoxifies while refreshing the senses without caffeine jitters. It is a gentle daily cleanse suitable for every member of the family.',
      'Regular sipping supports healthy metabolism, comfortable digestion after meals and cardiovascular wellness. The warming herbs help clear sluggishness and heaviness, making it an ideal morning starter or evening wind-down for the whole family.',
      'Brewing is simple: one teaspoon steeped 3–4 minutes in hot water. Drink it plain or with a drop of honey (added only after cooling slightly, as Ayurveda advises) for a café-style wellness ritual at home.',
    ],
    ['Gently detoxifies & refreshes daily', 'Supports metabolism & digestion', 'Heart-friendly, caffeine-smart ritual', 'warming herbs clear sluggishness'],
    'Brew 1 teaspoon in hot water for 3–4 minutes. Enjoy morning and evening, plain or with honey.'
  ),
  make(
    'liver-care-syrup-wellness', 'liver-care-syrup', 'Liver Care', 'Aug 16, 2026', '5 min read',
    'Hepatoprotective tonic that refreshes and supports the liver.',
    [
      'In Ayurveda the liver (yakrit) is the seat of pitta — the fire that governs digestion, blood purity and energy. SKDG Liver Care Syrup is a hepatoprotective tonic crafted to cool, cleanse and strengthen this hardworking organ with classical liver-supporting herbs plus natural enzymes.',
      'The 225ml tonic supports overall liver function, helps protect liver cells from everyday damage caused by rich food, pollution and irregular routines, and aids smoother digestion. It is traditionally used in cases of liver disorders, sluggish digestion and flatulence.',
      'Because it is 100% natural with no artificial colours, the syrup suits long, gentle courses rather than quick fixes. Pair it with light, timely meals and limited alcohol for the deep liver reset Ayurveda recommends each season.',
    ],
    ['Supports overall liver function', 'Helps protect liver cells from damage', 'Aids digestion & reduces flatulence', '100% natural, no artificial colours'],
    'Take 10ml twice daily after meals, or as directed. Shake well before use.'
  ),
  make(
    'liver-care-powder-metabolism', 'liver-care-powder', 'Liver Care', 'Aug 13, 2026', '4 min read',
    'Everyday powder for liver strength, bowel regularity and metabolism.',
    [
      'SKDG Liver Care Powder brings liver care into the simplest daily format — one spoon in lukewarm water. This 100g powder combines laxative-cleansing and liver-strengthening herbs that help eliminate accumulated toxins while toning digestion from the root.',
      'It is traditionally used for sluggish liver, irregular bowel habits, poor appetite and toxin overload that shows up as dull skin, heaviness or low energy. By keeping elimination regular, the powder lets the liver rest and regenerate instead of constantly firefighting. The result is lighter digestion, clearer skin and steadier daily energy.',
      'Gentle enough for daily use yet effective across 8–12 week courses, it pairs beautifully with the Liver Care Syrup for a complete inside-out liver program — powder for cleansing rhythm, syrup for deep nourishment.',
    ],
    ['Supports liver & sluggish-liver care', 'Eliminates toxins from the body', 'Regulates bowel habits naturally', 'Improves appetite & digestion'],
    'Take 1 teaspoon twice daily with lukewarm water after meals. Keep airtight in a cool place.'
  ),
  make(
    'ortho-ds-joint-support', 'ortho-ds-capsules', 'Joint Care', 'Aug 10, 2026', '5 min read',
    'Classical capsules for arthritis comfort, joints and easy mobility.',
    [
      'Stiff mornings, crackling knees and aching backs are classic signs of aggravated vata settling in the joints. SKDG Ortho DS Capsules use time-tested Vata-balancing herbs to lubricate joints, calm inflammation and restore comfortable movement — without the gastric side effects of synthetic painkillers. Its herbs nourish joint tissues while calming the inflammation behind stiffness and pain.',
      'The 30-capsule pack is traditionally helpful in relieving arthritis pain and general joint pain, supporting cartilage comfort and day-to-day mobility for elders, athletes and desk workers alike. Consistent use matters: Ayurvedic joint care rebuilds over weeks, not hours.',
      'For deeper relief, pair the capsules with warm sesame-oil massage and gentle joint exercises. Avoid cold, dry foods during the course, and favour warm, unctuous meals that pacify vata from within.',
    ],
    ['Helps relieve arthritis & joint pain', 'Supports flexibility & mobility', 'Vata-balancing, stomach-friendly herbs', 'Ideal for elders & active lifestyles'],
    'Take 1–2 capsules twice daily after meals with warm water for 8–12 weeks.'
  ),
  make(
    'orthi-rlif-oil-relief', 'orthi-rlif-oil', 'Joint Care', 'Aug 07, 2026', '4 min read',
    'Warming herbal oil for winter stiffness, muscles and tired bones.',
    [
      'Abhyanga — warm oil massage — is Ayurveda\u2019s first prescription for body pain, and Orthi Rlif Pain Relief Oil bottles that wisdom for modern life. Its warming herbal base penetrates stiff muscles and aching joints, a comfort especially precious during cold winter months when vata pain peaks.',
      'Regular massage with the 100ml oil helps strengthen bones and the body, eases knee, back and shoulder discomfort, and improves local circulation so tissues recover faster. The ritual itself calms the nervous system, melting the tension that amplifies pain. With regular use, joints feel looser, warmer and more comfortable through the day.',
      'For best results, warm the oil slightly, massage with firm upward strokes for 10–15 minutes, then rest the area warm. Combine with Ortho DS Capsules for inside-out joint care through the season.',
    ],
    ['Eases joint, knee & muscle pain', 'Warming comfort for winter stiffness', 'Strengthens bones & improves mobility', 'Relaxing massage ritual for pain & stress'],
    'Warm slightly and massage the affected area twice daily. Keep the area warm afterwards.'
  ),
  make(
    'bhumi-amla-digestion', 'bhumi-amla-churan', 'Digestion', 'Aug 04, 2026', '4 min read',
    'The classical gut churan to cleanse, repair and regulate digestion.',
    [
      'Bhumi Amla (Phyllanthus niruri) is one of Ayurveda\u2019s most trusted liver-and-gut herbs, and this 100g churan delivers it in its purest powdered form. Its tikta (bitter) taste kindles digestion, cools excess pitta and helps the intestines cleanse and repair themselves naturally. This bitter action also supports healthy liver function and balanced pitta.',
      'The churan is traditionally used to relieve chronic constipation patterns, sluggish digestion and the toxin build-up behind dull skin and low appetite. Being 100% pure with no additives, it works as a gentle daily regulator rather than a harsh purge.',
      'Three generations of packaging photos in our gallery show the same honest recipe families have trusted for years. Take it consistently after meals with lukewarm water and let simple, regular digestion rebuild your energy from the gut outward.',
    ],
    ['Cleanses, repairs & regulates the gut', 'Relieves constipation & sluggish digestion', 'Cools pitta & supports liver health', '100% pure, gentle for daily use'],
    'Take 1 teaspoon twice daily with lukewarm water after meals. Store airtight in a cool, dark place.'
  ),
  make(
    'diabetes-care-gold-sugar', 'diabetes-care-gold-churan', 'Metabolism', 'Aug 01, 2026', '5 min read',
    'Herbal support for healthy blood sugar as part of a balanced lifestyle.',
    [
      'In Ayurveda, blood-sugar imbalance (madhumeha) is seen as a deep metabolic and digestive disorder — not just a number on a meter. Diabetes Care Gold Churan addresses that root with bitter, metabolism-kindling herbs that support healthy glucose balance alongside diet and activity. Bitter herbs also curb sugar cravings and support steady energy through the day.',
      'The 100g churan helps cleanse and repair intestinal health (where nutrient absorption and sugar spikes begin), supports pancreatic function in the classical sense, and steadies the energy crashes that follow heavy meals.',
      'It works best as part of a full lifestyle: timely low-glycemic meals, a daily walk, early sleep and stress control. Those on medication should monitor sugar regularly and consult their doctor, using this churan as supportive — not replacement — care.',
    ],
    ['Supports healthy blood-sugar balance', 'Cleanses & repairs gut metabolism', 'Steadies post-meal energy crashes', 'Complements diet, walk & routine discipline'],
    'Take 1 teaspoon twice daily with lukewarm water. Monitor sugar and consult your doctor regularly.'
  ),
  make(
    'bp-cardio-heart-care', 'bp-cardio-capsules', 'Heart Care', 'Jul 29, 2026', '5 min read',
    'Ayurvedic capsules for cardiovascular strength and BP balance.',
    [
      'The heart (hridaya) is described in Ayurveda as the root of circulation and emotion alike — strained by salt-heavy food, stress, poor sleep and sedentary days. SKDG BP & Cardio Capsules combine heart-toning (hridya) herbs that support cardiovascular strength and help maintain healthy blood pressure. They also support calm nerves, better sleep and balanced circulation day after day.',
      'The 30-capsule course supports smooth circulation, calms the vata-pitta restlessness behind pressure fluctuations, and provides antioxidant protection to blood vessels stressed by modern life.',
      'Capsules work hardest alongside heart-smart habits: 30 minutes of walking, less refined salt, timely meals, and conscious unwinding before bed. Those on BP medication should continue it and use this as supportive care under guidance.',
    ],
    ['Supports cardiovascular strength', 'Helps maintain healthy blood pressure', 'Antioxidant care for blood vessels', 'Calms stress-linked pressure swings'],
    'Take 1–2 capsules twice daily after meals with water. Continue prescribed medication alongside.'
  ),
  make(
    'neem-aloevera-skin-clarity', 'neem-aloevera-face-wash', 'Skin Care', 'Jul 26, 2026', '4 min read',
    'Neem-depth cleansing plus aloevera calm for clear, fresh skin.',
    [
      'Acne, excess oil and dullness begin with clogged pores and aggravated pitta — and this 100ml face wash answers both. Neem, Ayurveda\u2019s legendary blood-purifier, brings antibacterial depth-cleansing that helps control pimples at the source, while aloevera cools, hydrates and repairs the skin barrier.',
      'The paraben-and-SLS-free formula suits all skin types, including sensitive and teenage skin, because it cleans without stripping natural moisture. Skin feels fresh, balanced and visibly clearer with every passing week. Twice-daily use keeps pores clear, shine balanced and complexion visibly fresher within weeks.',
      'For complete clarity, pair the outer cleanse with inner balance: plenty of water, less fried food, and Bhumi Amla Churan for gut-level detox that shows on the face.',
    ],
    ['Purifies skin & unclogs pores', 'Helps control acne & pimples', 'Paraben & SLS free, all skin types', 'Aloevera cools & repairs skin barrier'],
    'Massage onto a wet face for 30 seconds, rinse. Use morning and night.'
  ),
  make(
    'ubtan-face-wash-glow', 'ubtan-face-wash', 'Skin Care', 'Jul 23, 2026', '4 min read',
    'Turmeric, sandalwood & saffron — the ancient ubtan glow ritual.',
    [
      'Long before chemical brightening creams, Indian brides glowed with ubtan — a paste of turmeric, sandalwood and saffron. SKDG Ubtan Face Wash bottles that exact ritual in a gentle 100ml daily cleanser, so every wash is a mini haldi ceremony. Each cleanse gently polishes the skin while feeding it with time-tested botanical nutrition.',
      'Turmeric brightens and fights blemish-causing bacteria, sandalwood cools and evens tone, and saffron — the world\u2019s most precious glow herb — illuminates dull, tanned skin. Together they remove tan, cleanse deeply and leave a lit-from-within radiance.',
      'The 100% natural-actives, paraben-free base suits all skin types and daily use. Massage for a full minute to let the botanicals activate, and follow with a light moisturiser to seal the glow.',
    ],
    ['Removes tan & brightens tone', 'Deeply cleanses & illuminates skin', 'Turmeric, sandalwood & real saffron', 'Paraben & SLS free, all skin types'],
    'Massage onto a wet face for a minute, rinse. Use twice daily, then moisturise.'
  ),
  make(
    'charcoal-face-wash-detox', 'charcoal-face-wash', 'Skin Care', 'Jul 20, 2026', '4 min read',
    'Activated charcoal depth-detox for oily, city-stressed skin.',
    [
      'City skin battles daily pollution, sweat and excess sebum that ordinary cleansers leave behind. SKDG Charcoal Face Wash uses activated charcoal — a porous, magnet-like Ayurvedic-compatible detoxifier — to draw out deep impurities, excess oil and pore-clogging grime in one wash. Pores look tighter, shine stays balanced and the face feels deeply refreshed after every wash.',
      'The result is a soft, silky, glowing complexion with visibly tighter-looking pores and balanced shine, without the stretchy dryness of harsh foams. Its oil-control plus acne-control action makes it the go-to 50ml companion for oily and combination skin.',
      'Use it as your evening reset to wash the day off, and follow with a light, non-comedogenic moisturiser. For persistent acne, support the outer detox with gut-cleansing herbs and adequate sleep.',
    ],
    ['Deep-cleanses pores & pollution buildup', 'Controls oil & helps prevent acne', 'Soft, silky, glowing complexion', 'Ideal for oily & combination skin'],
    'Massage onto a wet face, rinse thoroughly. Use morning and night, then moisturise lightly.'
  ),
  make(
    'leco-protct-ds-wellness', 'leco-protct-ds-syrup', 'Women\u2019s Wellness', 'Jul 17, 2026', '5 min read',
    'A complete Ayurvedic health tonic crafted for women\u2019s wellness.',
    [
      'Women\u2019s intimate health concerns — from leucorrhoea and irregular cycles to urinary discomfort — are spoken of too little and suffered too long. SKDG Leco Protct-DS Syrup is a classical-style complete health tonic formulated to support these needs with dignity and gentle herbal strength. Its nourishing herbs also build everyday strength, immunity and feminine vitality from within.',
      'Its Ayurvedic botanicals traditionally help manage abnormal discharge, soothe irritation and itching, support urinary tract health and encourage menstrual regularity — while nourishing overall strength from within.',
      'Because intimate wellness connects deeply to stress, hygiene and hormonal rhythm, pair the tonic with timely meals, adequate hydration, gentle exercise and proper rest. Persistent symptoms deserve a doctor\u2019s evaluation alongside this supportive care.',
    ],
    ['Supports leucorrhoea & discharge care', 'Helps urinary tract comfort', 'Encourages menstrual regularity', 'Nourishes overall women\u2019s strength'],
    'Take 10ml twice daily after meals, or as directed. Shake well before use.'
  ),
];

export const getBlog = (slug) => BLOGS.find((b) => b.slug === slug);
