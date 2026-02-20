import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Tent,
  UtensilsCrossed,
  Compass,
  TreePine,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "../components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Hero Section ─────────────────────────────────────────────────────────────

const HeroSection = () => {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery/morning_sunrise_landscape.jpg"
          alt="Forested landscape on Salt Spring Island"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,24,16,0.55) 0%, rgba(31,41,35,0.72) 100%)",
          }}
        />
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

      {/* Scroll indicator */}
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

// ─── A Different Kind of Venue ─────────────────────────────────────────────────

const DifferentVenueSection = () => (
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
            different. We're an intentional community on 14 acres of forested land — cedar
            groves, meadows, gardens, fire circles, and gathering spaces built by the people
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
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl overflow-hidden h-[420px] lg:h-[520px] shadow-soft relative"
      >
        <img
          src="/images/gallery/outdoor_garden.jpg"
          alt="Forested land and garden at the Wilderness Confluence Centre"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ent-bg-dark/50 to-transparent" />
      </motion.div>
    </div>
  </section>
);

// ─── Comfort in the Wild ───────────────────────────────────────────────────────

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

const ComfortSection = () => (
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

// ─── Retreat Packages ─────────────────────────────────────────────────────────

const PACKAGES = [
  {
    name: "The Intimate",
    capacity: "Up to 10",
    tagline: "For small circles, private intensives, and focused group work.",
    price: "$4,500",
    priceSuffix: "/retreat",
    features: [
      "Up to 10 participants",
      "Dedicated campsite zone",
      "Fire circle access",
      "Communal meals",
      "Gathering space",
    ],
    cta: "Inquire",
    featured: false,
  },
  {
    name: "The Collective",
    capacity: "10–20",
    tagline: "Perfect for workshops, training retreats, and mid-size gatherings.",
    price: "$8,200",
    priceSuffix: "/retreat",
    features: [
      "Up to 20 participants",
      "Expanded camp + meadow access",
      "Full catering package",
      "Dedicated gathering lodge",
      "Facilitator support",
      "On-site host",
    ],
    cta: "Request a Quote",
    featured: true,
    badge: "Popular",
  },
  {
    name: "The Confluence",
    capacity: "20–30+",
    tagline: "For large retreats, festivals, multi-track programs, and corporate gatherings.",
    price: "Custom",
    priceSuffix: "pricing",
    features: [
      "30+ participants",
      "Full property access",
      "Full premium catering",
      "Event planning support",
      "Custom itineraries",
    ],
    cta: "Inquire",
    featured: false,
  },
];

const PackagesSection = () => (
  <section
    id="packages"
    className="py-24 px-6 bg-ent-sage/20 dark:bg-ent-bg-dark transition-colors"
  >
    <div className="max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-ent-secondary font-bold mb-3"
        >
          Pricing
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl text-ent-text dark:text-ent-text-dark"
        >
          Retreat Packages
        </motion.h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
      >
        {PACKAGES.map((pkg) => (
          <motion.div
            key={pkg.name}
            variants={fadeInUp}
            className={`rounded-3xl p-8 flex flex-col gap-6 border relative ${
              pkg.featured
                ? "bg-ent-surface-dark text-white border-white/10 shadow-xl md:scale-105 md:-translate-y-2"
                : "bg-white dark:bg-ent-surface-dark border-ent-primary/10 dark:border-white/5 shadow-soft"
            }`}
          >
            {pkg.badge && (
              <span className="absolute top-6 right-6 bg-ent-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                {pkg.badge}
              </span>
            )}

            <div>
              <p
                className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                  pkg.featured ? "text-ent-sage" : "text-ent-secondary"
                }`}
              >
                {pkg.capacity}
              </p>
              <h3
                className={`font-display text-2xl mb-2 ${
                  pkg.featured ? "text-white" : "text-ent-text dark:text-ent-text-dark"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-sm font-body leading-relaxed ${
                  pkg.featured ? "text-white/70" : "text-ent-text-muted dark:text-ent-text-muted-dark"
                }`}
              >
                {pkg.tagline}
              </p>
            </div>

            <div>
              <span
                className={`font-display text-4xl font-bold ${
                  pkg.featured ? "text-white" : "text-ent-text dark:text-ent-text-dark"
                }`}
              >
                {pkg.price}
              </span>
              <span
                className={`text-sm ml-1 ${
                  pkg.featured ? "text-white/60" : "text-ent-text-muted dark:text-ent-text-muted-dark"
                }`}
              >
                {pkg.priceSuffix}
              </span>
            </div>

            <ul className="space-y-2.5 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    className={`shrink-0 ${
                      pkg.featured ? "text-ent-sage" : "text-ent-primary dark:text-ent-sage"
                    }`}
                  />
                  <span
                    className={`text-sm font-body ${
                      pkg.featured ? "text-white/80" : "text-ent-text-muted dark:text-ent-text-muted-dark"
                    }`}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`block text-center font-bold py-3 px-6 rounded-xl transition-colors no-underline font-body text-sm ${
                pkg.featured
                  ? "bg-ent-secondary hover:bg-ent-secondary/90 text-white"
                  : "border border-ent-primary text-ent-primary dark:border-ent-sage dark:text-ent-sage hover:bg-ent-primary/10 dark:hover:bg-ent-sage/10"
              }`}
            >
              {pkg.cta}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-sm text-ent-text-muted dark:text-ent-text-muted-dark font-body mt-10 max-w-2xl mx-auto"
      >
        All tiers include campsite setup, fire pit access, trail access, and basic amenities.
        Catering, practice space setup, and guided land experiences are available as add-ons.
      </motion.p>
    </div>
  </section>
);

// ─── Landscape Band ────────────────────────────────────────────────────────────

const LandscapeSection = () => (
  <section
    id="the-land"
    className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src="/images/gallery/rainbow_over_trees.jpg"
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

// ─── How It Works ─────────────────────────────────────────────────────────────

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

const HowItWorksSection = () => (
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
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-ent-secondary font-bold mb-3"
        >
          Process
        </motion.p>
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
          <motion.div key={step.number} variants={fadeInUp} className="flex flex-col items-center text-center gap-4">
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

// ─── Curated Add-ons ──────────────────────────────────────────────────────────

const ADDONS = [
  "Guided Meditation",
  "Forest Bathing",
  "Stargazing",
  "Live Acoustic Music",
  "Photography Workshop",
  "Permaculture Tour",
  "Morning Yoga",
];

const AddonsSection = () => (
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

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "How do we get to Salt Spring Island?",
    a: "BC Ferries runs regular service from Tsawwassen (Vancouver) and Swartz Bay (Victoria/Vancouver Island). The crossing takes 1–2 hours depending on the route. We coordinate pickup from Fulford Harbour or Long Harbour terminal.",
  },
  {
    q: "Is there wifi?",
    a: "Limited to no cell reception on most of the property. Wi-Fi is available in one area for emergencies. We consider the disconnection a feature, but understand it's worth knowing in advance.",
  },
  {
    q: "What happens if it rains?",
    a: "This is the Pacific Northwest — we plan for it. We have covered gathering spaces and the forest canopy provides natural shelter. Rain gear is on the packing list.",
  },
  {
    q: "Do we bring our own facilitator or can you provide one?",
    a: "Both. Most groups bring their own facilitator and program — you know your people best. But if you need support, we can connect you with local practitioners and facilitators on Salt Spring Island.",
  },
  {
    q: "What should participants bring?",
    a: "Tents and sleeping gear (or we can arrange rentals), weather-appropriate clothing and footwear, personal items, and an open mind. We send a detailed packing list after booking.",
  },
  {
    q: "What about dietary restrictions?",
    a: "Our kitchen accommodates vegetarian, vegan, gluten-free, and most common dietary needs. Let us know during the planning phase.",
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend at least 6–8 weeks for groups over 10. Smaller groups can sometimes be accommodated on shorter notice. Summer months (June–September) fill up first.",
  },
  {
    q: "What kinds of retreats have been hosted here?",
    a: "Tea ceremonies, permaculture workshops, men's and women's circles, meditation retreats, wellness intensives, team-building offsites, and more. If your retreat needs nature, quiet, and good food, it probably belongs here.",
  },
];

const FAQSection = () => (
  <section className="py-24 px-6 bg-ent-bg-light dark:bg-ent-bg-dark transition-colors">
    <div className="max-w-3xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-ent-secondary font-bold mb-3"
        >
          FAQ
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl text-ent-text dark:text-ent-text-dark"
        >
          Common Questions
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white dark:bg-ent-surface-dark rounded-2xl border border-ent-primary/10 dark:border-white/5 px-6 shadow-soft data-[state=open]:border-ent-primary/30"
            >
              <AccordionTrigger className="font-body font-semibold text-ent-text dark:text-ent-text-dark text-left py-5 hover:no-underline hover:text-ent-primary dark:hover:text-ent-sage [&[data-state=open]]:text-ent-primary dark:[&[data-state=open]]:text-ent-sage">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-ent-text-muted dark:text-ent-text-muted-dark font-body text-sm leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

// ─── Footer CTA ───────────────────────────────────────────────────────────────

const FooterCTASection = () => (
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

// ─── Page ─────────────────────────────────────────────────────────────────────

const HomePage = () => {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTo");
    if (target) {
      sessionStorage.removeItem("scrollTo");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  return (
    <main className="bg-ent-bg-light dark:bg-ent-bg-dark transition-colors">
      <SEO
        title="Wilderness Confluence Centre | Retreat Venue on Salt Spring Island, BC"
        description="A forested retreat venue on Salt Spring Island for facilitators, retreat leaders, and corporate teams. You bring the vision — we provide the land, the meals, and the magic."
        keywords="retreat venue Salt Spring Island, forest retreat BC, nature retreat venue, facilitator venue, corporate retreat BC"
      />
      <HeroSection />
      <DifferentVenueSection />
      <ComfortSection />
      <PackagesSection />
      <LandscapeSection />
      <HowItWorksSection />
      <AddonsSection />
      <FAQSection />
      <FooterCTASection />
    </main>
  );
};

export default HomePage;
