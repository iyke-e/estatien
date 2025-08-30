"use client"

import React, { useRef, useEffect } from "react"
import bannerImg from "@/assets/banner.svg"
import { FaXmark } from "react-icons/fa6"
import gsap from "gsap"

interface BannerProps {
    onClose?: () => void
}

const Banner: React.FC<BannerProps> = ({ onClose }) => {
    const bannerRef = useRef<HTMLDivElement>(null)

    const handleClose = () => {
        if (bannerRef.current) {
            gsap.to(bannerRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: "power2.inOut",
                onComplete: () => {
                    bannerRef.current!.style.display = "none"
                    if (onClose) onClose()
                }
            })
        }
    }

    return (
        <div
            ref={bannerRef}
            style={{ backgroundImage: `url(${bannerImg.src})` }}
            className="flex-between xs:justify-center relative p-inline py-4.5 bg-filled overflow-hidden"
        >
            <p className="text-xs font-semibold md:text-center">
                ✨ Discover Your Dream Property with Estatein{" "}
                <a href="" className="underline">Learn More</a>
            </p>
            <button
                onClick={handleClose}
                className="bg-white/10 rounded-full square-40 grid-center xs:absolute xs:right-8 xs:top-1/2 xs:-translate-y-1/2"
            >
                <FaXmark className="square-20" />
            </button>
        </div>
    )
}

export default Banner
