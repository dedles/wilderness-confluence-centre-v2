import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const NAV_LINKS = [
  { label: "Packages", sectionId: "packages" },
];

const Navbar = () => {
  const [location, navigate] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionLink = (sectionId: string) => {
    if (location === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", sectionId);
      navigate("/");
    }
    setMenuOpen(false);
  };

  const navLinkClass =
    "font-body text-base font-medium text-white/70 hover:text-white transition-colors cursor-pointer";

  const pageLinkClass = (href: string) =>
    `${navLinkClass} no-underline relative after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:rounded-full after:bg-white after:transition-all after:duration-200 ${
      location === href ? "text-white after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || location !== "/"
            ? "bg-ent-surface-dark/95 backdrop-blur-md py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline hover:opacity-90 transition-opacity"
          >
            <img src="/images/wcc-logo.png" alt="" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-semibold tracking-tight text-white leading-tight">
              Wilderness Confluence Centre
            </span>
          </Link>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className={pageLinkClass("/about")}>About</Link>
            <Link href="/gallery" className={pageLinkClass("/gallery")}>Gallery</Link>
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleSectionLink(link.sectionId)}
                className={navLinkClass}
              >
                {link.label}
              </button>
            ))}
            <DarkModeToggle />
            <Link
              href="/contact"
              className="bg-ent-secondary hover:bg-ent-secondary/90 text-white font-bold text-base py-2.5 px-5 rounded-xl transition-colors no-underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] max-w-[75vw] bg-ent-surface-dark z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => handleSectionLink(link.sectionId)}
              className="block w-full text-left py-3 px-3 rounded-lg font-body text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10">
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={`block py-3 px-3 rounded-lg font-body text-sm hover:bg-white/10 transition-colors no-underline ${location === "/about" ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
            >
              About
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMenuOpen(false)}
              className={`block py-3 px-3 rounded-lg font-body text-sm hover:bg-white/10 transition-colors no-underline ${location === "/gallery" ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 py-3 px-3 rounded-xl bg-ent-secondary text-white font-bold text-sm text-center no-underline hover:bg-ent-secondary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
