"use client";

import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

interface SliderProp {
    children: ReactNode;
    swiperRef?: React.RefObject<SwiperType | null>;
    onSlideChange?: (index: number, total: number) => void;
}

const Slider = ({ children, swiperRef, onSlideChange }: SliderProp) => {
    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={3}
            spaceBetween={16}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false, // ✅ keep autoplay after interaction
            }}
            breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
                if (swiperRef?.current !== undefined) {
                    swiperRef.current = swiper;
                }
                const totalSlides =
                    swiper.slides.length; // ✅ real total
                onSlideChange?.(swiper.realIndex + 1, totalSlides);
            }}
            onSlideChange={(swiper) => {
                const totalSlides =
                    swiper.slides.length; // ✅ real total
                onSlideChange?.(swiper.realIndex + 1, totalSlides);
            }}
        >
            {children}
        </Swiper>
    );
};

export default Slider;
