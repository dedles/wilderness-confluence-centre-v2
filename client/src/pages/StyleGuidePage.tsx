import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Send,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Trees,
  Droplets,
  Sun,
  Sprout,
  Home,
  Users,
  Recycle,
  Flower2,
  Leaf,
  Check,
} from "lucide-react";
import SEO from "../components/SEO";

// ─── Color Swatch ───────────────────────────────────────────────
const ColorSwatch = ({
  hex,
  name,
  role,
  dark,
}: {
  hex: string;
  name: string;
  role: string;
  dark?: boolean;
}) => (
  <div className="space-y-3">
    <div
      className="h-32 rounded-2xl shadow-sm flex items-end p-4 border border-black/5 dark:border-white/10"
      style={{ backgroundColor: hex }}
    >
      <span
        className={`font-mono text-sm ${dark ? "text-white" : "text-gray-800"}`}
      >
        {hex}
      </span>
    </div>
    <div>
      <h4 className="font-bold font-body text-ent-text dark:text-ent-text-dark">
        {name}
      </h4>
      <p className="text-sm text-ent-text-muted dark:text-ent-text-muted-dark font-body">
        {role}
      </p>
    </div>
  </div>
);

// ─── Section Wrapper ────────────────────────────────────────────
const Section = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <section
    className="scroll-mt-24"
    id={title.toLowerCase().replace(/\s+/g, "-")}
  >
    <div className="flex items-center space-x-3 mb-8">
      <span className="text-ent-primary dark:text-ent-sage">{icon}</span>
      <h3 className="font-display text-2xl font-semibold text-ent-text dark:text-ent-text-dark">
        {title}
      </h3>
    </div>
    {children}
  </section>
);

