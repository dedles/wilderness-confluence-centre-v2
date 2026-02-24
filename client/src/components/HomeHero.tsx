// import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const HomeHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          // src="/images/gallery/morning_sunrise_landscape.jpg"
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80"
          alt="Forested landscape on Salt Spring Island"
          className="w-full object-cover absolute inset-0"
          style={{ y: backgroundY, height: "120%", top: "-10%" }}
        />
        <div className="absolute inset-0 bg-moss/60 dark:bg-moss/75" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm uppercase tracking-widest text-ent-secondary font-bold mb-6"
        >
          Salt Spring Island, BC
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
        >
          Where Your Retreat Finds Its Home
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-white/80 mb-10 font-body max-w-2xl mx-auto leading-relaxed"
        >
          A forested venue on Salt Spring Island for facilitators, retreat leaders, and teams.
          You bring the vision — we provide the land, the meals, and the magic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToPackages}
            className="bg-ent-primary hover:bg-ent-primary/90 text-white font-bold py-3.5 px-8 rounded-xl transition-colors font-body"
          >
            Explore Packages
          </button>
          <Link
            href="/contact"
            className="border border-white/70 text-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl transition-colors no-underline font-body"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      <button
        onClick={() =>
          document.getElementById("different-venue")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HomeHero;
