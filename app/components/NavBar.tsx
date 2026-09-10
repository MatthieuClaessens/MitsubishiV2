"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Mitsubishi from "@/public/image/mitsubishi.webp";

interface NavBarProps {
    onConfigureClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavBar({ onConfigureClick }: NavBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const anchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
    };

    function unfold() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav className="hidden md:flex h-16 w-full bg-black items-center px-8 font-sans border-b border-zinc-800 z-30 fixed top-0 left-0">
                <Image
                    src={Mitsubishi}
                    alt="Mitsubishi logo"
                    priority
                    className="w-4.5 mx-3 object-contain"
                />
                <p className="font-bold text-white font-display uppercase pointer-events-none">
                    Lancer <span className="text-red-600">Evo</span>
                </p>
                <div className="flex justify-center mx-auto gap-8 lg:gap-16 uppercase font-bold text-xs tracking-[3px] items-center text-center">
                    <Link href="#home" onClick={(e) => anchor(e, "home")} className="text-white hover:text-red-600 cursor-none">Accueil</Link>
                    <Link href="#specs" onClick={(e) => anchor(e, "specs")} className="text-white hover:text-red-600 cursor-none">Spécifications</Link>
                    <Link href="#legacy" onClick={(e) => anchor(e, "legacy")} className="text-white hover:text-red-600 cursor-none">L'Héritage Rallye</Link>
                </div>
                <Link
                    href="#"
                    onClick={onConfigureClick}
                    className="text-white bg-red-600 px-5 py-2 uppercase font-sans font-bold text-xs tracking-[3px] hover:bg-red-700 transition-colors cursor-none"
                >
                    Configurer
                </Link>
            </nav>

            <nav className="md:hidden h-12 w-full bg-black flex justify-between items-center px-6 font-sans border-b border-red-600 z-50 fixed top-0 left-0">
                <button onClick={unfold} aria-label="Ouvrir le menu">
                    <Menu className="text-gray-200 cursor-pointer w-6 h-6" />
                </button>

                <div className="flex items-center gap-2">
                    <Image
                        src={Mitsubishi}
                        alt="Mitsubishi logo"
                        priority
                        className="w-5 object-contain"
                    />
                    <p className="hidden md:block font-bold text-white text-xs uppercase font-display">
                        Evo <span className="text-red-600">X</span>
                    </p>
                </div>

                <div className="w-6" />
            </nav>

            <div
                className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            <div
                className={`fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-black border-r border-zinc-800 z-50 flex flex-col justify-between py-6 px-6 transition-transform duration-300 ease-in-out md:hidden ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div>
                    <div className="flex justify-start mb-8">
                        <button
                            onClick={unfold}
                            className="text-white p-1 hover:text-red-600 transition-colors"
                            aria-label="Fermer le menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col items-start gap-6 uppercase font-bold tracking-[2px] text-sm text-white">
                        <Link href="#home" onClick={(e) => anchor(e, "home")} className="hover:text-red-600 transition-colors w-full py-2 border-b border-zinc-900">Accueil</Link>
                        <Link href="#specs" onClick={(e) => anchor(e, "specs")} className="hover:text-red-600 transition-colors w-full py-2 border-b border-zinc-900">Spécifications</Link>
                        <Link href="#legacy" onClick={(e) => anchor(e, "legacy")} className="hover:text-red-600 transition-colors w-full py-2 border-b border-zinc-900">L'Héritage Rallye</Link>
                    </div>
                </div>

                <div></div>
            </div>
        </>
    );
}