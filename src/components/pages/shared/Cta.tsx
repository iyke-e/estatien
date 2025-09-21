"use client"
import Button from '@/components/ui/Button'
import React from 'react'


const Cta = () => {

    return (
        <div className={`p-inline xs:flex-between items-start gap-20 border-y bg-filled sm:bg-bottom  bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/mobilecta.svg)] sm:bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/desktopcta.svg)]  border-gray-10 py-12 mt-10`}>

            <div>
                <h2 className='max-w-80 xs:max-w-none mb-3'>Start Your Real Estate Journey Today</h2>
                <p className='mb-8 sm:mb-0 max-w-[1000px]'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
            </div>
            <div>
                <Button className='w-full text-nowrap'>
                    Explore Properties
                </Button>
            </div>
        </div>
    )
}

export default Cta