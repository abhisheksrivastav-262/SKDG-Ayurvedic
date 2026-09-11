import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Minus, Plus, Package, ChevronDown, Check } from 'lucide-react';
import { waLink } from '../data/site';

const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
  'Jammu & Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh',
  'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
  'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman & Nicobar Islands', 'Chandigarh',
  'Dadra & Nagar Haveli and Daman & Diu',
];

export default function OrderModal({ product, initialQty = 1, onClose }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [qty, setQty] = useState(Math.max(1, initialQty || 1));
  const [errors, setErrors] = useState({});
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);
  const dropOpenRef = useRef(false);
  dropOpenRef.current = dropOpen;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (dropOpenRef.current) setDropOpen(false);
        else onClose();
      }
    };
    const onPointer = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your full name.';
    const digits = mobile.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
    if (!/^[6-9]\d{9}$/.test(digits)) e.mobile = 'Enter a valid 10-digit mobile number.';
    if (!address.trim()) e.address = 'Please enter your full address.';
    if (!state) e.state = 'Please select your state.';
    if (!Number.isInteger(qty) || qty < 1) e.qty = 'Quantity must be at least 1.';
    setErrors(e);
    return { ok: Object.keys(e).length === 0, digits };
  };

  const submit = (ev) => {
    ev.preventDefault();
    const { ok, digits } = validate();
    if (!ok) return;
    const msg =
      `Hello SKDG Ayurvedic,\n\n*New Order Request*\n\n` +
      `*Product:* ${product.name}\n` +
      `*Quantity:* ${qty}\n\n` +
      `*Customer Name:* ${name.trim()}\n` +
      `*Mobile:* ${digits}\n` +
      `*State:* ${state}\n` +
      `*Address:* ${address.trim()}\n\n` +
      `Please confirm my order.`;
    window.open(waLink(msg), '_blank');
    onClose();
  };

  const inputCls = (bad) =>
    `w-full bg-white border rounded-2xl px-4 py-3 text-sm outline-none transition-all placeholder:text-ink/35 ${
      bad ? 'border-red-400 focus:border-red-500' : 'border-emerald-deep/15 focus:border-emerald-deep'
    }`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-emerald-ink/70 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Complete Your Order"
          className="relative w-full max-w-lg glass border border-gold/40 rounded-[28px] shadow-2xl overflow-hidden my-auto"
        >
          <div className="bg-gradient-to-r from-emerald-deep to-emerald-dark px-6 py-5">
            <h2 className="font-display text-2xl text-ivory">Complete Your <span className="italic text-gold-gradient">Order</span></h2>
            <p className="text-ivory/70 text-xs mt-1">Fill your details — we confirm on WhatsApp.</p>
            <button
              onClick={onClose}
              aria-label="Close"
              className="touch-target absolute top-3 right-3 w-10 h-10 grid place-items-center rounded-full bg-white/10 text-ivory hover:bg-gold hover:text-emerald-ink transition-all"
            >
              <X size={18} />
            </button>
          </div>

          <form onSubmit={submit} noValidate className="p-6 space-y-4">
            <div className="flex items-center gap-3 bg-cream/70 border border-gold/30 rounded-2xl px-4 py-3">
              <span className="w-9 h-9 grid place-items-center rounded-xl bg-emerald-deep/10 text-emerald-deep shrink-0">
                <Package size={16} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink/45">Product</p>
                <p className="font-display text-lg text-emerald-ink leading-snug truncate">{product.name}</p>
              </div>
              <span className="ml-auto text-sm font-bold text-emerald-deep whitespace-nowrap">₹{product.price}</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-emerald-ink mb-1.5" htmlFor="ord-name">Full Name *</label>
              <input id="ord-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Rahul Sharma" className={inputCls(errors.name)} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-emerald-ink mb-1.5" htmlFor="ord-mobile">Mobile Number *</label>
              <input id="ord-mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="10-digit mobile number" inputMode="numeric" className={inputCls(errors.mobile)} />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-emerald-ink mb-1.5" htmlFor="ord-state">State *</label>
              <div ref={dropRef} className="relative">
                <button
                  type="button"
                  id="ord-state"
                  aria-haspopup="listbox"
                  aria-expanded={dropOpen}
                  onClick={() => setDropOpen((v) => !v)}
                  className={`${inputCls(errors.state)} flex items-center justify-between gap-2 text-left ${state ? 'text-ink' : 'text-ink/40'}`}
                >
                  <span className="truncate">{state || 'Select state'}</span>
                  <ChevronDown size={16} className={`shrink-0 text-emerald-deep transition-transform ${dropOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropOpen && (
                  <ul
                    role="listbox"
                    aria-label="Select state"
                    className="absolute z-30 left-0 right-0 bg-white border border-emerald-deep/25 rounded-2xl shadow-xl overflow-y-auto overscroll-contain max-h-[220px] md:max-h-[260px] py-2"
                    style={{ top: 'calc(100% + 6px)' }}
                  >
                    {STATES.map((s) => (
                      <li key={s}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={state === s}
                          onClick={() => {
                            setState(s);
                            setDropOpen(false);
                            if (errors.state) setErrors((p) => ({ ...p, state: undefined }));
                          }}
                          className={`w-full flex items-center justify-between gap-2 text-left text-sm px-4 py-2.5 transition-colors ${state === s ? 'bg-emerald-deep/10 font-bold text-emerald-deep' : 'text-ink/75 hover:bg-emerald-deep/5'}`}
                        >
                          <span className="truncate">{s}</span>
                          {state === s && <Check size={15} className="shrink-0 text-emerald-deep" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
              </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-emerald-ink mb-1.5" htmlFor="ord-qty">Quantity *</label>
                <div className={`flex items-center justify-between bg-white border rounded-2xl px-1.5 py-1.5 ${errors.qty ? 'border-red-400' : 'border-emerald-deep/15'}`}>
                  <button type="button" onClick={() => setQty(Math.max(1, (parseInt(qty, 10) || 1) - 1))} aria-label="Decrease quantity" className="touch-target w-9 h-9 grid place-items-center rounded-xl font-bold text-emerald-deep hover:bg-emerald-deep/10">
                    <Minus size={15} />
                  </button>
                  <input
                    id="ord-qty"
                    value={qty}
                    onChange={(e) => {
                      const v = parseInt(e.target.value, 10);
                      setQty(Number.isNaN(v) ? '' : v);
                    }}
                    inputMode="numeric"
                    className="w-10 text-center font-bold outline-none bg-transparent"
                  />
                  <button type="button" onClick={() => setQty((parseInt(qty, 10) || 0) + 1)} aria-label="Increase quantity" className="touch-target w-9 h-9 grid place-items-center rounded-xl font-bold text-emerald-deep hover:bg-emerald-deep/10">
                    <Plus size={15} />
                  </button>
                </div>
                {errors.qty && <p className="text-red-500 text-xs mt-1">{errors.qty}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-emerald-ink mb-1.5" htmlFor="ord-address">Full Address *</label>
              <textarea id="ord-address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="House no, street, area, city, pincode" rows={3} className={`${inputCls(errors.address)} resize-none`} />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

            <button type="submit" className="btn-shine touch-target w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-emerald-deep to-emerald-dark text-ivory font-bold px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <MessageCircle size={17} /> Submit Order
            </button>
            <p className="text-center text-[11px] text-ink/45">Submit par WhatsApp khulega — order wahan confirm hoga.</p>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
