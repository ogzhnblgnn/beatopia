"use client";

import { useRef, useState, useEffect } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { Headphones, Music, Instagram } from "lucide-react";
import { i } from "framer-motion/client";

const ARTISTS = [
    {
        name: "WAVEJACKERS",
        genres: "Producer,DJ",
        image: "/beatopia/images/kamil.jpg",
        color: "var(--color-neon-blue)",
    },
    {
        name: "LIDIA PETREA",
        genres: "Producer,DJ",
        image: "/beatopia/images/lidia.jpg",
        color: "var(--color-neon-pink)",
    },
    {
        name: "OZHN",
        genres: "Producer,DJ",
        image: "/beatopia/images/oguz.PNG",
        color: "var(--color-neon-red)",
    },
    {
        name: "DANT3",
        genres: "Producer,DJ",
        image: "/beatopia/images/demir.jpg",
        color: "var(--color-neon-amber)",
    }
];

const CREW = [
    {
        name: "Hilal Yılmaz",
        genres: "Event Manager",
        image: "/beatopia/images/hilal.jpg",
        color: "var(--color-neon-purple)",
    },
    {
        name: "Murat ABİM",
        genres: "Event Manager",
        image: "/beatopia/images/murat.png",
        color: "var(--color-neon-dark-light-gray)",
    },
    {
        name: "Mirsad Reyizim",
        genres: "Photographer",
        image: "/beatopia/images/mirsad.jpg",
        color: "var(--color-neon-dark-yellow)",
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function ArtistCard({ artist, isArtist = true }: { artist: any; isArtist?: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        // Initial check
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const active = isMobile ? isInView : false;

    return (
        <motion.div
            ref={ref}
            data-active={active}
            animate={{
                y: active ? -10 : 0,
                boxShadow: active ? `0 20px 40px -20px ${artist.color}` : "0 0px 0px 0px rgba(0,0,0,0)",
                borderColor: active ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.05)"
            }}
            whileHover={{
                y: -10,
                boxShadow: `0 20px 40px -20px ${artist.color}`,
                borderColor: "rgba(255,255,255,0.2)"
            }}
            transition={{ duration: 0.5 }}
            className="group relative bg-gradient-to-b from-white/[0.05] to-black/60 backdrop-blur-xl border border-white/[0.05] overflow-hidden transition-all duration-500 rounded-2xl flex flex-col h-full"
        >
            {/* Image Container */}
            <div
                className="relative h-80 w-full overflow-hidden shrink-0 pointer-events-none"
                style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                }}
            >
                <img
                    src={artist.image}
                    alt={artist.name}
                    className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-data-[active=true]:opacity-100 group-hover:scale-110 group-data-[active=true]:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-data-[active=true]:grayscale-0 pointer-events-auto"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 p-6 -mt-20 flex flex-col flex-1">
                <h3 className="text-2xl lg:text-3xl font-sans font-light text-white mb-2 tracking-[0.15em] w-[110%] pr-4 pb-2 group-hover:text-transparent group-data-[active=true]:text-transparent group-hover:bg-clip-text group-data-[active=true]:bg-clip-text group-hover:bg-gradient-to-r group-data-[active=true]:bg-gradient-to-r group-hover:from-white group-data-[active=true]:from-white group-hover:to-white/60 group-data-[active=true]:to-white/60 transition-all duration-500 leading-tight"
                    style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>
                    {artist.name}
                </h3>

                {/* Spacer pushing bottom content down */}
                <div className="flex-1 min-h-[10px]"></div>

                <div className="mb-6">
                    <p className="text-xs font-sans text-white/50 tracking-[0.3em] uppercase">
                        {artist.genres}
                    </p>
                </div>

                {/* Socials */}
                <div className="flex gap-4 items-center">
                    {isArtist && (
                        <>
                            <a href="#" aria-label="Spotify" className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-white transition-colors text-foreground/50 border border-white/5">
                                <Music size={18} />
                            </a>
                            <a href="#" aria-label="SoundCloud" className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-white transition-colors text-foreground/50 border border-white/5">
                                <Headphones size={18} />
                            </a>
                        </>
                    )}
                    <a href="#" aria-label="Instagram" className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-white transition-colors text-foreground/50 border border-white/5">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>

            {/* Hover Top Glow Line */}
            <div
                className="absolute top-0 left-0 h-1 w-0 group-hover:w-full group-data-[active=true]:w-full transition-all duration-500 ease-out z-30"
                style={{ backgroundColor: artist.color }}
            />
        </motion.div>
    );
}

export default function Artists() {
    return (
        <section id="artists" className="relative py-32 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-4 text-white">THE ARTISTS</h2>
                    <p className="text-foreground/60 font-sans tracking-widest uppercase text-sm">Producers & Selectors</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-8"
                >
                    {ARTISTS.map((artist, index) => (
                        <motion.div
                            key={`artist-${index}`}
                            variants={cardVariants}
                            className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-[280px] max-w-[320px]"
                        >
                            <ArtistCard artist={artist} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Management & Crew Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 mt-32"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-4 text-white">MANAGEMENT & CREW</h2>
                    <p className="text-foreground/60 font-sans tracking-widest uppercase text-sm">Behind the Scenes, Eyes & Ears</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-8"
                >
                    {CREW.map((member, index) => (
                        <motion.div
                            key={`crew-${index}`}
                            variants={cardVariants}
                            className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-[280px] max-w-[320px]"
                        >
                            <ArtistCard artist={member} isArtist={false} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
