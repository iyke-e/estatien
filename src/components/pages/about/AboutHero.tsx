import React from "react";
import Image from "next/image";
import CardWrapper from "@/components/ui/CardWrapper";
import aboutHeroimg from "@/assets/aboutheroimg.png";
import SectionHeader from "@/components/ui/SectionHeader";

const AboutHero = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-[5fr_4fr] p-inline">
      <div>
        <SectionHeader
          sectionTitle="Our Journey"
          description={`Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.`}
        />

        <div
          className={"flex flex-wrap mt-12 items-center justify-start gap-4 "}
        >
          <CardWrapper className="grid px-6 py-3">
            <h1>200+</h1>
            <p className="text-nowrap">Happy Customers</p>
          </CardWrapper>
          <CardWrapper className="grid w-fit px-6 py-3">
            <h1>10k</h1>
            <p className="text-nowrap">Properties for Clients</p>
          </CardWrapper>
          <CardWrapper className="grid w-fit px-6 py-3">
            <h1>16+</h1>
            <p className="text-nowrap">Years of Experience</p>
          </CardWrapper>
        </div>
      </div>
      <Image className={"w-full"} src={aboutHeroimg} alt="section star" />

      <div></div>
    </div>
  );
};

export default AboutHero;
