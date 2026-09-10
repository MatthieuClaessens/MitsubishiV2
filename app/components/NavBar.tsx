"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleAlert, Menu } from "lucide-react";
import Mitsubishi from "@/public/image/mitsubishi.webp";

export default function NavBar() {
    const [showError, setShowError] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (showError) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                const removeTimer = setTimeout(() => setShowError(false), 300);
                return () => clearTimeout(removeTimer);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [showError]);

    function configclick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        setShowError(true);
    }

    const anchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

        window.history.replaceState(null, "", window.location.pathname + window.location.search);
    };

    return (
        <>
            <nav className="hidden md:block h-16 w-full bg-black flex items-center px-8 font-sans border-b border-zinc-800 z-30 fixed top-0 left-0">
                <Image
                    src={Mitsubishi}
                    alt="Mitsubishi logo"
                    priority
                    className="w-4.5 mx-3 object-contain"
                />
                <p className="hidden md:block font-bold text-white font-display uppercase pointer-events-none">
                    Lancer <span className="text-red-600">Evo</span>
                </p>
                <div className="flex justify-center mx-auto gap-16 uppercase font-bold text-xs tracking-[3px]">
                    <Link href="#home" onClick={(e) => anchor(e, "home")} className="text-white hover:text-red-600 cursor-none">Accueil</Link>
                    <Link href="#specs" onClick={(e) => anchor(e, "specs")} className="text-white hover:text-red-600 cursor-none">Spécifications</Link>
                    <Link href="#legacy" onClick={(e) => anchor(e, "legacy")} className="text-white hover:text-red-600 cursor-none">L'Héritage Rallye</Link>
                </div>
                <Link
                    href="#"
                    onClick={configclick}
                    className="text-white bg-red-600 px-5 py-2 uppercase font-sans font-bold text-xs tracking-[3px] hover:bg-red-700 transition-colors cursor-none"
                >
                    Configurer
                </Link>
            </nav >

            {showError && (
                <div
                    className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4 transition-all duration-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                        }`}
                >
                    <div className="flex items-center gap-3 p-4 text-white bg-zinc-900 border border-red-600/50 rounded-lg shadow-2xl">
                        <span className="font-bold text-red-600 flex items-center"><CircleAlert className="w-5 h-5" /></span>
                        <p className="text-sm text-zinc-300">Configuration indisponible. Veuillez réessayer plus tard.</p>
                    </div>
                </div>
            )
            }

            <nav className="md:hidden h-12 w-full bg-black flex items-center px-8 font-sans border-b border-red-600 z-30 fixed top-0 left-0">
                <Menu className="text-gray-200" />
                <Image
                    src={Mitsubishi}
                    alt="Mitsubishi logo"
                    priority
                    className="w-6 mx-3 object-contain mx-auto" />
            </nav>
        </>
    );
}