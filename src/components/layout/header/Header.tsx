"use client"

import React, { useEffect, useState } from 'react'
import Logo from '../../ui/Logo'
import { HiMenuAlt3 } from "react-icons/hi";
import useWindowWidth from '@/hooks/useWindowWidth';
import Button from '@/components/ui/Button';
import MobileNav from './MobileNav';
import DestopNav from './DestopNav';
import useHasMounted from '@/hooks/useHasMounted';


export type navProps = {
    name: string;
    url: string
}

export interface DesktopNavProp {
    navlinks: navProps[]

}

const Header = () => {

    const hasMounted = useHasMounted()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const width = useWindowWidth()

    if (!hasMounted) return null

    const widthCheck = width >= 540

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='p-inline xs:relative py-5 flex-between'>
            <div>
                <Logo logoSize={widthCheck ? 40 : 26} textSize={widthCheck ? 20 : 16} />
            </div>

            {
                widthCheck ?
                    <>
                        <DestopNav navlinks={navlinks} />
                        <Button btntype='black'>
                            Contact Us
                        </Button>
                    </>
                    :
                    <>
                        <HiMenuAlt3 onClick={handleMenuToggle} className='w-6 h-6' />
                        {
                            isMenuOpen ? <MobileNav navlinks={navlinks} handleMenuToggle={handleMenuToggle} /> : ""
                        }

                    </>
            }


        </header>
    )
}

export default Header

export const navlinks = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About Us",
        url: "/about",
    },
    {
        name: "Property",
        url: "/property",
    },
    {
        name: "Services",
        url: "/Services",
    },
    {
        name: "Contact Us",
        url: "/contact",
    },
];
