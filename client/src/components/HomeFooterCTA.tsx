import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const HomeFooterCTA = () => (
  <section className="py-24 px-6 bg-ent-surface-dark transition-colors">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-3xl mx-auto text-center"
    >
      <motion.h2
        variants={fadeInUp}
        className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight"
      >
        Your Retreat Deserves a Real Place
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="text-white/65 font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto"
      >
        Not a conference room. Not a resort. A forest. Get in touch and let's build
        something your people will carry with them.
      </motion.p>
      <motion.div variants={fadeInUp}>
        <Link
          href="/contact"
          className="inline-block bg-ent-secondary hover:bg-ent-secondary/90 text-white font-bold py-4 px-10 rounded-xl transition-colors no-underline font-body"
        >
          Contact Us
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default HomeFooterCTA;
