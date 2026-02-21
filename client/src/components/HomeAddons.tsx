import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ADDONS = [
  "Guided Meditation",
  // "Forest Bathing",
  // "Stargazing",
  "Live Acoustic Music",
  "Evening Campfire",
  "Permaculture Tour",
  "Morning Yoga",
];

const HomeAddons = () => (
  <section className="py-20 px-6 bg-ent-surface-light dark:bg-ent-surface-dark transition-colors">
    <div className="max-w-5xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col md:flex-row md:items-center gap-8"
      >
        <motion.div variants={fadeInUp} className="md:w-56 shrink-0">
          <p className="text-sm uppercase tracking-widest text-ent-secondary font-bold mb-2">
            Extras
          </p>
          <h3 className="font-display text-2xl text-ent-text dark:text-ent-text-dark">
            Curated Add-ons
          </h3>
          <p className="text-sm text-ent-text-muted dark:text-ent-text-muted-dark font-body mt-2 leading-relaxed">
            Enhance your retreat with these popular options.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
          {ADDONS.map((addon) => (
            <span
              key={addon}
              className="bg-ent-sage/30 dark:bg-ent-primary/15 text-ent-text dark:text-ent-text-dark border border-ent-primary/20 dark:border-ent-sage/20 font-body text-sm font-medium px-5 py-2.5 rounded-full"
            >
              {addon}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HomeAddons;
