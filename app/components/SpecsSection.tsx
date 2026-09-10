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
        <section id="specs" className="py-28 bg-[#050505] relative overflow-hidden px-8 cursor-none">
            <div
                id="jp-bg"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[25rem] font-black text-white/[0.02] select-none pointer-events-none">
                三菱
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="font-dots text-5xl text-red-600 uppercase tracking-tighter font-display">
                    Ingénierie Brute
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16 items-center">
                    
                    <div className="grid grid-cols-2 gap-6">

                        <div className="group h-52 bg-[#0c0c0c] p-7 flex flex-col items-center justify-center text-center">
                            <div className="h-10 flex items-center justify-center">
                                <FaOilCan className="text-red-600 text-3xl group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-white text-xl font-bold mt-3 font-sans tracking-[0.1em]">2.0L MIVEC</p>
                            <div className="w-6 h-[1px] bg-red-600/50 my-1.5" />
                            <p className="text-gray-400 text-xs">Turbocharged I4 295CV</p>
                        </div>

                        <div className="group h-52 bg-[#0c0c0c] p-7 flex flex-col items-center justify-center text-center">
                            <div className="h-10 flex items-center justify-center">
                                <Gauge className="text-red-600 h-9 w-9 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-white text-xl font-bold mt-3 font-sans tracking-[0.1em]">5.4 Secondes</p>
                            <div className="w-6 h-[1px] bg-red-600/50 my-1.5" />
                            <p className="text-gray-400 text-xs uppercase">0 - 100 km/h</p>
                        </div>

                        <div className="group h-52 bg-[#0c0c0c] p-7 flex flex-col items-center justify-center text-center">
                            <div className="h-10 flex items-center justify-center">
                                <FaCogs className="text-red-600 text-3xl group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-white text-lg font-bold mt-2 font-sans tracking-[0.1em]">S-AWC</p>
                            <p className="text-gray-400 uppercase text-[10px]">Transmission Intégrale</p>
                            <div className="w-6 h-[1px] bg-red-600/50 my-1.5" />
                            <p className="text-gray-500 text-[8px] tracking-[0.15em] font-light uppercase">
                                Super All-Wheel Control
                            </p>
                        </div>

                        <div className="group h-52 bg-[#0c0c0c] p-7 flex flex-col items-center justify-center text-center">
                            <div className="h-10 flex items-center justify-center">
                                <GiGearStickPattern className="text-red-600 text-3xl group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-white text-xl font-bold mt-3 font-sans tracking-[0.1em]">Boîte manuelle</p>
                            <div className="w-6 h-[1px] bg-red-600/50 my-1.5" />
                            <p className="text-gray-400 text-xs uppercase">5 Rapports</p>
                        </div>

                    </div>

                    <div
                        className={`relative flex flex-col items-center justify-center select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                        {...handlers}
                    >
                        <div className="absolute w-[500px] h-[500px] bg-red-600/30 blur-[200px] rounded-full pointer-events-none" />

                        <div className="relative w-full h-[480px] flex items-center justify-center">
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
                                        className="object-contain rounded-lg pointer-events-none drop-shadow-2xl"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-2 mt-6 relative z-25">
                            {carImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-6 bg-red-600' : 'w-2 bg-white/30'}`}
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