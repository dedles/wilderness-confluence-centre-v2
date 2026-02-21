import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PACKAGES = [
  {
    name: "The Intimate",
    capacity: "Up to 10",
    tagline: "For small circles, private intensives, and focused group work.",
    price: "$4,500",
    priceSuffix: "/retreat",
    features: [
      "Up to 10 participants",
      "Dedicated campsite zone",
      "Fire circle access",
      "Communal meals",
      "Gathering space",
    ],
    cta: "Inquire",
    featured: false,
  },
  {
    name: "The Collective",
    capacity: "10–20",
    tagline: "Perfect for workshops, training retreats, and mid-size gatherings.",
    price: "$8,200",
    priceSuffix: "/retreat",
    features: [
      "Up to 20 participants",
      "Expanded camp + meadow access",
      "Full catering package",
      "Dedicated gathering lodge",
      "Facilitator support",
      "On-site host",
    ],
    cta: "Request a Quote",
    featured: true,
    badge: "Popular",
  },
  {
    name: "The Confluence",
    capacity: "20–30+",
    tagline: "For large retreats, festivals, multi-track programs, and corporate gatherings.",
    price: "Custom",
    priceSuffix: "pricing",
    features: [
      "30+ participants",
      "Full property access",
      "Full premium catering",
      "Event planning support",
      "Custom itineraries",
    ],
    cta: "Inquire",
    featured: false,
  },
];

const HomePackages = () => (
  <section
    id="packages"
    className="py-24 px-6 bg-ent-sage/20 dark:bg-ent-bg-dark transition-colors"
  >
    <div className="max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-ent-secondary font-bold mb-3"
        >
          Pricing
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl text-ent-text dark:text-ent-text-dark"
        >
          Retreat Packages
        </motion.h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
      >
        {PACKAGES.map((pkg) => (
          <motion.div
            key={pkg.name}
            variants={fadeInUp}
            className={`rounded-3xl p-8 flex flex-col gap-6 border relative ${
              pkg.featured
                ? "bg-ent-surface-dark text-white border-white/10 shadow-xl md:scale-105 md:-translate-y-2"
                : "bg-white dark:bg-ent-surface-dark border-ent-primary/10 dark:border-white/5 shadow-soft"
            }`}
          >
            {pkg.badge && (
              <span className="absolute top-6 right-6 bg-ent-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                {pkg.badge}
              </span>
            )}

            <div>
              <p
                className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                  pkg.featured ? "text-ent-sage" : "text-ent-secondary"
                }`}
              >
                {pkg.capacity}
              </p>
              <h3
                className={`font-display text-2xl mb-2 ${
                  pkg.featured ? "text-white" : "text-ent-text dark:text-ent-text-dark"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-sm font-body leading-relaxed ${
                  pkg.featured
                    ? "text-white/70"
                    : "text-ent-text-muted dark:text-ent-text-muted-dark"
                }`}
              >
                {pkg.tagline}
              </p>
            </div>

            <div>
              <span
                className={`font-display text-4xl font-bold ${
                  pkg.featured ? "text-white" : "text-ent-text dark:text-ent-text-dark"
                }`}
              >
                {pkg.price}
              </span>
              <span
                className={`text-sm ml-1 ${
                  pkg.featured
                    ? "text-white/60"
                    : "text-ent-text-muted dark:text-ent-text-muted-dark"
                }`}
              >
                {pkg.priceSuffix}
              </span>
            </div>

            <ul className="space-y-2.5 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    className={`shrink-0 ${
                      pkg.featured ? "text-ent-sage" : "text-ent-primary dark:text-ent-sage"
                    }`}
                  />
                  <span
                    className={`text-sm font-body ${
                      pkg.featured
                        ? "text-white/80"
                        : "text-ent-text-muted dark:text-ent-text-muted-dark"
                    }`}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`block text-center font-bold py-3 px-6 rounded-xl transition-colors no-underline font-body text-sm ${
                pkg.featured
                  ? "bg-ent-secondary hover:bg-ent-secondary/90 text-white"
                  : "border border-ent-primary text-ent-primary dark:border-ent-sage dark:text-ent-sage hover:bg-ent-primary/10 dark:hover:bg-ent-sage/10"
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
        className="text-center text-sm text-ent-text-muted dark:text-ent-text-muted-dark font-body mt-10 max-w-2xl mx-auto"
      >
        All tiers include campsite setup, fire pit access, trail access, and basic amenities.
        Catering, practice space setup, and guided land experiences are available as add-ons.
      </motion.p>
    </div>
  </section>
);

export default HomePackages;
