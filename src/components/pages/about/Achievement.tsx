import CardWrapper from "@/components/ui/CardWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";

const Achievement = () => {
  return (
    <div className="p-inline mt-24">
      <SectionHeader
        sectionTitle="Our Achievements"
        description="Our achievements reflect the trust we have earned and the impact we’ve made in the real estate industry. From helping families find their dream homes to supporting investors with profitable opportunities, we have consistently delivered value at every stage. Over the years, we’ve expanded our portfolio, completed landmark projects, and built lasting relationships with clients who see us not just as agents, but as partners in their journey."
      />

      <div className="flex gap-6 mt-12">
        <CardWrapper className="grid gap-4 p-6 cardshadow">
          <h4 className="text-xl mb-3">3+ Years of Excellence</h4>
          <p>
            With over 3 years in the industry, we've amassed a wealth of
            knowledge and experience, becoming a go-to resource for all things
            real estate.
          </p>
        </CardWrapper>
        <CardWrapper className="grid gap-4 p-6 cardshadow">
          <h4 className="text-xl mb-3">Happy Clients</h4>
          <p>
            Our greatest achievement is the satisfaction of our clients. Their
            success stories fuel our passion for what we do.
          </p>
        </CardWrapper>
        <CardWrapper className="grid gap-4 p-6 cardshadow">
          <h4>Industry Recognition</h4>
          <p>
            We've earned the respect of our peers and industry leaders, with
            accolades and awards that reflect our commitment to excellence.
          </p>
        </CardWrapper>
      </div>
    </div>
  );
};

export default Achievement;
