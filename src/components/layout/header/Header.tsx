"use client";

import React, {  useRef, useState } from "react";
import Logo from "../../ui/Logo";
import { HiMenuAlt3 } from "react-icons/hi";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "@/components/ui/Button";
import MobileNav from "./MobileNav";
import DestopNav from "./DestopNav";
import useHasMounted from "@/hooks/useHasMounted";
import Banner from "../Banner";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const navlinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Property", url: "/property" },
    { name: "Services", url: "/Services" },
    { name: "Contact Us", url: "/contact" },
];

const Header = () => {
    const hasMounted = useHasMounted();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const bannerRef = useRef<HTMLDivElement | null>(null);
    const width = useWindowWidth();

    const widthCheck = width >= 768;

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

 
    

    return (
        <>
            {showBanner && (
                <div ref={bannerRef}>
                    <Banner onClose={() => setShowBanner(false)} />
                </div>
            )}

            <header
                className="nav-bar top-0 left-0 w-screen z-50"
                
            >
                {hasMounted && (
                    <div className="p-inline bg-gray-10 xs:relative py-4 flex-between">
                        <div>
                            <Logo
                                logoSize={widthCheck ? 40 : 26}
                                textSize={widthCheck ? 20 : 16}
                            />
                        </div>

                        {widthCheck ? (
                            <>
                                <DestopNav navlinks={navlinks} />
                                <Button btntype="black">Contact Us</Button>
                            </>
                        ) : (
                            <>
                                <HiMenuAlt3
                                    onClick={handleMenuToggle}
                                    className="w-6 h-6 cursor-pointer"
                                />
                                {isMenuOpen && (
                                    <MobileNav
                                        navlinks={navlinks}
                                        isOpen={isMenuOpen}
                                        handleMenuToggle={() => setIsMenuOpen(false)}
                                    />
                                )}
                            </>
                        )}
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
