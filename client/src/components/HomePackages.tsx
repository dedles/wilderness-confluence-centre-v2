import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, PlusCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PACKAGES = [
  {
    name: "The Intimate",
    capacity: "Up to 5",
    tagline: "For small circles, private intensives, and focused group work.",
    price: "$500",
    pricePer: "/day",
    priceNote: "Base rate for up to 5 guests. $50/guest beyond that.",
    features: [
      "Up to 5 participants",
      "Dedicated campsite zone",
      "Fire circle access",
      "Communal meals",
      "Gathering space",
    ],
    upsell: null,
    cta: "Inquire",
    featured: false,
  },
  {
    name: "The Collective",
    capacity: "10–20 Guests",
    tagline: "Perfect for workshops, training retreats, and mid-size gatherings.",
    price: "$1,800",
    pricePer: "/day",
    priceNote: "Base rate for 10 guests. $100/guest beyond that.",
    features: [
      "Up to 20 participants",
      "Expanded camp + meadow access",
      "Full catering package",
      "Dedicated gathering lodge",
      "Facilitator support",
      "On-site host",
    ],
    upsell: null,
    cta: "Request a Quote",
    featured: true,
    badge: "Popular",
  },
  {
    name: "The Confluence",
    capacity: "20–30+",
    tagline: "For large retreats, festivals, multi-track programs, and corporate gatherings.",
    price: "$5,000",
    pricePer: "/day",
    priceNote: "Custom pricing for larger groups.",
    features: [
      "30+ participants",
      "Full property access",
      "Full premium catering",
      "Event planning support",
      "Custom itineraries",
    ],
    upsell: "Everything in The Collective +",
    cta: "Inquire",
    featured: false,
  },
];

const HomePackages = () => (
  <section
    id="packages"
    className="py-24 px-6 bg-warm-white dark:bg-ent-bg-dark transition-colors"
  >
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.p
          variants={fadeInUp}
          className="text-xs uppercase tracking-widest text-ent-secondary font-bold mb-3"
        >
          Pricing
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="font-display text-5xl md:text-6xl text-ent-text dark:text-ent-text-dark"
        >
          Retreat Packages
        </motion.h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start"
      >
        {PACKAGES.map((pkg) => (
          <motion.div
            key={pkg.name}
            variants={fadeInUp}
            className={`rounded-3xl p-8 flex flex-col gap-5 relative ${
              pkg.featured
                ? "bg-ent-surface-dark text-white shadow-xl md:-mt-4 md:-mb-4"
                : "bg-white dark:bg-ent-surface-dark shadow-soft"
            }`}
          >
            {/* Capacity + badge */}
            <div className="flex items-center justify-between">
              <p className={`text-xs font-bold uppercase tracking-widest ${
                pkg.featured ? "text-white/50" : "text-ent-secondary"
              }`}>
                {pkg.capacity}
              </p>
              {pkg.badge && (
                <span className="bg-ent-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.badge}
                </span>
              )}
            </div>

            {/* Name + tagline */}
            <div>
              <h3 className={`font-display text-3xl mb-2 leading-tight ${
                pkg.featured ? "text-white" : "text-ent-text dark:text-ent-text-dark"
              }`}>
                {pkg.name}
              </h3>
              <p className={`text-sm font-body leading-relaxed ${
                pkg.featured ? "text-white/60" : "text-ent-text-muted dark:text-ent-text-muted-dark"
              }`}>
                {pkg.tagline}
              </p>
            </div>

            {/* Price */}
            <div>
              <div className="flex items-baseline gap-1">
                <span className={`font-display text-4xl font-bold ${
                  pkg.featured ? "text-white" : "text-ent-primary dark:text-ent-sage"
                }`}>
                  From {pkg.price}
                </span>
                <span className={`text-sm font-body ${
                  pkg.featured ? "text-white/50" : "text-ent-text-muted"
                }`}>
                  {pkg.pricePer}
                </span>
              </div>
              <p className={`text-xs mt-1 font-body ${
                pkg.featured ? "text-white/40" : "text-ent-text-muted/70 dark:text-ent-text-muted-dark/70"
              }`}>
                {pkg.priceNote}
              </p>
            </div>

            {/* Upsell line (Confluence only) */}
            {pkg.upsell && (
              <div className="flex items-center gap-2 text-ent-secondary font-body text-sm font-semibold">
                <PlusCircle size={16} className="shrink-0" />
                {pkg.upsell}
              </div>
            )}

            {/* Features */}
            <ul className="space-y-3 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2
                    size={17}
                    className={`shrink-0 ${
                      pkg.featured ? "text-ent-sage" : "text-ent-primary dark:text-ent-sage"
                    }`}
                  />
                  <span className={`text-sm font-body ${
                    pkg.featured ? "text-white/80" : "text-ent-text-muted dark:text-ent-text-muted-dark"
                  }`}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className={`mt-2 block text-center font-bold py-3.5 px-6 rounded-2xl transition-colors no-underline font-body text-sm ${
                pkg.featured
                  ? "bg-ent-secondary hover:bg-ent-secondary/90 text-white"
                  : "border border-ent-text/30 dark:border-white/20 text-ent-text dark:text-ent-text-dark hover:bg-ent-primary/5 dark:hover:bg-white/5"
              }`}
            >
              {pkg.cta}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-sm text-ent-text-muted dark:text-ent-text-muted-dark font-body mt-12 max-w-2xl mx-auto"
      >
        All tiers include campsite setup, fire pit access, trail access, and basic amenities.
      </motion.p>
    </div>
  </section>
);

export default HomePackages;
