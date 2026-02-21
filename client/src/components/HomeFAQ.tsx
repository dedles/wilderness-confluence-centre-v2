import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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

const HomeFAQ = () => (
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

export default HomeFAQ;
