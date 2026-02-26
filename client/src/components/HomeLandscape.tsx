import { motion } from "framer-motion";

const HomeLandscape = () => (
  <section
    id="the-land"
    className="relative py-40 md:py-56 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('/images/gallery/grounds/sunny_day_vibrant_greenery.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-moss/60 dark:bg-moss/70" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-4xl mx-auto text-center px-6"
    >
      <h2 className="font-display text-4xl md:text-6xl text-cream leading-tight">
        Fourteen Acres of Forest, Meadow, and Quiet
      </h2>
    </motion.div>
  </section>
);

export default HomeLandscape;
