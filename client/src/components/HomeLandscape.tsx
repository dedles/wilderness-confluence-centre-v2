import { motion } from "framer-motion";

const HomeLandscape = () => (
  <section
    id="the-land"
    className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src="/images/gallery/sunny_mossy_forest_clearing.jpg"
        alt="Forested landscape at Wilderness Confluence Centre"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,24,16,0.6) 0%, rgba(31,41,35,0.75) 100%)",
        }}
      />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 text-center px-6 max-w-3xl mx-auto"
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight">
        Fourteen Acres of Forest, Meadow, and Quiet
      </h2>
      <p className="text-white/70 font-body text-lg">Discover a world of experience.</p>
    </motion.div>
  </section>
);

export default HomeLandscape;
