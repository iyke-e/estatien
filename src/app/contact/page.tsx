import ContactCards from "@/components/pages/contact/ContactCards";
import ContactHero from "@/components/pages/contact/ContactHero";
import Gallery from "@/components/pages/contact/Gallery";
import Letsconnect from "@/components/pages/contact/Letsconnect";
import Office from "@/components/pages/contact/Office";
import Cta from "@/components/pages/shared/Cta";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactCards />
      <Letsconnect />
      <Office />
      <Gallery />
      <Cta />
    </div>
  );
};

export default page;
