export default function LegacySection() {
    const heritageItems = [
        {
            year: "1973",
            title: "Les Débuts",
            description: "La Lancer fait ses débuts sur la scène internationale, conçue pour une aérodynamique supérieure et un châssis monocoque robuste."
        },
        {
            year: "1992",
            title: "Naissance d'une Légende",
            description: "Apparition de la toute première Lancer Evolution (Evo I), greffant le redoutable moteur 4G63 et la transmission intégrale."
        },
        {
            year: "2007",
            title: "Evolution X",
            description: "L'apogée technologique avec le moteur 4B11T et le système S-AWC, redéfinissant les standards de la traction."
        },
        {
            year: "2015",
            title: "L'Apothéose",
            description: "Fin de production de la lignée Evolution, gravant à jamais son statut de légende intemporelle du sport auto."
        }
    ];

    return (
        <section id="legacy" className="py-12 md:py-32 bg-[#080808]">
            <div className="max-w-7xl pt-20 mx-auto px-6 lg:px-12">
                <h2 className="font-dots text-3xl md:text-5xl text-white font-display uppercase tracking-tighter mb-16 animate-scroll-in">
                    L'héritage rallye
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {heritageItems.map((item, index) => (
                        <article 
                            key={index}
                            className="relative bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.05)] p-6 md:p-8 flex flex-col justify-between group hover:border-red-600/60 transition-all duration-300 h-full animate-scroll-in"
                        >
                            <div className="relative z-10">
                                <p className="text-red-600 font-black text-5xl md:text-6xl italic" aria-label={`Année ${item.year}`}>
                                    {item.year}
                                </p>
                                <h3 className="text-xl md:text-2xl font-black mt-3 uppercase text-white tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 mt-3 leading-relaxed text-sm font-light">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}