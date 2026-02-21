import { motion } from "framer-motion";
import { Tent, UtensilsCrossed, Sunrise, TreePine } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FEATURES = [
  {
    icon: Tent,
    title: "Campsite & Grounds",
    body: "Private camp sites in established, well-maintained tent platforms nestled among towering old-growth cedars.",
  },
  {
    icon: UtensilsCrossed,
    title: "Catered Meals",
    body: "Farm-to-table meals sourced locally from Salt Spring Island's renowned farms and artisan producers.",
  },
  {
    icon: Sunrise,
    title: "Morning Yoga",
    body: "Start the day grounded with optional sunrise yoga, guided by experienced instructors amidst the trees and fresh mountain air.",
  },
  {
    icon: TreePine,
    title: "Guided Land Experiences",
    body: "From forest bathing to challenging hikes, our guided outdoor experiences are tailored to your group's goals and interests.",
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
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="bg-white dark:bg-ent-bg-dark rounded-2xl p-8 shadow-soft border border-ent-primary/10 dark:border-white/5 flex flex-col gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-ent-primary/10 dark:bg-ent-primary/20 flex items-center justify-center text-ent-primary dark:text-ent-sage">
              <feature.icon size={22} />
            </div>
            <h3 className="font-display text-2xl text-ent-text dark:text-ent-text-dark leading-snug">
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