// ─── Page ───────────────────────────────────────────────────────
const StyleGuidePage = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Packages", "Gallery", "Contact"];

  return (
    <div className="bg-ent-bg-light dark:bg-ent-bg-dark text-ent-text dark:text-ent-text-dark font-body min-h-screen pt-28 transition-colors duration-300">
      <SEO
        title="Style Guide | Wilderness Confluence Centre Design System"
        description="Component library and design tokens for the Wilderness Confluence Centre website."
        keywords="style guide, design system, components"
      />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        {/* Intro */}
        <section>
          <h2 className="font-display text-4xl md:text-5xl text-ent-primary dark:text-ent-sage mb-6">
            Forest Sanctuary Design System
          </h2>
          <p className="text-lg text-ent-text-muted dark:text-ent-text-muted-dark max-w-2xl leading-relaxed">
            A UI component library crafted for the Wilderness Confluence Centre. Rooted
            in organic forms, soft earth tones, and deep forest greens. Designed
            to evoke a sense of calm, community, and connection to nature.
          </p>
        </section>

        {/* ── Color Palette ─────────────────────────────────────── */}
        <Section icon={<Leaf size={22} />} title="Color Palette">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <ColorSwatch
              hex="#5A7C65"
              name="Forest Green"
              role="Primary Action"
              dark
            />
            <ColorSwatch
              hex="#A65D43"
              name="Terracotta"
              role="Accent / Alert"
              dark
            />
            <ColorSwatch hex="#C3D1C2" name="Sage" role="Secondary Elements" />
            <ColorSwatch hex="#F4F0E6" name="Cream" role="Surface / Card BG" />
            <ColorSwatch
              hex="#2C3A33"
              name="Deep Moss"
              role="Dark Surface"
              dark
            />
          </div>

          <div className="mt-12">
            <h4 className="font-display text-lg font-semibold mb-4 text-ent-text dark:text-ent-text-dark">
              Extended Palette
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <ColorSwatch
                hex="#FDFBF7"
                name="Warm White"
                role="Background Light"
              />
              <ColorSwatch
                hex="#1F2923"
                name="Night Forest"
                role="Background Dark"
                dark
              />
              <ColorSwatch
                hex="#2D4739"
                name="Forest Dark"
                role="Navbar / Footer"
                dark
              />
              <ColorSwatch
                hex="#5C6B64"
                name="Muted Green"
                role="Body Text Muted"
                dark
              />
              <ColorSwatch
                hex="#E8E6E1"
                name="Pale Bone"
                role="Dark Mode Text"
              />
            </div>
          </div>
        </Section>

        {/* ── Typography ────────────────────────────────────────── */}
        <Section
          icon={<span className="text-xl font-bold">Aa</span>}
          title="Typography"
        >
          <div className="bg-ent-surface-light dark:bg-ent-surface-dark rounded-3xl p-8 md:p-12 shadow-sm border border-ent-primary/10 dark:border-white/10 transition-colors">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="text-sm uppercase tracking-widest text-ent-secondary dark:text-ent-secondary font-bold mb-4 block">
                  Headings — Lora
                </span>
                <h1 className="font-display text-5xl mb-4 text-ent-text dark:text-ent-text-dark">
                  H1. Forest Sanctuary
                </h1>
                <h2 className="font-display text-4xl mb-4 text-ent-text dark:text-ent-text-dark">
                  H2. Retreat Venue
                </h2>
                <h3 className="font-display text-3xl mb-4 text-ent-text dark:text-ent-text-dark">
                  H3. Salt Spring Island
                </h3>
                <h4 className="font-display text-2xl mb-4 text-ent-text dark:text-ent-text-dark">
                  H4. Natural Rhythms
                </h4>
              </div>
              <div>
                <span className="text-sm uppercase tracking-widest text-ent-secondary dark:text-ent-secondary font-bold mb-4 block">
                  Body — DM Sans
                </span>
                <p className="text-lg mb-4 font-body text-ent-text dark:text-ent-text-dark">
                  Large Body Text. A forested venue on Salt Spring Island for
                  facilitators, retreat leaders, and teams. You bring the vision
                  — we provide the land, the meals, and the magic.
                </p>
                <p className="text-base text-ent-text-muted dark:text-ent-text-muted-dark font-body">
                  Standard Body Text. Most retreat venues feel like hotels with
                  a yoga room bolted on. Confluence is different. We're an
                  intentional community on 14 acres of forested land — cedar
                  groves, meadows, gardens, fire circles, and gathering spaces.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Buttons & Actions ─────────────────────────────────── */}
        <Section
          icon={<span className="text-xl">👆</span>}
          title="Buttons and Actions"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Buttons */}
            <div className="bg-ent-surface-light dark:bg-ent-surface-dark rounded-3xl p-8 border border-ent-primary/10 dark:border-white/10 flex flex-col justify-center space-y-8 transition-colors">
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-ent-primary hover:opacity-90 text-white px-8 py-3 rounded-xl font-display text-lg shadow-lg shadow-ent-primary/30 transition-all transform hover:-translate-y-0.5">
                  Primary Action
                </button>
                <button className="bg-ent-secondary hover:opacity-90 text-white px-8 py-3 rounded-xl font-display text-lg shadow-lg shadow-ent-secondary/30 transition-all transform hover:-translate-y-0.5">
                  Secondary Action
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-transparent border-2 border-ent-primary dark:border-white text-ent-primary dark:text-white px-6 py-2 rounded-xl font-body font-bold hover:bg-ent-primary hover:text-white hover:border-ent-primary transition-colors">
                  Outline Button
                </button>
                <button className="flex items-center text-ent-primary dark:text-ent-sage font-bold hover:underline font-body">
                  <span>Text Link</span>
                  <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>

            {/* Toggles & Tags */}
            <div className="bg-ent-surface-light dark:bg-ent-surface-dark rounded-3xl p-8 border border-ent-primary/10 dark:border-white/10 flex flex-col justify-center space-y-8 transition-colors">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-bold text-ent-text dark:text-ent-text-dark">
                    Notifications
                  </span>
                  <div className="w-14 h-8 bg-ent-primary rounded-full relative cursor-pointer shadow-inner">
                    <div className="w-6 h-6 bg-ent-cream rounded-full absolute top-1 right-1 shadow-sm" />
                  </div>
                </div>
                <div className="flex items-center space-x-3 opacity-60">
                  <span className="text-sm font-bold text-ent-text dark:text-ent-text-dark">
                    Sound
                  </span>
                  <div className="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-pointer shadow-inner">
                    <div className="w-6 h-6 bg-ent-cream rounded-full absolute top-1 left-1 shadow-sm" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-ent-primary/10 text-ent-primary dark:text-ent-sage rounded-lg text-sm font-bold cursor-pointer hover:bg-ent-primary/20 transition-colors border border-ent-primary/20">
                  Forest Bathing
                </span>
                <span className="px-4 py-2 bg-ent-surface-light dark:bg-ent-surface-dark border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium cursor-pointer hover:border-ent-primary transition-colors text-ent-text dark:text-ent-text-dark">
                  Morning Yoga
                </span>
                <span className="px-4 py-2 bg-ent-surface-light dark:bg-ent-surface-dark border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium cursor-pointer hover:border-ent-primary transition-colors text-ent-text dark:text-ent-text-dark">
                  Stargazing
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Forms & Input ─────────────────────────────────────── */}
        <Section icon={<Send size={22} />} title="Forms and Input">
          <div className="bg-ent-surface-light dark:bg-ent-surface-dark rounded-3xl p-8 md:p-12 shadow-sm border border-ent-primary/10 dark:border-white/10 max-w-2xl mx-auto transition-colors">
            <h4 className="font-display text-2xl mb-6 text-ent-primary dark:text-ent-sage">
              Plan Your Retreat
            </h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1 text-ent-text-muted dark:text-ent-text-muted-dark">
                  Your Name
                </label>
                <Input
                  className="w-full bg-ent-cream dark:bg-ent-bg-dark border-none shadow-inner rounded-lg px-6 py-4 text-ent-text dark:text-ent-text-dark focus:ring-2 focus:ring-ent-primary placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="e.g. Jamie Rivers"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1 text-ent-text-muted dark:text-ent-text-muted-dark">
                  Type of Retreat
                </label>
                <div className="relative">
                  <select className="w-full bg-ent-cream dark:bg-ent-bg-dark border-none shadow-inner rounded-lg px-6 py-4 text-ent-text dark:text-ent-text-dark focus:ring-2 focus:ring-ent-primary appearance-none cursor-pointer">
                    <option>Wellness / Meditation</option>
                    <option>Workshop / Training</option>
                    <option>Corporate / Team Building</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1 text-ent-text-muted dark:text-ent-text-muted-dark">
                  Tell us about your retreat
                </label>
                <Textarea
                  className="w-full bg-ent-cream dark:bg-ent-bg-dark border-none shadow-inner rounded-lg px-6 py-4 text-ent-text dark:text-ent-text-dark focus:ring-2 focus:ring-ent-primary resize-none placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Describe your vision..."
                  rows={4}
                />
              </div>
              <Button
                type="button"
                className="w-full bg-ent-primary hover:bg-[#4a6653] text-white font-display font-medium text-lg py-4 rounded-xl shadow-lg shadow-ent-primary/20 transition-all flex justify-center items-center gap-2"
              >
                <span>Send Inquiry</span>
                <Send size={16} />
              </Button>
            </form>
          </div>
        </Section>

        {/* ── Content Cards ─────────────────────────────────────── */}
        <Section icon={<span className="text-xl">▦</span>} title="Content Cards">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature card */}
            <div className="bg-ent-surface-light dark:bg-ent-surface-dark rounded-2xl p-8 border border-ent-primary/10 dark:border-white/10 shadow-sm h-full flex flex-col transition-colors">
              <div className="w-12 h-12 rounded-full bg-ent-primary/10 flex items-center justify-center text-ent-primary dark:text-ent-sage mb-6">
                <Leaf size={22} />
              </div>
              <h4 className="font-display text-xl font-bold mb-3 text-ent-text dark:text-ent-text-dark">
                Natural Living
              </h4>
              <p className="text-ent-text-muted dark:text-ent-text-muted-dark mb-6 flex-grow font-body">
                Experience life in rhythm with nature. Our spaces are built with
                sustainable materials and surrounded by old-growth cedar.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-ent-text-muted dark:text-ent-text-muted-dark">
                  <Check size={16} className="text-ent-primary dark:text-ent-sage mr-2" />
                  14 acres of forested land
                </li>
                <li className="flex items-center text-sm text-ent-text-muted dark:text-ent-text-muted-dark">
                  <Check size={16} className="text-ent-primary dark:text-ent-sage mr-2" />
                  Organic farm-to-table meals
                </li>
                <li className="flex items-center text-sm text-ent-text-muted dark:text-ent-text-muted-dark">
                  <Check size={16} className="text-ent-primary dark:text-ent-sage mr-2" />
                  Fire circles & gathering clearings
                </li>
              </ul>
            </div>

            {/* Image card */}
            <div className="rounded-2xl overflow-hidden shadow-sm group relative bg-ent-cream dark:bg-ent-surface-dark transition-colors">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-ent-primary to-ent-sage opacity-80 mix-blend-multiply z-10" />
                <img
                  alt="Forest landscape"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/images/gallery/sunny_day_vibrant_greenery.jpg"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-white/90 dark:bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-ent-primary dark:text-white">
                    Gallery
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-bold mb-2 text-ent-text dark:text-ent-text-dark group-hover:text-ent-primary transition-colors">
                  The Land
                </h4>
                <p className="text-sm text-ent-text-muted dark:text-ent-text-muted-dark mb-4 font-body">
                  Cedar groves, meadows, and gardens built by the people who
                  live here.
                </p>
                <a className="inline-flex items-center text-sm font-bold text-ent-secondary hover:text-ent-primary transition-colors font-body cursor-pointer">
                  View Gallery <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-ent-primary text-white rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl" />
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-ent-secondary opacity-20 rounded-full blur-xl" />
              <div className="relative z-10">
                <h4 className="font-display text-2xl font-bold mb-2">
                  Book a Retreat
                </h4>
                <p className="text-white/80 text-sm mb-6 font-body">
                  Ready to bring your group to the forest? Reach out and let's
                  build something memorable.
                </p>
              </div>
              <button className="relative z-10 w-full bg-white text-ent-primary font-bold py-3 rounded-xl hover:bg-ent-cream transition-colors shadow-lg font-body">
                Get in Touch
              </button>
            </div>
          </div>
        </Section>

        {/* ── Gallery Grid ─────────────────────────────────────── */}
        <Section icon={<span className="text-xl">▦</span>} title="Gallery Grid">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-4 auto-rows-[160px]">
            {Array.from({ length: 8 }).map((_, i) => {
              const isWide = i % 5 === 3;
              return (
                <div
                  key={i}
                  className={`relative group rounded-2xl overflow-hidden shadow-md cursor-pointer bg-ent-primary/20 dark:bg-ent-sage/20 ${
                    isWide ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-ent-primary/30 to-ent-sage/40 dark:from-ent-primary/40 dark:to-ent-sage/30 flex items-center justify-center">
                    <Leaf
                      size={32}
                      className="text-ent-primary/40 dark:text-ent-sage/40"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ent-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-display text-sm">
                      Placeholder {i + 1}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* ── Navigation Elements ───────────────────────────────── */}
        <Section
          icon={<span className="text-xl">☰</span>}
          title="Navigation Elements"
        >
          {/* Tabs */}
          <div className="bg-ent-surface-light dark:bg-ent-surface-dark p-8 rounded-2xl border border-ent-primary/10 dark:border-white/10 mb-8 transition-colors">
            <div className="flex flex-wrap gap-8 border-b border-ent-primary/10 dark:border-white/10 pb-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 border-b-2 font-display text-lg transition-colors ${
                    activeTab === tab
                      ? "border-ent-primary dark:border-ent-sage text-ent-primary dark:text-ent-sage font-bold"
                      : "border-transparent text-ent-text-muted dark:text-ent-text-muted-dark hover:text-ent-primary dark:hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Breadcrumbs */}
            <div className="bg-ent-surface-light dark:bg-ent-surface-dark p-6 rounded-2xl border border-ent-primary/10 dark:border-white/10 flex items-center transition-colors">
              <nav className="flex text-sm font-medium font-body">
                <a className="text-ent-text-muted dark:text-ent-text-muted-dark hover:text-ent-primary cursor-pointer">
                  Home
                </a>
                <span className="mx-2 text-gray-400">/ </span>
                <a className="text-ent-text-muted dark:text-ent-text-muted-dark hover:text-ent-primary cursor-pointer">
                  Packages
                </a>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-ent-primary dark:text-ent-sage font-bold">
                  The Collective
                </span>
              </nav>
            </div>

            {/* Pagination */}
            <div className="bg-ent-surface-light dark:bg-ent-surface-dark p-6 rounded-2xl border border-ent-primary/10 dark:border-white/10 flex items-center justify-center transition-colors">
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-ent-primary/10 text-ent-text-muted dark:text-ent-text-muted-dark transition-colors">
                  <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-ent-primary text-white font-bold text-sm shadow-md">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-ent-primary/10 text-ent-text-muted dark:text-ent-text-muted-dark font-medium text-sm transition-colors">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-ent-primary/10 text-ent-text-muted dark:text-ent-text-muted-dark font-medium text-sm transition-colors">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-ent-primary/10 text-ent-text-muted dark:text-ent-text-muted-dark transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Iconography ───────────────────────────────────────── */}
        <Section icon={<Flower2 size={22} />} title="Iconography">
          <div className="bg-ent-surface-light dark:bg-ent-surface-dark p-8 rounded-3xl border border-ent-primary/10 dark:border-white/10 transition-colors">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 text-center">
              {[
                { icon: <Trees size={28} />, label: "Forest" },
                { icon: <Droplets size={28} />, label: "Water" },
                { icon: <Sun size={28} />, label: "Sun" },
                { icon: <Sprout size={28} />, label: "Sprout" },
                { icon: <Home size={28} />, label: "Home" },
                { icon: <Users size={28} />, label: "Group" },
                { icon: <Recycle size={28} />, label: "Recycle" },
                { icon: <Flower2 size={28} />, label: "Flower" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center space-y-2"
                >
                  <span className="text-ent-primary dark:text-ent-sage">
                    {item.icon}
                  </span>
                  <span className="text-xs text-ent-text-muted dark:text-ent-text-muted-dark font-body">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Spacing & Radius Reference ────────────────────────── */}
        <Section
          icon={<span className="text-xl">◻</span>}
          title="Spacing and Radius"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-ent-surface-light dark:bg-ent-surface-dark rounded-3xl p-8 border border-ent-primary/10 dark:border-white/10 transition-colors">
              <h4 className="font-display text-lg font-semibold mb-6 text-ent-text dark:text-ent-text-dark">
                Border Radius
              </h4>
              <div className="flex flex-wrap gap-6 items-end">
                {[
                  { label: "12px", cls: "rounded-[12px]" },
                  { label: "16px", cls: "rounded-[16px]" },
                  { label: "20px", cls: "rounded-[20px]" },
                  { label: "24px", cls: "rounded-[24px]" },
                  { label: "32px", cls: "rounded-[32px]" },
                  { label: "Full", cls: "rounded-full" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`w-16 h-16 bg-ent-primary/20 border-2 border-ent-primary/40 ${r.cls}`}
                    />
                    <span className="text-xs text-ent-text-muted dark:text-ent-text-muted-dark font-mono">
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ent-surface-light dark:bg-ent-surface-dark rounded-3xl p-8 border border-ent-primary/10 dark:border-white/10 transition-colors">
              <h4 className="font-display text-lg font-semibold mb-6 text-ent-text dark:text-ent-text-dark">
                Shadow Scale
              </h4>
              <div className="flex flex-wrap gap-6 items-end">
                {[
                  { label: "Soft", cls: "shadow-sm" },
                  { label: "Medium", cls: "shadow-md" },
                  { label: "Large", cls: "shadow-lg" },
                  { label: "XL", cls: "shadow-xl" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`w-16 h-16 bg-white dark:bg-ent-bg-dark rounded-2xl ${s.cls} dark:shadow-black/30`}
                    />
                    <span className="text-xs text-ent-text-muted dark:text-ent-text-muted-dark font-mono">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default StyleGuidePage;
