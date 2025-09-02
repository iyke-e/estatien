import Image from 'next/image';
import React from 'react'
import starIcon from "@/assets/star.svg"


interface TestimonyProps {
    star: number;
    remark: string;
    description: string;
    profilepics: string;
    name: string;
    location: string;
    className?: string
}

const TestimonialCard = ({
    star,
    remark,
    description,
    profilepics,
    name,
    location,
    className
}: TestimonyProps) => {
    return (
        <div className={`${className} w-full rounded-lg p-5 border space-y-4 border-gray-15`}>
            <div className='flex gap-2 items-center'>
                {Array.from({ length: star }).map((_, index) => (
                    <Image key={index} src={starIcon} width={18} height={18} alt='' />
                ))}
            </div>

            <h3 className="text-xl mb-3">{remark}</h3>
            <p className='text-white'>{description}</p>

            <div className='flex items-center gap-2 mt-6'>
                <Image src={profilepics} alt='name' width={40} height={40} className='rounded-full' />
                <div className='space-y-1'>
                    <p className='text-white'>{name}</p>
                    <p>{location}</p>
                </div>
            </div>

        </div>
    )
}

export default TestimonialCard