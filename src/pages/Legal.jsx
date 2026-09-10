import { Reveal, PageHero } from '../components/ui';
import { IMAGES } from '../data/site';

function Doc({ children }) {
  return (
    <section className="max-w-3xl mx-auto px-5 md:px-8 py-14">
      <Reveal>
        <article className="bg-white border border-emerald-deep/10 rounded-[28px] p-8 md:p-12 shadow-lg prose-ayurveda space-y-5 text-[15px] leading-relaxed text-ink/70">
          {children}
        </article>
      </Reveal>
    </section>
  );
}

export function Privacy() {
  return (
    <main>
      <PageHero eyebrow="Legal" title="Privacy Policy" sub="Last updated: January 2026 · SKDG Ayurvedic" image={IMAGES.spa} />
      <Doc>
        <h2 className="font-display text-2xl text-emerald-ink">1. Information We Collect</h2>
        <p>When you contact us via WhatsApp, Instagram or our contact form, we receive your name, phone number, email and message content. We use this solely to respond, fulfil orders and provide wellness guidance.</p>
        <h2 className="font-display text-2xl text-emerald-ink">2. How We Use It</h2>
        <p>Your details are used for order processing, delivery coordination, customer support and (only with consent) occasional product updates. We never sell, rent or share your data with third-party marketers.</p>
        <h2 className="font-display text-2xl text-emerald-ink">3. WhatsApp & Instagram</h2>
        <p>Conversations on WhatsApp (+91 89685 18005) and Instagram (@skdg_ayurvedic_) are governed additionally by those platforms' privacy policies.</p>
        <h2 className="font-display text-2xl text-emerald-ink">4. Data Security</h2>
        <p>Order and enquiry records are stored securely with access limited to the SKDG fulfilment team. You may request correction or deletion anytime via WhatsApp.</p>
        <h2 className="font-display text-2xl text-emerald-ink">5. Cookies</h2>
        <p>This website uses only essential technical storage for a smooth browsing experience — no advertising trackers.</p>
        <h2 className="font-display text-2xl text-emerald-ink">6. Contact</h2>
        <p>Questions? Message us on WhatsApp at +91 89685 18005 or Instagram @skdg_ayurvedic_.</p>
      </Doc>
    </main>
  );
}

export function Terms() {
  return (
    <main>
      <PageHero eyebrow="Legal" title="Terms & Conditions" sub="Last updated: January 2026 · SKDG Ayurvedic" image={IMAGES.bowls} />
      <Doc>
        <h2 className="font-display text-2xl text-emerald-ink">1. Products & Wellness Disclaimer</h2>
        <p>SKDG Ayurvedic products are traditional wellness formulations, not substitutes for medical diagnosis or treatment. Results vary by individual; consistent use with diet and lifestyle is recommended. Consult a doctor if pregnant, lactating, or on medication.</p>
        <h2 className="font-display text-2xl text-emerald-ink">2. Ordering via WhatsApp</h2>
        <p>Orders placed on WhatsApp (+91 89685 18005) are confirmed with price, shipping and delivery timeline before dispatch. COD is available in most pincodes.</p>
        <h2 className="font-display text-2xl text-emerald-ink">3. Pricing & Payments</h2>
        <p>All prices are in INR, inclusive of taxes unless stated. Shipping is free above ₹499. UPI, bank transfer and COD accepted as confirmed on chat.</p>
        <h2 className="font-display text-2xl text-emerald-ink">4. Shipping & Returns</h2>
        <p>Dispatch in 24–48 hours; delivery in 3–6 working days across India. Damaged or wrong items reported within 48 hours of delivery (with unboxing photos) are replaced or refunded.</p>
        <h2 className="font-display text-2xl text-emerald-ink">5. Intellectual Property</h2>
        <p>All brand content, imagery and formulations descriptions belong to SKDG Ayurvedic and may not be reproduced without permission.</p>
        <h2 className="font-display text-2xl text-emerald-ink">6. Governing Law</h2>
        <p>These terms are governed by the laws of India, with jurisdiction in Punjab.</p>
      </Doc>
    </main>
  );
}
