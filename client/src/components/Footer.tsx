import { Link } from "wouter";
import { Instagram, Facebook, ArrowUp } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight mb-5 block text-white no-underline hover:text-ent-sage transition-colors leading-tight"
            >
              Wilderness Confluence Centre
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A retreat venue rooted in intentional community on Salt Spring Island, British Columbia.
              An offering of Entelechy.
            </p>
            {/* <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div> */}
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest font-body">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <Link href="/about" className="hover:text-white transition-colors no-underline text-inherit">
                  About Us
                </Link>
              </li>
              <li>
                <button onClick={() => handleSectionLink("packages")} className="hover:text-white transition-colors text-left">
                  Packages
                </button>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors no-underline text-inherit">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase text-xs tracking-widest font-body">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>Salt Spring Island, BC, Canada</li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors no-underline text-inherit">
                  Plan Your Retreat
                </Link>
              </li>
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
