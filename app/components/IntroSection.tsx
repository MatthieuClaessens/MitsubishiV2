export default function IntroSection() {
    return (
        <section className="w-full bg-[#050505] py-32 px-6 font-sans relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-white font-black italic uppercase text-3xl md:text-5xl leading-tight tracking-tight animate-scroll-in">
                    Aujourd'hui encore, les <span className="text-red-600">Mitsubishi Lancer Evolution</span>
                </h2>
                
                <div className="w-20 h-1 bg-red-600 mx-auto animate-scroll-in" aria-hidden="true"></div>
                
                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto animate-scroll-in">
                    Retirées de la gamme Mitsubishi en{" "}
                    <span className="text-white font-bold border-b border-red-600">2015</span> – continuent de captiver l'attention des passionnés d'automobile du monde entier.
                </p>
            </div>
        </section>
    );
}