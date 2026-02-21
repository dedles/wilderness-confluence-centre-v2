import { useEffect } from "react";
import SEO from "../components/SEO";
import HomeHero from "../components/HomeHero";
import HomeDifferentVenue from "../components/HomeDifferentVenue";
import HomeComfort from "../components/HomeComfort";
import HomePackages from "../components/HomePackages";
import HomeLandscape from "../components/HomeLandscape";
import HomeHowItWorks from "../components/HomeHowItWorks";
import HomeAddons from "../components/HomeAddons";
import HomeFAQ from "../components/HomeFAQ";
import HomeFooterCTA from "../components/HomeFooterCTA";

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
      <HomeHero />
      <HomeDifferentVenue />
      <HomeComfort />
      <HomePackages />
      <HomeLandscape />
      <HomeHowItWorks />
      <HomeAddons />
      <HomeFAQ />
      <HomeFooterCTA />
    </main>
  );
};

export default HomePage;
