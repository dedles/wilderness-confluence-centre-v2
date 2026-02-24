import { Send, CheckCircle } from "lucide-react";
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
  "w-full bg-white dark:bg-ent-bg-dark border border-ent-primary/15 dark:border-white/10 rounded-xl px-4 py-3 text-ent-text dark:text-ent-text-dark focus:ring-2 focus:ring-ent-primary placeholder:text-gray-400 dark:placeholder:text-gray-500 font-body shadow-none";

const labelClass =
  "block text-sm font-bold mb-2 text-ent-text dark:text-ent-text-dark font-body";

const ContactPage = () => {
  const [formState, handleSubmit] = useForm("mdalpvye");

  return (
    <>
      <SEO
        title="Plan Your Retreat | Wilderness Confluence Centre"
        description="Tell us about your retreat vision and we'll get back to you within 48 hours. Serving facilitators, retreat leaders, and corporate groups on Salt Spring Island, BC."
        keywords="retreat inquiry Salt Spring Island, book retreat venue BC, facilitate retreat Salt Spring Island, corporate retreat inquiry"
      />

      <section className="min-h-screen bg-warm-white dark:bg-ent-bg-dark transition-colors pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-cream dark:bg-ent-surface-dark rounded-3xl p-8 md:p-12">
            {!formState.succeeded ? (
              <>
                <h1 className="font-display text-4xl text-ent-primary dark:text-ent-sage mb-8">
                  Plan Your Retreat
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={labelClass}>Your Name</label>
                    <Input name="name" placeholder="Jane Smith" className={inputClass} required />
                    <ValidationError prefix="Name" field="name" errors={formState.errors} className="text-sm text-red-500 mt-1" />
                  </div>

                  <div>
                    <label className={labelClass}>Email</label>
                    <Input name="email" type="email" placeholder="jane@company.com" className={inputClass} required />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-sm text-red-500 mt-1" />
                  </div>

                  <div>
                    <label className={labelClass}>Company / Organization</label>
                    <Input name="organization" placeholder="Acme Corp" className={inputClass} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Type of Retreat</label>
                      <Select name="retreat_type">
                        <SelectTrigger className="w-full bg-white dark:bg-ent-bg-dark border border-ent-primary/15 dark:border-white/10 rounded-xl px-4 h-[46px] font-body text-ent-text dark:text-ent-text-dark focus:ring-2 focus:ring-ent-primary">
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
                      <label className={labelClass}>Group Size</label>
                      <Select name="group_size">
                        <SelectTrigger className="w-full bg-white dark:bg-ent-bg-dark border border-ent-primary/15 dark:border-white/10 rounded-xl px-4 h-[46px] font-body text-ent-text dark:text-ent-text-dark focus:ring-2 focus:ring-ent-primary">
                          <SelectValue placeholder="Select group size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10">Under 10</SelectItem>
                          <SelectItem value="10-20">10–20</SelectItem>
                          <SelectItem value="20-30">20+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Preferred Dates or Timeframe</label>
                    <Input name="dates" placeholder="e.g. Late June 2025" className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>What are you hoping to get out of this retreat?</label>
                    <Textarea
                      name="vision"
                      placeholder="Tell us about your goals..."
                      rows={5}
                      className={`${inputClass} resize-none`}
                      required
                    />
                    <ValidationError prefix="Vision" field="vision" errors={formState.errors} className="text-sm text-red-500 mt-1" />
                  </div>

                  <div>
                    <label className={labelClass}>How did you hear about us? (optional)</label>
                    <Input name="referral" placeholder="e.g. Instagram, a friend, Google..." className={inputClass} />
                  </div>

                  <Button
                    type="submit"
                    disabled={formState.submitting}
                    className="w-full bg-ent-secondary hover:bg-ent-secondary/90 text-white font-bold text-base py-6 rounded-xl transition-all flex justify-center items-center gap-2 hover:-translate-y-0.5"
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
                  Thank you for reaching out. We'll be in touch within 48 hours to discuss your retreat.
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
