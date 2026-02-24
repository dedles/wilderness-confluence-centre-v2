import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/animations";

const linkClass = "text-ent-primary dark:text-ent-sage underline underline-offset-2 hover:text-ent-secondary transition-colors";
const paraClass = "font-body text-lg text-ent-text dark:text-ent-text-dark leading-relaxed";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About the Grounds | Wilderness Confluence Centre"
        description="Learn about the land, amenities, and setting of Wilderness Confluence Centre on Salt Spring Island, BC."
        keywords="about Wilderness Confluence Centre, Salt Spring Island retreat grounds, eco-village retreat BC, forest retreat amenities"
      />

      {/* Hero */}
      <section className="relative h-[55vh] w-full overflow-hidden">
        <img
          src="/images/gallery/arbutus_rocks_overcast_outlook.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 70%" }}
        />
        <div className="absolute inset-0 bg-moss/60 dark:bg-moss/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm uppercase tracking-widest text-ent-secondary font-bold mb-4"
          >
            The Grounds
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-cream leading-tight"
          >
            About Confluence
          </motion.h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 px-6 bg-warm-white dark:bg-ent-bg-dark transition-colors">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-7"
          >
            <motion.p variants={fadeInUp} className={paraClass}>
              Confluence is situated on{" "}
              <a href="https://www.entelechysaltspring.ca/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                an eco-village
              </a>{" "}
              with rustic, but high quality amenities that have been constructed to fit into the
              forest landscape and local ecology. We have clean and well kept outhouses, hot water
              showers, and a bath-tub situated among the forest canopy. There are well curated tent
              sites throughout the forest and a covered space for people to hang out, eat or
              socialize in the evening and if it so happens to rain. For those needing a bit of
              extra comfort, we have a number of canvas tents with comfortable beds.
            </motion.p>

            <motion.p variants={fadeInUp} className={paraClass}>
              The land is 13.5 acres, with forest trails on-site as well as being located at the
              trail-head of Salt Spring's best trail network, with spectacular views and old growth
              forests.
            </motion.p>

            <motion.p variants={fadeInUp} className={paraClass}>
              Our drinking and bathing water comes directly from the headwaters of Mount Maxwell,
              that filters through the old growth forest, and is considered some of the best water
              one can find anywhere on the island and beyond.
            </motion.p>

            <motion.p variants={fadeInUp} className={paraClass}>
              The terrain contains mossy bluffs, towering fir and arbutus trees, and beautiful
              views that overlook the Ocean and other Gulf Islands. If visiting in June, your group
              will be among a beautiful array of Foxglove flowers blooming all around, and if
              visiting in July your guests will be able to enjoy the blooming of the many
              Ocean-Spray.
            </motion.p>

            <motion.p variants={fadeInUp} className={paraClass}>
              Just by spending a few days at Confluence, your guests will learn something about
              nature, and themselves. Just keep in mind that this facility isn't for the prissy or
              privileged. It's for those willing to be in the humble company of nature, with all
              the influences that nature can provide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="pb-24 px-6 bg-warm-white dark:bg-ent-bg-dark transition-colors">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src="/images/gallery/sunny_mossy_forest_clearing.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src="/images/gallery/fire_circle_benches_dusk.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src="/images/gallery/tent_interior_forest_view.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src="/images/gallery/forest_sunset_canopy.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src="/images/gallery/morning_light_newly_planted.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src="/images/gallery/sunset_hilltop_forest_vista.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
