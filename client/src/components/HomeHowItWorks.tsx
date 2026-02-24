import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const STEPS = [
  {
    number: "1",
    title: "Reach Out",
    body: "Tell us about your retreat, your group, and your vision. We'll respond within 48 hours.",
  },
  {
    number: "2",
    title: "Design Together",
    body: "We work with you to shape the logistics — accommodation, meals, spaces, timing, and any add-ons.",
  },
  {
    number: "3",
    title: "Confirm & Prepare",
    body: "Once confirmed, we send a preparation guide for you and your participants — what to bring, how to get here, what to expect.",
  },
  {
    number: "4",
    title: "Arrive",
    body: "We meet your group at the ferry, get everyone settled, and hand the space over to you.",
  },
];

const HomeHowItWorks = () => (
  <section
    id="how-it-works"
    className="py-24 px-6 bg-ent-bg-light dark:bg-ent-bg-dark transition-colors"
  >
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
          className="font-display text-4xl md:text-5xl text-ent-text dark:text-ent-text-dark"
        >
          Your Journey to the Wild
        </motion.h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {STEPS.map((step) => (
          <motion.div
            key={step.number}
            variants={fadeInUp}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-ent-primary flex items-center justify-center text-white font-display text-xl font-bold shadow-soft shrink-0">
              {step.number}
            </div>
            <div>
              <h3 className="font-display text-xl text-ent-text dark:text-ent-text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ent-text-muted dark:text-ent-text-muted-dark font-body leading-relaxed">
                {step.body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HomeHowItWorks;
