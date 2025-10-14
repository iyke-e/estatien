import MakeItHappen from "@/components/pages/property/MakeItHappen";
import PropertyDisplay from "@/components/pages/property/PropertyDisplay";
import PropertyHero from "@/components/pages/property/PropertyHero";
import Cta from "@/components/pages/shared/Cta";
import React from "react";

const Property = () => {
  return (
    <div>
      <PropertyHero />
      <PropertyDisplay />
      <MakeItHappen />
      <Cta />
    </div>
  );
};

export default Property;
