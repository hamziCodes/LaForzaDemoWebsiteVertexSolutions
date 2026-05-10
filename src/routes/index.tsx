import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Dumbbell,
  Target,
  TrendingUp,
  Zap,
  Activity,
  Shield,
  Minus,
  Play,
  Instagram,
  Youtube,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Image as ImageIcon,
  Copy,
  Check,
  Star,
  Flame,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "La Forza Gym — Coming to Bahria Town, Lahore" },
      {
        name: "description",
        content:
          "La Forza's flagship Lahore location is arriving. Secure your founding membership before the doors open.",
      },
    ],
  }),
});

// Premium liquid fade-in preset for Framer Motion
const EASE = [0.16, 1, 0.3, 1] as const;
const liquidIn = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true as const, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

// ---------------- LOGO ----------------
function ForzaLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="bolt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      {/* Stylised slanted Z / lightning bolt mark */}
      <polygon
        points="78,8 32,46 56,50 22,92 30,52 12,48"
        fill="url(#bolt)"
        stroke="#7f1d1d"
        strokeWidth="0.6"
      />
      <polygon points="86,46 60,68 70,70 54,86 62,68 52,66" fill="url(#bolt)" opacity="0.95" />
    </svg>
  );
}

function BrandMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dims = size === "lg" ? "w-12 h-12" : size === "sm" ? "w-7 h-7" : "w-9 h-9";
  const text = size === "lg" ? "text-4xl md:text-5xl" : size === "sm" ? "text-xl" : "text-2xl";
  return (
    <a href="#" className="flex items-center gap-2.5 group">
      <ForzaLogo
        className={`${dims} drop-shadow-[0_0_12px_rgba(220,38,38,0.45)] transition-transform group-hover:scale-105`}
      />
      <span
        className={`font-playfair ${text} font-semibold text-white tracking-tight leading-none`}
      >
        La Forza
      </span>
    </a>
  );
}

const VertexBadge = ({ variant = "header" }: { variant?: "header" | "footer" }) => {
  if (variant === "footer") {
    return (
      <span className="inline-block border border-[#2a2a2a] px-4 py-1 text-gray-600 text-xs tracking-widest uppercase">
        Designed &amp; Developed as a Demo by VERTEX SOLUTIONS
      </span>
    );
  }
  return (
    <span className="hidden lg:inline-block border border-red-600/60 rounded-full px-3 py-1 text-red-500 text-[10px] font-semibold tracking-widest uppercase">
      Demo by VERTEX SOLUTIONS
    </span>
  );
};

// ---------------- NAV ----------------
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Equipment", href: "#equipment" },
    { label: "Plans", href: "#plans" },
    { label: "Register", href: "#register" },
    { label: "Tour", href: "#tour" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/40 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BrandMark size="md" />
          <VertexBadge />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-400 hover:text-white text-sm tracking-widest uppercase border-b border-transparent hover:border-red-600 pb-1 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#register"
            className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
          >
            Claim Your Spot
          </a>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 text-sm tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="bg-red-600 text-white text-sm font-bold px-5 py-3 text-center tracking-widest uppercase"
          >
            Claim Your Spot
          </a>
        </div>
      )}
    </header>
  );
}

