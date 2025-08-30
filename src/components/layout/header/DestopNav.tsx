import Link from "next/link";
import { useState } from "react";

export type NavProps = {
    name: string;
    url: string;
};

export interface DesktopNavProp {
    navlinks: NavProps[];
}

const DesktopNav = ({ navlinks }: DesktopNavProp) => {
    // Slice the first 4 links directly
    const nav = navlinks.slice(0, 4);

    return (
        <nav className="absolute-center">
            <ul className="flex-center gap-8">
                {nav.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DesktopNav;
