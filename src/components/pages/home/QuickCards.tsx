import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dreamhome from "@/assets/dreamhomeicon.svg"
import propertyvalue from "@/assets/propertyvalueicon.svg"
import property from "@/assets/propertyicon.svg"
import smartinvest from "@/assets/Smartinvestmenticon.svg"
import { GoArrowUpRight } from "react-icons/go";

type CardProp = {
    imgurl: string,
    linkUrl: string,
    description: string,

}
const Card = ({ imgurl, description, linkUrl }: CardProp) => {
    return (
        <Link className='flex-center relative gap-3 bg-gray-10 rounded-xl px-4 py-7 flex-col text-center ' href={linkUrl}>
            <GoArrowUpRight className='absolute square-7 text-white/50 z-25 top-4 right-4' />
            <Image src={imgurl} alt={""} width={60} height={60} />
            <p className='text-white'>{description}</p>
        </Link>
    )
}

const QuickCards = () => {
    return (
        <div className='grid gap-2.5 p-inline grid-cols-2 mt-10 md:mt-4  xs:grid-cols-3 lg:grid-cols-4'>
            <Card description='Find Your Dream Home' linkUrl='/' imgurl={dreamhome} />
            <Card description='Unlock Property Value' linkUrl='/' imgurl={propertyvalue} />
            <Card description='Efforless Property Management' linkUrl='/' imgurl={property} />
            <Card description='Smart Investment, Informed Decisons' linkUrl='/' imgurl={smartinvest} />
        </div>
    )
}

export default QuickCards