// ---------------- HERO ----------------
function Hero() {
  const stats = [
    { n: "15,000 SQ FT", l: "World-Class Facility" },
    { n: "100+", l: "Premium Machines" },
    { n: "Islamabad", l: "Flagship Since 2019" },
  ];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-[#0a0a0a] to-[#0a0a0a]">
      {/* Ambient glows */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-700/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-900/10 blur-3xl" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        poster=""
      >
        <source src="" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-semibold mb-6">
          Coming to Bahria Town, Lahore
        </p>
        <h1 className="font-anton text-6xl md:text-8xl uppercase tracking-wider leading-none">
          <span className="block text-white">WHERE IRON</span>
          <span className="block text-red-600">MEETS LEGACY</span>
        </h1>
        <p className="font-playfair italic text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mt-8">
          La Forza's flagship Lahore location is arriving. Secure your founding membership before we
          open the doors.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#register"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-sm tracking-widest uppercase inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_28px_rgba(220,38,38,0.55)]"
          >
            Become a Founding Member <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#equipment"
            className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-4 text-sm tracking-widest uppercase transition-colors"
          >
            Explore the Facility
          </a>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-12 mt-16 justify-center items-center">
          {stats.map((s, i) => (
            <div key={s.n} className="flex items-center">
              <div className="text-center">
                <div className="font-anton text-3xl md:text-4xl text-white">{s.n}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.l}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-[#2a2a2a] ml-12" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="text-red-600 w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
}

// ---------------- URGENCY BANNER ----------------
function UrgencyBanner() {
  const filled = 254;
  const total = 300;
  const pct = (filled / total) * 100;
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-[#0a0a0a] to-[#0a0a0a] border-y border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
      <motion.div {...liquidIn} className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase shadow-[0_0_30px_rgba(212,175,55,0.15)]">
          <Flame className="w-3.5 h-3.5" /> Only {total - filled} Spots Left — Secure Yours Now
        </div>

        <p className="font-playfair italic text-gray-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
          We started with 150. Everyone told us to extend it to 300. Prices will increase after 300.
          <span className="text-white"> No extensions.</span>
        </p>

        <div className="mt-10 flex items-end justify-center gap-3">
          <span className="font-playfair text-7xl md:text-9xl font-bold text-white leading-none tracking-tight">
            {filled}
          </span>
          <span className="font-playfair text-4xl md:text-6xl text-gray-600 leading-none mb-2">
            / {total}
          </span>
        </div>
        <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mt-4">
          Founding Memberships Claimed
        </p>

        {/* Progress bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-400 shadow-[0_0_18px_rgba(220,38,38,0.6)]"
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest text-gray-600">
            <span>{Math.round(pct)}% Filled</span>
            <span>{total - filled} Remaining</span>
          </div>
        </div>

        <a
          href="#register"
          className="inline-flex items-center gap-2 mt-10 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(220,38,38,0.55)]"
        >
          Lock In Founding Pricing <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}

// ---------------- PHILOSOPHY ----------------
function Philosophy() {
  return (
    <section id="about" className="relative bg-[#0a0a0a] py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-red-900/10 blur-3xl" />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div {...liquidIn}>
          <p className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Our Philosophy
          </p>
          <h2 className="font-anton text-6xl uppercase leading-none">
            <span className="text-white block">FORZA.</span>
            <span className="text-red-600 block">STRENGTH.</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-6" />
          <p className="text-gray-300 mt-8 text-lg leading-relaxed">
            La Forza isn't a gym. It's a standard. Built for athletes who demand more — more weight,
            more intensity, more results. From competitive bodybuilders to powerlifters, our
            environment is engineered to bring out the best in serious lifters. No distractions. No
            excuses. Only iron.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {["Elite Community", "Zero Compromise", "Purpose-Built Spaces"].map((t) => (
              <span
                key={t}
                className="border border-[#2a2a2a] text-gray-400 text-xs tracking-widest uppercase px-4 py-2 inline-flex items-center gap-2"
              >
                <CheckCircle className="w-3 h-3 text-red-600" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          {...liquidIn}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/5 h-96 flex flex-col items-center justify-center rounded-sm shadow-2xl shadow-black/50"
        >
          <ImageIcon className="text-gray-700 w-16 h-16" />
          <p className="text-gray-600 text-xs mt-4 tracking-widest uppercase">
            High-Resolution Gym Interior — Asset Placeholder
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------- EQUIPMENT ----------------
function Equipment() {
  const items = [
    {
      I: Dumbbell,
      t: "Panatta Italian Machines",
      d: "Biomechanically engineered Italian machines for maximum muscle isolation and joint safety.",
    },
    {
      I: Target,
      t: "Hammer Strength Plate-Loaded",
      d: "The preferred choice of professional bodybuilders and strength athletes globally.",
    },
    {
      I: TrendingUp,
      t: "Power Rack Zone",
      d: "Dedicated heavy lifting bays with competition-spec power racks and Olympic barbells.",
    },
    {
      I: Zap,
      t: "Functional Training Rig",
      d: "Multi-station rigs for athletic conditioning, cable work, and functional movement.",
    },
    {
      I: Activity,
      t: "Cardio Performance Floor",
      d: "Premium treadmills, assault bikes, and rowers for serious conditioning work.",
    },
    {
      I: Shield,
      t: "Recovery & Mobility Zone",
      d: "Dedicated space for stretching, foam rolling, and post-session recovery.",
    },
  ];
  return (
    <section
      id="equipment"
      className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-900/10 via-[#0a0a0a] to-[#0a0a0a] py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div {...liquidIn} className="text-center">
          <p className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            The Arsenal
          </p>
          <h2 className="font-anton text-5xl md:text-6xl uppercase text-white">
            World-Class Equipment
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            La Forza is outfitted with an exclusive selection of Panatta and Hammer Strength
            machines — the gold standard in professional strength training equipment used by elite
            athletes worldwide.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              className="bg-gradient-to-br from-[#141414] to-[#0d0d0d] border border-white/5 p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_40px_-15px_rgba(220,38,38,0.3)]"
            >
              <it.I className="text-red-600 w-8 h-8 mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">{it.t}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-[#0a0a0a] border-y border-white/5 py-8 mt-16">
        <div className="flex items-center justify-center gap-6 px-6 text-center">
          <Minus className="text-red-600 w-8 h-8 hidden md:block" />
          <p className="text-gray-300 text-lg">
            Outfitted with 100+ machines across 15,000 sq ft of dedicated training space.
          </p>
          <Minus className="text-red-600 w-8 h-8 hidden md:block" />
        </div>
      </div>
    </section>
  );
}

// ---------------- PLANS + PAYMENT MODAL ----------------
type PriceRow = { label: string; price: string };
type Plan = { tier: "BASIC" | "PREMIUM"; popular?: boolean; rows: PriceRow[]; note: string };

const PLAN_DATA: Record<"individual" | "group", Plan[]> = {
  individual: [
    {
      tier: "BASIC",
      rows: [
        { label: "Monthly", price: "9,000 PKR" },
        { label: "Quarterly", price: "25,000 PKR" },
        { label: "Bi-Yearly", price: "47,000 PKR" },
        { label: "Yearly", price: "85,000 PKR" },
      ],
      note: "Sauna, Steamroom & Coldbath: 1500 PKR per session.",
    },
    {
      tier: "PREMIUM",
      popular: true,
      rows: [
        { label: "Monthly", price: "13,000 PKR" },
        { label: "Quarterly", price: "36,000 PKR" },
        { label: "Bi-Yearly", price: "70,000 PKR" },
        { label: "Yearly", price: "130,000 PKR" },
      ],
      note: "Includes unlimited access to Sauna, Steam & Coldbath.",
    },
  ],
  group: [
    {
      tier: "BASIC",
      rows: [
        { label: "Monthly", price: "8,000 PKR" },
        { label: "Quarterly", price: "22,000 PKR" },
        { label: "Bi-Yearly", price: "40,000 PKR" },
        { label: "Yearly", price: "75,000 PKR" },
      ],
      note: "Sauna, Steamroom & Coldbath: 1500 PKR per session.",
    },
    {
      tier: "PREMIUM",
      popular: true,
      rows: [
        { label: "Monthly", price: "11,000 PKR" },
        { label: "Quarterly", price: "30,000 PKR" },
        { label: "Bi-Yearly", price: "55,000 PKR" },
        { label: "Yearly", price: "100,000 PKR" },
      ],
      note: "Includes unlimited access to Sauna, Steam & Coldbath.",
    },
  ],
};

function PaymentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const iban = "PK65JSBL9262000002851172";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(iban);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 backdrop-blur-md bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="bg-[#111111]/90 backdrop-blur-xl border border-white/10 p-8 max-w-md w-full relative shadow-2xl shadow-red-900/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
          Complete Your Payment
        </h3>
        <p className="text-gray-400 text-sm mt-3 mb-6">
          Please transfer your membership fee to the bank account below to lock in your Founding
          Member rate. Let's raise the bar for gyms in Pakistan together!
        </p>
        <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-6 text-left space-y-4">
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">
              Account Title
            </p>
            <p className="text-white font-bold">La Forza Pvt Ltd</p>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">
              Account Number
            </p>
            <p className="text-gray-300">0002851172</p>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">IBAN</p>
            <p className="text-red-500 font-mono break-all">{iban}</p>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Bank Name</p>
            <p className="text-gray-300">JS BANK</p>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Bank Address</p>
            <p className="text-gray-400 text-sm">DHA Phase II T Block, Lahore</p>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="mt-6 border border-[#2a2a2a] text-white hover:border-red-600 w-full py-3 uppercase tracking-widest text-xs flex justify-center items-center gap-2 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-red-500" /> Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" /> Copy IBAN
            </>
          )}
        </button>
      </motion.div>
    </motion.div>
  );
}

function Plans({ onJoin }: { onJoin: () => void }) {
  const [type, setType] = useState<"individual" | "group">("individual");
  const plans = PLAN_DATA[type];

  return (
    <section
      id="plans"
      className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/15 via-[#0a0a0a] to-[#0a0a0a] py-32 px-6 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-red-900/10 blur-3xl" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div {...liquidIn} className="text-center">
          <p className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Founding Member Rates
          </p>
          <h2 className="font-anton text-5xl md:text-6xl uppercase text-white leading-none">
            Secure Your Membership
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-center">
            These are our Founding Member rates for the first 150 people who pay before or after
            launch. NO REGISTRATION FEES!
          </p>
        </motion.div>

        <div className="flex justify-center mt-12">
          <div className="inline-flex flex-wrap justify-center bg-[#111111]/60 backdrop-blur-md border border-white/5 rounded-full p-1">
            {(
              [
                { k: "individual", l: "Individual Plans" },
                { k: "group", l: "Group / Couple / Student Plans" },
              ] as const
            ).map((opt) => {
              const active = type === opt.k;
              return (
                <button
                  key={opt.k}
                  onClick={() => setType(opt.k)}
                  className={`px-4 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all ${
                    active
                      ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.45)]"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {opt.l}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {plans.map((plan, i) => (
            <motion.div
              key={`${type}-${plan.tier}`}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              className={`relative bg-gradient-to-br from-[#141414] to-[#0d0d0d] border ${plan.popular ? "border-red-600/50" : "border-white/5"} p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:border-red-600/60 hover:shadow-[0_10px_40px_-15px_rgba(220,38,38,0.4)]`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 inline-flex items-center gap-1 shadow-[0_0_18px_rgba(220,38,38,0.5)]">
                  <Star className="w-3 h-3" /> Most Popular
                </span>
              )}
              <p className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold">
                {plan.tier}
              </p>
              <h3 className="font-anton text-4xl text-white uppercase mt-2">
                {plan.tier === "PREMIUM" ? "Premium Access" : "Basic Access"}
              </h3>
              <div className="w-12 h-0.5 bg-red-600 mt-4 mb-6" />
              <div className="flex flex-col">
                {plan.rows.map((r, idx) => (
                  <div
                    key={r.label}
                    className={`flex items-center justify-between py-3 ${idx !== plan.rows.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <span className="text-gray-400 text-xs uppercase tracking-widest">
                      {r.label}
                    </span>
                    <span className="text-white font-bold">{r.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-6 leading-relaxed">{plan.note}</p>
              <button
                onClick={onJoin}
                className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(220,38,38,0.55)]"
              >
                Become a Member
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- REGISTER ----------------
function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "" });
  const formFields: Array<{
    k: keyof typeof form;
    label: string;
    type: string;
    ph: string;
  }> = [
    { k: "name", label: "Full Name", type: "text", ph: "Your Full Name" },
    { k: "email", label: "Email Address", type: "email", ph: "your@email.com" },
    { k: "phone", label: "Phone Number", type: "tel", ph: "+92 XXX XXXXXXX" },
  ];
  const benefits = [
    "Discounted Founding Member Rate — Locked In For Life",
    "Priority Access Before Public Opening",
    "Exclusive La Forza Founding Member Merch Pack",
  ];
  return (
    <section
      id="register"
      className="relative bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/15 via-[#0a0a0a] to-[#0a0a0a] py-32 px-6 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div {...liquidIn}>
          <p className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Limited Spots Available
          </p>
          <h2 className="font-anton text-5xl uppercase text-white leading-none">
            Secure Your Founding Membership
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-6" />
          <p className="text-gray-300 mt-8 text-lg">
            Founding Members of La Forza Lahore receive exclusive early-bird pricing, priority
            access on launch day, and recognition as part of the gym's founding community. Register
            your interest now — no payment required.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-red-600 w-5 h-5 mt-0.5 flex-shrink-0" />{" "}
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          {...liquidIn}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="bg-[#111111]/40 backdrop-blur-xl border border-white/10 p-10 shadow-2xl shadow-black/50"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center py-12">
              <CheckCircle className="text-red-600 w-16 h-16 mb-6" />
              <p className="font-anton text-3xl text-white uppercase">
                You're on the list. Welcome to La Forza.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <h3 className="text-white font-bold text-2xl mb-8">Register Your Interest</h3>
              {formFields.map((f) => (
                <div key={f.k} className="mb-5">
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    {f.label}
                  </label>
                  <input
                    required
                    type={f.type}
                    placeholder={f.ph}
                    value={form[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="bg-black/40 border border-white/10 focus:border-red-600 text-white px-4 py-3 w-full outline-none transition-colors"
                  />
                </div>
              ))}
              <div className="mb-6">
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                  Primary Fitness Goal
                </label>
                <select
                  required
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="bg-black/40 border border-white/10 focus:border-red-600 text-white px-4 py-3 w-full outline-none transition-colors"
                >
                  <option value="">Select your goal</option>
                  <option>Bodybuilding / Aesthetics</option>
                  <option>Powerlifting / Strength</option>
                  <option>Athletic Performance</option>
                  <option>General Fitness &amp; Health</option>
                  <option>Weight Loss</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_28px_rgba(220,38,38,0.55)] inline-flex items-center justify-center gap-2"
              >
                Claim My Founding Spot <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-gray-600 text-xs text-center mt-4">
                No payment required. We'll be in touch before opening day.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------- TOUR ----------------
function Tour() {
  return (
    <section id="tour" className="bg-[#0c0c0c] py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div {...liquidIn}>
          <p className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Sneak Peek
          </p>
          <h2 className="font-anton text-5xl md:text-6xl uppercase text-white leading-none">
            Step Inside the New Flagship
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            We've partnered with architectural visualization studios to give you a full 3D
            walkthrough of the upcoming Lahore facility — before a single weight is racked.
          </p>
        </motion.div>
        <motion.div
          {...liquidIn}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="mt-12 bg-gradient-to-br from-[#1a0a0a] to-[#0a0a0a] border border-white/5 hover:border-red-600/50 transition-all duration-500 relative overflow-hidden aspect-video flex flex-col items-center justify-center hover:shadow-[0_10px_40px_-15px_rgba(220,38,38,0.3)]"
        >
          <div className="rounded-full border-2 border-red-600 p-6 text-red-600 inline-flex shadow-[0_0_30px_rgba(220,38,38,0.35)]">
            <Play className="w-8 h-8" />
          </div>
          <p className="text-gray-500 text-xs tracking-widest uppercase mt-4">
            3D Architectural Walkthrough — Coming Soon
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          {["Full 3D Navigation", "15,000 sq ft Rendered in Detail"].map((t) => (
            <span
              key={t}
              className="border border-white/5 text-gray-400 text-xs tracking-widest uppercase px-4 py-2 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- FINAL CTA ----------------
function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 py-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.4)_100%)]" />
      <motion.div {...liquidIn} className="relative">
        <h2 className="font-anton text-5xl md:text-7xl uppercase text-white leading-none">
          Lahore. The Iron is Coming.
        </h2>
        <p className="font-playfair italic text-white/85 text-xl mt-6">
          Be first through the doors. Register your founding membership today.
        </p>
        <a
          href="#register"
          className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-4 text-sm tracking-widest uppercase mt-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
        >
          Become a Founding Member
        </a>
      </motion.div>
    </section>
  );
}

// ---------------- FOOTER ----------------
function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <BrandMark size="md" />
          <p className="text-gray-500 text-sm mt-4">
            Built for the serious. Uncompromising in every rep.
          </p>
          <div className="flex gap-4 mt-6">
            {[Instagram, Youtube, Facebook].map((Ic, i) => (
              <a key={i} href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <Ic className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-4">Navigate</h4>
          <ul className="space-y-3">
            {[
              { l: "About", h: "#about" },
              { l: "Equipment", h: "#equipment" },
              { l: "Plans", h: "#plans" },
              { l: "Register", h: "#register" },
              { l: "Virtual Tour", h: "#tour" },
            ].map((x) => (
              <li key={x.l}>
                <a href={x.h} className="text-gray-500 hover:text-white text-sm transition-colors">
                  {x.l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="text-red-600 w-4 h-4" /> Bahria Town, Lahore — Opening 2025
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-red-600 w-4 h-4" /> Contact Us
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-red-600 w-4 h-4" /> info@laforzagym.com
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs">© 2025 La Forza Gym. All Rights Reserved.</p>
        <VertexBadge variant="footer" />
      </div>
    </footer>
  );
}

function Index() {
  const [payOpen, setPayOpen] = useState(false);
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Nav />
      <Hero />
      <UrgencyBanner />
      <Philosophy />
      <Equipment />
      <Tour />
      <Plans onJoin={() => setPayOpen(true)} />
      <Register />
      <FinalCTA />
      <Footer />
      <PaymentModal open={payOpen} onClose={() => setPayOpen(false)} />
    </div>
  );
}
