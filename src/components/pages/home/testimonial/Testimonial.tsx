
"use client"
import React, { useRef, useState } from 'react'
import TestimonialCard from './TestimonialCard';
import wade from "@/assets/wadepics.png"
import emile from "@/assets/emelie.png"
import Section from '../Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const testimonies = [
    {
        star: 5,
        remark: "Exceptional Service!",
        description:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        profilepics: wade,
        name: "Wade Warren",
        location: "USA, California",
    },
    {
        star: 4,
        remark: "Smooth Process",
        description:
            "The process was seamless and stress-free. Estatein guided us every step of the way.",
        profilepics: emile,
        name: "Brooklyn Simmons",
        location: "Canada, Toronto",
    },
    {
        star: 5,
        remark: "Dream Home Found",
        description:
            "We finally found our forever home thanks to Estatein. Their attention to detail is unmatched.",
        profilepics: emile,
        name: "Esther Howard",
        location: "UK, London",
    },
    {
        star: 5,
        remark: "Highly Professional",
        description:
            "Very professional and responsive team. They made buying our property easy.",
        profilepics: wade,
        name: "Guy Hawkins",
        location: "Australia, Sydney",
    },
    {
        star: 4,
        remark: "Reliable Partner",
        description:
            "I trusted Estatein with my first investment property, and they delivered beyond expectations.",
        profilepics: wade,
        name: "Cameron Williamson",
        location: "USA, New York",
    },
    {
        star: 5,
        remark: "Fantastic Support",
        description:
            "Their customer support team went above and beyond to help us throughout.",
        profilepics: emile,
        name: "Devon Lane",
        location: "Germany, Berlin",
    },
    {
        star: 5,
        remark: "Quick & Easy",
        description:
            "From start to finish, everything was quick, smooth, and transparent.",
        profilepics: wade,
        name: "Leslie Alexander",
        location: "France, Paris",
    },
    {
        star: 4,
        remark: "Value for Money",
        description:
            "Great service at a fair price. They really understand what clients need.",
        profilepics: emile,
        name: "Ronald Richards",
        location: "UAE, Dubai",
    },
    {
        star: 5,
        remark: "Top Notch Experience",
        description:
            "The best property service I’ve ever used. Would definitely recommend Estatein.",
        profilepics: wade,
        name: "Courtney Henry",
        location: "USA, Texas",
    },
    {
        star: 5,
        remark: "Trustworthy Team",
        description:
            "They made me feel comfortable and confident throughout the entire process.",
        profilepics: wade,
        name: "Kathryn Murphy",
        location: "Ireland, Dublin",
    },
    {
        star: 4,
        remark: "Stress-Free Purchase",
        description:
            "Everything was handled with so much care. I didn’t have to worry about a thing.",
        profilepics: emile,
        name: "Theresa Webb",
        location: "USA, Chicago",
    },
    {
        star: 5,
        remark: "Outstanding Results",
        description:
            "Estatein exceeded all my expectations. My family couldn’t be happier with our new home.",
        profilepics: wade,
        name: "Jacob Jones",
        location: "South Africa, Cape Town",
    },
];
const Testimonial = () => {

    const swiperRef = useRef<any>(null)
    const [currentIndex, setCurrentIndex] = useState(1)
    const totalSlides = testimonies.length


    return (
        <div className="mt-15 md:mt-15 p-inline">

            <Section
                sectionTitle="What Our Clients Say"
                description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                cta="View All Testimonies"
                swiperRef={swiperRef}
                currentIndex={currentIndex}
                totalSlides={totalSlides}
            >
                <>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={"auto"}
                        spaceBetween={20}
                        loop={true}
                        speed={2000}

                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        onSlideChange={(swiper) => {
                            setCurrentIndex(swiper.realIndex + 1)
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            520: { slidesPerView: 2 },
                            780: { slidesPerView: 3 },
                        }}
                    >
                        {testimonies.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard
                                    star={item.star}
                                    remark={item.remark}
                                    description={item.description}
                                    profilepics={item.profilepics.src}
                                    name={item.name}
                                    location={item.location}


                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>


            </Section>

        </div>
    )
}

export default Testimonial