"use client";

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);

        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursor);

        return () => {
            window.removeEventListener('resize', checkDevice);
            window.removeEventListener('mousemove', updateCursor);
        };
    }, []);

    if (isMobile) return null;

    return (
        <>
            <div
                className="fixed top-0 left-0 w-8 h-8 border border-red-600 rounded-full z-[999] mix-blend-difference pointer-events-none transition-transform duration-75 ease-out"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                }}
            />
            <div
                className="fixed top-0 left-0 w-1 h-1 bg-red-600 rounded-full z-[999] pointer-events-none"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                }}
            />
        </>
    );
}