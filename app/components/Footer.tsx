import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-12 overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-red-600 font-black text-2xl tracking-tighter uppercase font-dots">EVO X</span>
                        </div>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                            Hommage numérique à l'une des icônes les plus légendaires du rallye et de l'ingénierie automobile japonaise.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Navigation</h4>
                        <ul className="space-y-3 text-sm font-light text-gray-400">
                            <li><a href="#specs" className="hover:text-red-600 transition-colors">Spécifications</a></li>
                            <li><a href="#legacy" className="hover:text-red-600 transition-colors">L'Héritage Rallye</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Légal</h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                            Projet personnel non officiel. Tous les droits sur la marque Mitsubishi et la Lancer Evolution appartiennent à leurs propriétaires respectifs.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-400 text-sm font-light">
                            Développé par <br />
                            <Link 
                                href="https://matthieuclaessens.vercel.app/" 
                                target="_blank" 
                                className="text-white font-bold hover:text-red-600 transition-colors underline underline-offset-4"
                            >
                                Matthieu CLAESSENS
                            </Link>
                        </p>
                        <div className="flex items-center gap-4 pt-2 text-gray-400">
                            <Link href="https://matthieuclaessens.vercel.app/" target="_blank" className="hover:text-red-600 transition-colors">
                                <FaGlobe className="text-lg" />
                            </Link>
                            <Link href="https://github.com/MatthieuClaessens" target="_blank" className="hover:text-red-600 transition-colors">
                                <FaGithub className="text-lg" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/matthieu-claessens" target="_blank" className="hover:text-red-600 transition-colors">
                                <FaLinkedin className="text-lg" />
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-gray-600 uppercase tracking-[0.2em]">
                    <p>© 2026 - Tous droits réservés.</p>
                </div>

            </div>
        </footer>
    );
}