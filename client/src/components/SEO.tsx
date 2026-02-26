import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
}

const SEO = ({
  title = "Wilderness Confluence Centre | Retreat Venue on Salt Spring Island, BC",
  description = "A forested retreat venue on Salt Spring Island for facilitators, retreat leaders, and corporate teams. You bring the vision — we provide the land, the meals, and the magic.",
  keywords = "retreat venue Salt Spring Island, forest retreat BC, nature retreat venue, facilitator venue BC, corporate retreat",
  image = "https://www.wildernessconfluence.ca/images/gallery/grounds/morning_sunrise_landscape.jpg",
  type = "website",
  noIndex = false
}: SEOProps) => {
  const [location] = useLocation();
  const currentUrl = `https://www.wildernessconfluence.ca${location}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:type', type, true);

    // Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:url', currentUrl, true);
    updateMetaTag('twitter:image', image, true);

    // Robots
    updateMetaTag('robots', noIndex ? 'noindex, follow' : 'index, follow');

  }, [title, description, keywords, image, type, currentUrl, noIndex]);

  return null;
};

export default SEO;