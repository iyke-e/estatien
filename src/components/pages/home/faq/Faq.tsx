
"use client"
import React, { useRef, useState } from 'react'
import wade from "@/assets/wadepics.png"
import emile from "@/assets/emelie.png"
import Section from '../Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import FaqCard from './FaqCard';
const faqs = [
    {
        question: "How do I search for properties on Estatein?",
        response: "Use our intuitive search filters to find properties by location, price, property type, and more.",
        readMoreUrl: "/faqs/search-properties"
    },
    {
        question: "Can I schedule a property viewing online?",
        response: "Yes, you can request a property tour directly from the listing page, and our agents will confirm a convenient time with you.",
        readMoreUrl: "/faqs/schedule-viewing"
    },
    {
        question: "Do you provide mortgage or financing assistance?",
        response: "We connect you with trusted financial institutions and mortgage advisors to help you explore financing options that suit your needs.",
        readMoreUrl: "/faqs/financing"
    },
    {
        question: "Are the property listings updated regularly?",
        response: "Absolutely. Our platform updates listings in real time to ensure you always see the latest available properties.",
        readMoreUrl: "/faqs/listing-updates"
    },
    {
        question: "What fees should I expect when buying a property?",
        response: "Typical fees include agency commission, legal documentation, and applicable taxes. We provide a clear breakdown for every transaction.",
        readMoreUrl: "/faqs/property-fees"
    },
    {
        question: "Can I list my property for sale or rent on Estatein?",
        response: "Yes, property owners and agents can easily create an account and list their properties with photos, descriptions, and pricing details.",
        readMoreUrl: "/faqs/list-property"
    }
];

const Faq = () => {

    const swiperRef = useRef<any>(null)
    const [currentIndex, setCurrentIndex] = useState(1)
    const totalSlides = faqs.length


    return (
        <div className="mt-15 md:mt-15 p-inline">

            <Section
                sectionTitle="Frequently Asked Questions"
                description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
                cta="View All FAQs"
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
                        speed={500}

                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
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
                        {faqs.map((item, index) => (
                            <SwiperSlide key={index}>
                                <FaqCard

                                    question={item.question}
                                    response={item.response}

                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>


            </Section>

        </div>
    )
}

export default Faq