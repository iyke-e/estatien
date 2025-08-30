import Logo from '@/components/ui/Logo'
import Link from 'next/link'
import React from 'react'
import { IoClose } from "react-icons/io5";

export type navProps = {
    name: string;
    url: string
}

export interface MobileNavProp {
    navlinks: navProps[],
    handleMenuToggle: () => void

}

const MobileNav = ({ handleMenuToggle, navlinks }: MobileNavProp) => {
    return (
        <nav className='absolute bg-black/70 backdrop-blur-sm w-svw h-svh top-0 left-0'>

            <IoClose onClick={handleMenuToggle} className='absolute z-25 right-4 top-4 square-28' />

            <ul className='w-7/10 bg-white/20 h-full pt-14 pb-8  not-first-of-type'>

                <li className='mb-14  px-4'>
                    <Logo />
                </li>
                {navlinks.map((item, index) => (
                    <li className=' px-4 py-4 text-xl' key={index}>
                        <Link href={item.url}>
                            {item.name}
                        </Link>
                    </li>
                ))}

            </ul>

        </nav>
    )
}

export default MobileNav


