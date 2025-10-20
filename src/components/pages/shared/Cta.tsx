"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import lefttopcta from "@/assets/lefttopcta.svg";
import rightbottomcta from "@/assets/rightbottomcta.svg";

const Cta = () => {
  return (
    <div
      className={`p-inline xs:flex-between items-start gap-20 border-y bg-filled sm:bg-bottom border-gray-10 py-12 mt-10 relative overflow-hidden`}
    >
      <Image
        alt=""
        src={lefttopcta}
        width={300}
        height={300}
        className="absolute  md:bottom-0 top-0 md:top-auto rotate-90  object-cover md:object-contain aspect-square md:aspect-auto md:rotate-0  -z-10 left-0 md:h-fit md:w-100"
      />
      {/* <Image
        alt=""
        src={lefttopcta}
        width={300}
        height={300}
        className="absolute bottom-0 -z-10 left-0 h-fit w-100"
      /> */}
      <Image
        alt=""
        src={rightbottomcta}
        width={300}
        height={300}
        className="absolute bottom-0 -z-10 right-0 h-fit w-100"
      />
      <div>
        <h2 className="max-w-80 xs:max-w-none mb-3">
          Start Your Real Estate Journey Today
        </h2>
        <p className="mb-8 sm:mb-0 max-w-[1000px]">{`Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.`}</p>
      </div>
      <div>
        <Button className="w-full text-nowrap">Explore Properties</Button>
      </div>
    </div>
  );
};

export default Cta;
