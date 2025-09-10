import AboutHero from "@/components/pages/about/AboutHero";
import Achievement from "@/components/pages/about/Achievement";
import Clients from "@/components/pages/about/Clients";
import Navigating from "@/components/pages/about/Navigating";
import Team from "@/components/pages/about/Team";
import Values from "@/components/pages/about/Values";
import Cta from "@/components/pages/shared/Cta";
import React from "react";

const About = () => {
  return (
    <div className="mt-16">
      <AboutHero />
      <Values />
      <Achievement />
      <Navigating />
      <Team />
      <Clients />
      <Cta />
    </div>
  );
};

export default About;
