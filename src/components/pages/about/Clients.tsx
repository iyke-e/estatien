"use client";
import SectionHeader from "@/components/ui/SectionHeader";

import React, { useRef, useState } from "react";
import seasideimg from "@/assets/seasideimg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Section from "../shared/Section";
import Button from "@/components/ui/Button";
import CardWrapper from "@/components/ui/CardWrapper";
import Image from "next/image";
import domainicon from "@/assets/domain.svg";
import categoryicon from "@/assets/category.svg";
const clientsTetimony = [
  {
    year: 2019,
    companyName: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimony:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    year: 2019,
    companyName: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimony:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    year: 2019,
    companyName: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimony:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    year: 2019,
    companyName: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimony:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    year: 2019,
    companyName: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimony:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    year: 2019,
    companyName: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimony:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    year: 2019,
    companyName: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimony:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
];

interface ClientCardProps {
  year: number;
  companyName: string;
  domain: string;
  category: string;
  testimony: string;
}
const ClientsCard = ({
  year,
  companyName,
  domain,
  category,
  testimony,
}: ClientCardProps) => {
  return (
    <CardWrapper className="p-8 !bg-black shadow-[0px_0px_10px_rgba(255,255,255,0.3)]">
      <div className="flex justify-between ">
        <div>
          <p className="mb-1">Since {year}</p>
          <h3 className="text-2xl">{companyName}</h3>
        </div>
        <Button btntype="black">Visit Website</Button>
      </div>
      <div className="grid mt-6 grid-cols-2">
        <div className="grid gap-1  ">
          <div className="flex gap-2 items-center">
            <Image width={20} height={20} alt="domain icon" src={domainicon} />
            <p>Domain</p>
          </div>
          <p className="text-white">{domain}</p>
        </div>
        <div className="grid gap-1  border-l border-gray-15 pl-6">
          <div className="flex gap-2 items-center">
            <Image
              alt="domain icon"
              width={20}
              height={20}
              src={categoryicon}
            />
            <p>Category</p>
          </div>
          <p className="text-white">{category}</p>
        </div>
      </div>
      <div className="grid gap-1 mt-8 border border-gray-15 rounded-lg p-6">
        <p>What They Said 🤗</p>
        <p className="text-white">{testimony}</p>
      </div>
    </CardWrapper>
  );
};

const Clients = () => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = clientsTetimony.length;

  return (
    <div className="mt-15 md:mt-15 p-inline">
      <Section
        sectionTitle="Our Valued Clients"
        description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving."
        swiperRef={swiperRef}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          speed={1000} // slower, smoother
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex + 1);
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
          }}
        >
          {clientsTetimony.map((item, index) => (
            <SwiperSlide key={index}>
              <ClientsCard
                year={item.year}
                companyName={item.companyName}
                domain={item.domain}
                category={item.category}
                testimony={item.testimony}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </div>
  );
};

export default Clients;
