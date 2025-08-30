"use client"

import React, { useState } from 'react'
import bannerImg from "@/assets/banner.svg"
import { FaXmark } from "react-icons/fa6";

const Banner = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div>
            {
                isOpen && <div style={{ backgroundImage: `url(${bannerImg.src})` }} className='flex-between xs:justify-center relative p-inline py-4.5 bg-filled'>
                    <p className='text-xs font-semibold md:text-center'>✨Discover Your Dream Property with Estatein <a href="">Learn More</a> </p>
                    <div onClick={() => { setIsOpen(false) }} className='bg-white/10 rounded-full square-40 grid-center xs:absolute xs:right-8 xs:top-1/2 xs:-translate-y-1/2'>
                        <FaXmark className='square-20' />
                    </div>
                </div>
            }
        </div>
    )
}

export default Banner