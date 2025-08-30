import Button from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'
import heroimg from "@/assets/heroimg.png"



type heroCardProps = {
    metric: number,
    subtext: string,
    k?: boolean
}

const HeroCard = ({ metric, subtext, k }: heroCardProps) => {
    return (
        <div className='grow bg-gray-10 px-5 py-3.5 text-center md:text-start grid  rounded-lg justify-center'>
            <h2>  {metric}<span>{k && "k"}</span>+  </h2>
            <p>{subtext}</p>
        </div>
    )
}

const Hero = () => {
    return (
        <div className=' grid items-center gap-12 mt-16 md:gap-0 xs:grid-cols-[5fr_4.5fr]'>
            <div className='p-inline order-2'>
                <h1 className='mb-4 sm:mb-5'>Discover Your Dream <br /> Property with Estatein</h1>
                <p className='mb-10 xs:mb-12.5'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                <div className='grid mb-10 xs:mb-12.5 xs:flex-normal gap-4'>
                    <Link href="">
                        <Button className='!w-full xs:w-fit' btntype='black'>
                            Learn More
                        </Button>
                    </Link>
                    <Link href="">
                        <Button className='!w-full xs:w-fit'>
                            Browse Properties
                        </Button>
                    </Link>


                </div>

                <div className='flex flex-wrap grow gap-4'>
                    <HeroCard metric={200} subtext='Happy Customer' />
                    <HeroCard k={true} metric={10} subtext='Properties For Clients' />
                    <HeroCard metric={200} subtext='Years of Experience' />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${heroimg.src})` }} className='bg-filled md:order-2 mx-4 md:mx-0 h-[302px] mt-10 md:mt-0  md:h-[600px]'></div>
        </div>
    )
}

export default Hero




