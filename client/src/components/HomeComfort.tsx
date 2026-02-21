import { motion } from "framer-motion";
import { Tent, UtensilsCrossed, Compass, TreePine } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FEATURES = [
  {
    icon: Tent,
    title: "Campsite & Grounds",
    body: "Established tent platforms nestled among old-growth cedars, with fire circles and gathering clearings throughout the property.",
  },
  {
    icon: UtensilsCrossed,
    title: "Catered Meals",
    body: "Farm-to-table meals sourced locally from Salt Spring Island's renowned farms and artisan producers. We handle the kitchen so you can focus on your program.",
  },
  {
    icon: Compass,
    title: "Practice & Gathering Space",
    body: "Dedicated outdoor and sheltered spaces for yoga, meditation, breathwork, workshops, or whatever your retreat calls for.",
  },
  {
    icon: TreePine,
    title: "Guided Land Experiences",
    body: "Forest bathing, nature walks, garden tours, and permaculture sessions available as add-ons to complement your programming.",
  },
];

const HomeComfort = () => (
  <section className="py-24 px-6 bg-ent-surface-light dark:bg-ent-surface-dark transition-colors">
    <div className="max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl text-ent-text dark:text-ent-text-dark mb-4"
        >
          Comfort in the Wild
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-ent-text-muted dark:text-ent-text-muted-dark font-body text-lg"
        >
          Rustic charm meets mindful hospitality.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {FEATURES.map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white dark:bg-ent-bg-dark rounded-2xl p-7 shadow-soft border border-ent-primary/10 dark:border-white/5 flex flex-col gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-ent-primary/10 dark:bg-ent-primary/20 flex items-center justify-center text-ent-primary dark:text-ent-sage">
              <feature.icon size={22} />
            </div>
            <h3 className="font-display text-lg text-ent-text dark:text-ent-text-dark">
              {feature.title}
            </h3>
            <p className="text-ent-text-muted dark:text-ent-text-muted-dark font-body text-sm leading-relaxed">
              {feature.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HomeComfort;
