import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const HomeDifferentVenue = () => (
  <section
    id="different-venue"
    className="py-24 px-6 bg-ent-bg-light dark:bg-ent-bg-dark transition-colors"
  >
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-6"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-ent-secondary font-bold"
        >
          The Venue
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl text-ent-text dark:text-ent-text-dark leading-tight"
        >
          A Different Kind of Venue
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="space-y-4 text-lg text-ent-text-muted dark:text-ent-text-muted-dark leading-relaxed font-body"
        >
          <p>
            Most retreat venues feel like hotels with a yoga room bolted on. Confluence is
            different. We're an intentional community on 14 acres of forested land — mossy
            bluffs, meadows, gardens, fire circles, and gathering spaces built by the people
            who live here.
          </p>
          <p>
            When you host with us, your participants aren't checking into a facility. They're
            stepping into a living landscape. The forest does half the work — slowing people
            down, opening them up, creating the conditions for whatever transformation your
            program is designed to offer. Whether you're leading a tea ceremony, a
            permaculture intensive, a men's circle, or a company offsite, this land holds it.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 } },
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=800&q=80"
          alt="Team gathering around a campfire in the forest"
          // className="w-full h-full object-cover"
          className="relative rounded-xl shadow-xl w-full h-[500px] object-cover"
          loading="lazy"
        />
        <div className="absolute -inset-4 bg-primary/20 dark:bg-primary/10 rounded-2xl transform rotate-2" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-ent-bg-dark/50 to-transparent" /> */}
      </motion.div>
    </div>
  </section>
);

export default HomeDifferentVenue;
