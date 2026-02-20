import { Send, CheckCircle, MapPin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SEO from "../components/SEO";

const inputClass =
  "w-full bg-ent-cream dark:bg-ent-bg-dark border-none shadow-inner-soft rounded-xl px-5 py-3.5 text-ent-text dark:text-ent-text-dark focus:ring-2 focus:ring-ent-primary placeholder:text-gray-400 dark:placeholder:text-gray-500 font-body";

const labelClass =
  "block text-sm font-bold mb-2 ml-1 text-ent-text-muted dark:text-ent-text-muted-dark font-body";

const ContactPage = () => {
  const [formState, handleSubmit] = useForm("xyzformid");

  return (
    <>
      <SEO
        title="Plan Your Retreat | Wilderness Confluence Centre"
        description="Tell us about your retreat vision and we'll get back to you within 48 hours. Serving facilitators, retreat leaders, and corporate groups on Salt Spring Island, BC."
        keywords="retreat inquiry Salt Spring Island, book retreat venue BC, facilitate retreat Salt Spring Island, corporate retreat inquiry"
      />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-ent-surface-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/outdoor_garden.jpg"
            alt="Forested retreat grounds"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-ent-secondary font-bold mb-4">
            Inquire
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-5 leading-tight">
            Plan Your Retreat
          </h1>
          <p className="text-white/70 font-body text-lg leading-relaxed">
            Tell us about your vision and we'll get back to you within 48 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 bg-ent-bg-light dark:bg-ent-bg-dark transition-colors">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
          {/* Left info column */}
          <div className="lg:col-span-2 space-y-8 pt-2">
            <div>
              <h2 className="font-display text-3xl text-ent-primary dark:text-ent-sage mb-4 leading-tight">
                Let's build something your people will carry with them.
              </h2>
              <p className="text-ent-text-muted dark:text-ent-text-muted-dark font-body leading-relaxed">
                Whether you're leading a tea ceremony for 8, a permaculture intensive for 20, or
                a company offsite for 30 — we want to hear about it. Fill out the form and we'll
                follow up to discuss the details.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ent-primary/10 dark:bg-ent-primary/20 flex items-center justify-center text-ent-primary dark:text-ent-sage shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-body font-semibold text-ent-text dark:text-ent-text-dark text-sm">
                    Location
                  </p>
                  <p className="text-ent-text-muted dark:text-ent-text-muted-dark text-sm font-body">
                    Salt Spring Island, BC, Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-ent-sage/20 dark:bg-ent-surface-dark rounded-2xl p-6 border border-ent-primary/10 dark:border-white/5">
              <p className="font-body text-sm text-ent-text-muted dark:text-ent-text-muted-dark leading-relaxed">
                Or reach us directly at{" "}
                <a
                  href="mailto:info@wildernessconfluence.ca"
                  className="text-ent-primary dark:text-ent-sage font-medium hover:underline"
                >
                  info@wildernessconfluence.ca
                </a>{" "}
                or{" "}
                <a
                  href="tel:+12505551234"
                  className="text-ent-primary dark:text-ent-sage font-medium hover:underline"
                >
                  +1 (250) 555-1234
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-ent-surface-light dark:bg-ent-surface-dark rounded-3xl p-8 md:p-10 shadow-xl border border-ent-primary/10 dark:border-white/5">
            {!formState.succeeded ? (
              <>
                <h3 className="font-display text-2xl mb-7 text-ent-primary dark:text-ent-sage">
                  Retreat Inquiry
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className={labelClass}>Your name *</label>
                    <Input name="name" placeholder="Your name" className={inputClass} required />
                    <ValidationError prefix="Name" field="name" errors={formState.errors} className="text-sm text-red-500 mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-sm text-red-500 mt-1" />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className={labelClass}>Organization or group name (optional)</label>
                    <Input
                      name="organization"
                      placeholder="Your organization or group"
                      className={inputClass}
                    />
                  </div>

                  {/* Type of retreat + Group size */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Type of retreat *</label>
                      <Select name="retreat_type" required>
                        <SelectTrigger className="bg-ent-cream dark:bg-ent-bg-dark border-none shadow-inner-soft rounded-xl px-5 h-[50px] font-body text-ent-text dark:text-ent-text-dark focus:ring-2 focus:ring-ent-primary">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wellness-meditation">Wellness / Meditation</SelectItem>
                          <SelectItem value="workshop-training">Workshop / Training</SelectItem>
                          <SelectItem value="circle">Men's or Women's Circle</SelectItem>
                          <SelectItem value="corporate">Corporate / Team Building</SelectItem>
                          <SelectItem value="ceremony">Ceremony / Gathering</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className={labelClass}>Group size *</label>
                      <Select name="group_size" required>
                        <SelectTrigger className="bg-ent-cream dark:bg-ent-bg-dark border-none shadow-inner-soft rounded-xl px-5 h-[50px] font-body text-ent-text dark:text-ent-text-dark focus:ring-2 focus:ring-ent-primary">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10">Under 10</SelectItem>
                          <SelectItem value="10-20">10–20</SelectItem>
                          <SelectItem value="20-30">20–30</SelectItem>
                          <SelectItem value="30-plus">30+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Dates */}
                  <div>
                    <label className={labelClass}>Preferred dates or timeframe *</label>
                    <Input
                      name="dates"
                      placeholder="e.g. July 2026, or a specific date range"
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* Vision */}
                  <div>
                    <label className={labelClass}>
                      Tell us about your retreat — what are you envisioning? *
                    </label>
                    <Textarea
                      name="vision"
                      placeholder="Describe your retreat: the theme, the experience you're creating, any special requirements..."
                      rows={5}
                      className={`${inputClass} resize-none`}
                      required
                    />
                    <ValidationError prefix="Vision" field="vision" errors={formState.errors} className="text-sm text-red-500 mt-1" />
                  </div>

                  {/* How did you hear */}
                  <div>
                    <label className={labelClass}>How did you hear about us? (optional)</label>
                    <Input
                      name="referral"
                      placeholder="e.g. Instagram, a friend, Google..."
                      className={inputClass}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formState.submitting}
                    className="w-full bg-ent-secondary hover:bg-ent-secondary/90 text-white font-bold text-base py-6 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 hover:-translate-y-0.5"
                  >
                    <span>{formState.submitting ? "Sending..." : "Send Inquiry"}</span>
                    <Send size={16} />
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 space-y-5">
                <CheckCircle size={52} className="text-ent-primary dark:text-ent-sage mx-auto" />
                <h3 className="font-display text-2xl text-ent-primary dark:text-ent-sage">
                  Inquiry Received
                </h3>
                <p className="text-ent-text-muted dark:text-ent-text-muted-dark font-body max-w-sm mx-auto">
                  Thank you for reaching out. We'll be in touch within 48 hours to discuss your
                  retreat.
                </p>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-ent-primary hover:bg-ent-primary/90 text-white"
                >
                  Send Another Inquiry
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
