import { useState, useEffect } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import SEO from "../components/SEO";
import { gallerySections, GalleryImage } from "../lib/GalleryData";

interface LightboxState {
  sectionKey: string;
  index: number;
}

function GalleryGrid({
  images,
  onOpen,
}: {
  images: GalleryImage[];
  onOpen: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-6 auto-rows-[300px]">
      {images.map((image, index) => {
        const isWide = index % 8 === 4;
        return (
          <div
            key={index}
            className={`relative group rounded-2xl overflow-hidden shadow-md cursor-pointer ${isWide ? "md:col-span-2" : ""
              }`}
            onClick={() => onOpen(index)}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ent-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-display text-base">{image.caption}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const activeImages = lightbox
    ? (gallerySections.find((s) => s.key === lightbox.sectionKey)?.images ?? [])
    : [];

  const openModal = (sectionKey: string, index: number) => {
    setLightbox({ sectionKey, index });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  const prev = () =>
    setLightbox((s) =>
      s ? { ...s, index: s.index === 0 ? activeImages.length - 1 : s.index - 1 } : s
    );

  const next = () =>
    setLightbox((s) =>
      s ? { ...s, index: s.index === activeImages.length - 1 ? 0 : s.index + 1 } : s
    );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  const scrollToGallery = () => {
    document.getElementById("gallery-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="Gallery | Wilderness Confluence Centre"
        description="Photos of the Wilderness Confluence Centre — forested land, campsites, gathering spaces, fire circles, and the beauty of Salt Spring Island, BC."
        keywords="retreat venue photos, Salt Spring Island retreat venue, forest retreat gallery, camping retreat BC"
      />

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-ent-surface-dark">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80"
            alt="Forest at Wilderness Confluence Centre"
            className="w-full h-full object-cover opacity-80"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(31, 41, 35, 0.3) 0%, rgba(31, 41, 35, 0.65) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <span className="text-ent-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6">
            The Land
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
            Gallery
          </h1>
          <p className="text-xl text-white/80 max-w-xl font-body leading-relaxed drop-shadow-md">
            A look at the land, the spaces, and the setting.
          </p>
        </div>

        <button
          onClick={scrollToGallery}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/60 hover:text-white/90 transition-colors z-10"
          aria-label="Scroll to gallery"
        >
          <ArrowDown size={32} />
        </button>
      </section>

      <div
        id="gallery-grid"
        className="bg-ent-bg-light dark:bg-ent-bg-dark transition-colors"
      >
        {gallerySections.map((section, i) => (
          <>
            <section key={section.key} className="py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-display text-4xl md:text-5xl text-ent-text dark:text-ent-text-dark mb-12 text-center">
                  {section.title}
                </h2>
                <GalleryGrid
                  images={section.images}
                  onOpen={(idx) => openModal(section.key, idx)}
                />
              </div>
            </section>

            {i < gallerySections.length - 1 && (
              <div key={`divider-${section.key}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-ent-primary/10 dark:border-white/10" />
              </div>
            )}
          </>
        ))}

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-[1001] flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close button — fixed to viewport top-right */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-[1003]"
            aria-label="Close gallery"
          >
            <X size={18} />
          </button>

          {/* Prev arrow — fixed to viewport left edge */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="fixed left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-[1002]"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image panel */}
          <div
            className="relative w-[55%] max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImages[lightbox.index]?.src || ""}
              alt={activeImages[lightbox.index]?.caption || ""}
              className="w-full max-h-[78vh] object-contain block"
            />

            {/* Caption + counter */}
            <div className="flex justify-between items-center pt-3 text-white/80">
              <span className="font-body text-sm italic">
                {activeImages[lightbox.index]?.caption || ""}
              </span>
              <span className="font-body text-sm text-white/50 ml-6 shrink-0">
                {lightbox.index + 1} / {activeImages.length}
              </span>
            </div>
          </div>

          {/* Next arrow — fixed to viewport right edge */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="fixed right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-[1002]"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
