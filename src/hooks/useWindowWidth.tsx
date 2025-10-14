"use client"
import { useEffect, useState } from 'react'

const useWindowWidth = () => {
    const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return screenWidth
}

export default useWindowWidth