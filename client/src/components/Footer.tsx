import { Link } from "wouter";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionLink = (sectionId: string) => {
    if (window.location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", sectionId);
      window.location.href = "/";
    }
  };

  const linkClass = "hover:text-white transition-colors";

  return (
    <footer className="bg-ent-surface-dark text-white py-16 relative">
      {/* Back to top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="bg-ent-primary hover:bg-white hover:text-ent-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">

          {/* Col 1 — Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight mb-5 block text-white no-underline hover:text-ent-sage transition-colors leading-tight"
            >
              Wilderness Confluence Centre
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              A retreat venue rooted in intentional community on Salt Spring Island, British Columbia.
              An offering of Entelechy.
            </p>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest font-body">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <Link href="/about" className={`${linkClass} no-underline text-inherit`}>About Us</Link>
              </li>
              <li>
                <Link href="/gallery" className={`${linkClass} no-underline text-inherit`}>Gallery</Link>
              </li>
              <li>
                <button onClick={() => handleSectionLink("packages")} className={`${linkClass} text-left`}>
                  Packages
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 — Entelechy (no title) */}
          <div>
            <div className="mb-5 h-[1.125rem]" />
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="https://www.entelechysaltspring.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Entelechy Ecovillage
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest font-body">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <Link href="/contact" className={`${linkClass} no-underline text-inherit`}>
                  Plan Your Retreat
                </Link>
              </li>
              <li>Salt Spring Island, BC, Canada</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="text-xs text-white/30 text-center">
          <p>&copy; {new Date().getFullYear()} Wilderness Confluence Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
