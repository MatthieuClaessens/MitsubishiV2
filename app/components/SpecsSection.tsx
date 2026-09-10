"use client";

import { FaOilCan, FaCogs } from "react-icons/fa";
import { Gauge } from "lucide-react";
import { GiGearStickPattern } from "react-icons/gi";
import Image from "next/image";
import { useVehicleRotation } from "@/app/utils/vehicleRotation";

const carImages = [
    "/image/Evoview1.png",
    "/image/Evoview2.png",
    "/image/Evoview3.png",
    "/image/Evoview4.png",
    "/image/Evoview5.png",
    "/image/Evoview6.png",
    "/image/Evoview7.png",
    "/image/Evoview8.png"
];

export default function SpecsSection() {
    const { currentIndex, setCurrentIndex, isDragging, handlers } = useVehicleRotation(carImages.length);

    return (
        <section id="specs" className="py-16 md:py-28 bg-[#050505] relative overflow-hidden px-6 md:px-8 cursor-none">
            <div
                id="jp-bg"
                className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 text-[25rem] font-black text-white/[0.02] select-none pointer-events-none">
                三菱
            </div>
            
            <div className="max-w-7xl mx-auto lg:px-12">
                <h2 className="text-3xl md:text-5xl text-red-600 uppercase tracking-tighter font-display text-center md:text-left animate-scroll-in">
                    Ingénierie Brute
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-10 md:mt-16 items-center">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {/* Carte 1 */}
                        <div className="group h-28 sm:h-40 md:h-52 bg-[#0c0c0c] p-4 md:p-7 flex flex-row sm:flex-col items-center justify-start sm:justify-center text-left sm:text-center gap-5 sm:gap-0 border border-white/5 rounded-lg animate-scroll-in">
                            <div className="h-8 md:h-10 flex items-center justify-center shrink-0">
                                <FaOilCan className="text-red-600 text-3xl md:text-3xl group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="sm:mt-3">
                                <p className="text-white text-base sm:text-sm md:text-xl font-bold font-sans tracking-[0.1em]">2.0L MIVEC</p>
                                <div className="hidden sm:block w-6 h-[1px] bg-red-600/50 my-1 md:my-1.5 mx-auto" />
                                <p className="text-gray-300 text-xs md:text-xs">Turbocharged I4 295CV</p>
                            </div>
                        </div>

                        {/* Carte 2 */}
                        <div className="group h-28 sm:h-40 md:h-52 bg-[#0c0c0c] p-4 md:p-7 flex flex-row sm:flex-col items-center justify-start sm:justify-center text-left sm:text-center gap-5 sm:gap-0 border border-white/5 rounded-lg animate-scroll-in">
                            <div className="h-8 md:h-10 flex items-center justify-center shrink-0">
                                <Gauge className="text-red-600 h-8 w-8 md:h-9 md:w-9 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="sm:mt-3">
                                <p className="text-white text-base sm:text-sm md:text-xl font-bold font-sans tracking-[0.1em]">5.4s</p>
                                <div className="hidden sm:block w-6 h-[1px] bg-red-600/50 my-1 md:my-1.5 mx-auto" />
                                <p className="text-gray-300 text-xs md:text-xs uppercase">0 - 100 km/h</p>
                            </div>
                        </div>

                        {/* Carte 3 */}
                        <div className="group h-28 sm:h-40 md:h-52 bg-[#0c0c0c] p-4 md:p-7 flex flex-row sm:flex-col items-center justify-start sm:justify-center text-left sm:text-center gap-5 sm:gap-0 border border-white/5 rounded-lg animate-scroll-in">
                            <div className="h-8 md:h-10 flex items-center justify-center shrink-0">
                                <FaCogs className="text-red-600 text-3xl group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="sm:mt-1 md:mt-2">
                                <p className="text-white text-base sm:text-sm md:text-lg font-bold font-sans tracking-[0.1em]">S-AWC</p>
                                <p className="text-gray-300 uppercase text-xs sm:text-[10px]">Transmission Intégrale</p>
                                <div className="hidden sm:block w-6 h-[1px] bg-red-600/50 my-1 md:my-1.5 mx-auto" />
                                <p className="text-gray-300 text-[10px] sm:text-[8px] tracking-[0.15em] font-light uppercase">
                                    Super All-Wheel Control
                                </p>
                            </div>
                        </div>

                        {/* Carte 4 */}
                        <div className="group h-28 sm:h-40 md:h-52 bg-[#0c0c0c] p-4 md:p-7 flex flex-row sm:flex-col items-center justify-start sm:justify-center text-left sm:text-center gap-5 sm:gap-0 border border-white/5 rounded-lg animate-scroll-in">
                            <div className="h-8 md:h-10 flex items-center justify-center shrink-0">
                                <GiGearStickPattern className="text-red-600 text-3xl group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="sm:mt-3">
                                <p className="text-white uppercase text-base sm:text-sm md:text-xl font-bold font-sans tracking-[0.1em]">Manuelle</p>
                                <div className="hidden sm:block w-6 h-[1px] bg-red-600/50 my-1 md:my-1.5 mx-auto" />
                                <p className="text-gray-300 text-xs md:text-xs">5 Rapports</p>
                            </div>
                        </div>
                    </div>

                    {/* Bloc Carrousel (Sans animate-scroll-in pour éviter le blocage d'affichage) */}
                    <div
                        className={`relative flex flex-col items-center justify-center select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                        {...handlers}
                    >
                        <div className="absolute w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-red-600/20 md:bg-red-600/30 blur-[80px] md:blur-[200px] rounded-full pointer-events-none" />

                        <div className="relative w-full h-[240px] sm:h-[320px] md:h-[480px] flex items-center justify-center">
                            {carImages.map((src, index) => (
                                <div
                                    key={src}
                                    className={`absolute inset-0 w-full h-full flex items-center justify-center ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}
                                >
                                    <Image
                                        src={src}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        alt={`Mitsubishi Evolution - Vue ${index + 1}`}
                                        className="object-contain w-full h-full rounded-lg pointer-events-none drop-shadow-2xl scale-110 md:scale-100"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6 relative z-25">
                            {carImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-1.5 md:h-2 rounded-full transition-all ${index === currentIndex ? 'w-5 md:w-6 bg-red-600' : 'w-1.5 md:w-2 bg-white/30'}`}
                                    aria-label={`Aller à la vue ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}