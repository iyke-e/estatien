import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '@/assets/logo.svg';

interface LogoProp {
    logoSize?: number;
    textSize?: number;
}

const Logo = ({ logoSize = 28, textSize = 16 }: LogoProp) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // wait until client mount

    return (
        <div className="w-fit gap-2 flex items-center">
            <Image
                src={logo}
                width={logoSize}
                height={logoSize}
                alt="logo icon"
                style={{ width: logoSize, height: logoSize }}
            />
            <p style={{ fontSize: textSize, fontWeight: 600 }}>Estatein</p>
        </div>
    );
};

export default Logo;
