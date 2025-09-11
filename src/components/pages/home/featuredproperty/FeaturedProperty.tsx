"use client";

import React, { useRef, useState } from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import seasideimg from "@/assets/seasideimg.png";
import Section from "../../shared/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const featuredProperty = [
  {
    imgurl: seasideimg,
    name: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa nestled in a peaceful suburban neighborhood. Featuring a spacious open-plan living area, modern kitchen with premium finishes, and large windows that fill the home with natural light. The property boasts a private garden, two-car garage, and a master suite with a walk-in closet and balcony views. Perfect for families seeking comfort, style, and convenience close to schools, parks, and shopping centers.",
    bedroomNo: 4,
    bathroomNo: 3,
    price: 550000,
    propertyUrl: "/",
  },
  {
    imgurl: seasideimg,
    name: "Metropolitan Haven",
    description:
      "A chic and fully furnished 2-bedroom apartment offering breathtaking panoramic views of the city skyline. Designed with modern interiors, sleek finishes, and floor-to-ceiling windows that maximize natural light. Residents enjoy access to premium amenities including a rooftop lounge, fitness center, and 24/7 security. Perfect for professionals or small families seeking an elegant urban lifestyle in the heart of the city.",
    bedroomNo: 2,
    bathroomNo: 2,
    price: 350000,
    propertyUrl: "/",
  },
  {
    imgurl: seasideimg,
    name: "Rustic Retreat Cottage",
    description:
      "A cozy 3-bedroom, 2-bathroom cottage set against a backdrop of rolling hills and greenery. This home combines rustic charm with modern comfort, featuring exposed wooden beams, a stone fireplace, and a sunlit kitchen. Ideal for those seeking a peaceful escape without compromising on convenience.",
    bedroomNo: 3,
    bathroomNo: 2,
    price: 275000,
    propertyUrl: "/",
  },
  {
    imgurl: seasideimg,
    name: "Lakeside Luxury Estate",
    description:
      "An expansive 5-bedroom, 4-bathroom estate with stunning lake views. Boasting an open floor plan, chef’s kitchen, home theater, and outdoor entertaining space with a private dock. Perfect for large families or those who love to host in style.",
    bedroomNo: 5,
    bathroomNo: 4,
    price: 1250000,
    propertyUrl: "/",
  },
  {
    imgurl: seasideimg,
    name: "Urban Edge Loft",
    description:
      "A trendy 1-bedroom, 1-bathroom loft in the heart of downtown. Featuring high ceilings, exposed brick walls, and industrial-chic design. Close to restaurants, nightlife, and public transport, making it an ideal choice for young professionals.",
    bedroomNo: 1,
    bathroomNo: 1,
    price: 200000,
    propertyUrl: "/",
  },
  {
    imgurl: seasideimg,
    name: "Countryside Charm Farmhouse",
    description:
      "A picturesque 3-bedroom, 2-bathroom farmhouse surrounded by open fields and fresh air. Includes a wraparound porch, updated kitchen, and spacious barn for storage or hobbies. Perfect for those looking for a slower pace of life.",
    bedroomNo: 3,
    bathroomNo: 2,
    price: 320000,
    propertyUrl: "/",
  },
  {
    imgurl: seasideimg,
    name: "Sunset Heights Penthouse",
    description:
      "A luxurious 3-bedroom, 3-bathroom penthouse perched above the city with breathtaking sunset views. Featuring a private elevator, designer interiors, gourmet kitchen, and expansive rooftop terrace with jacuzzi. The ultimate in modern city living.",
    bedroomNo: 3,
    bathroomNo: 3,
    price: 850000,
    propertyUrl: "/",
  },
];

const FeaturedProperty = () => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = featuredProperty.length;

  return (
    <div className="mt-15 md:mt-15 p-inline">
      <Section
        sectionTitle="Featured Properties"
        description="Explore our handpicked selection of featured properties..."
        cta="View All Properties"
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
            780: { slidesPerView: 3 },
          }}
        >
          {featuredProperty.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturedPropertyCard
                imgurl={item.imgurl.src}
                name={item.name}
                description={item.description}
                bedroomNo={item.bedroomNo}
                bathroomNo={item.bathroomNo}
                price={item.price}
                propertyUrl={item.propertyUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </div>
  );
};

export default FeaturedProperty;
