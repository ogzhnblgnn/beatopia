"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const scrollToBooking = () => {
        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
            {/* Background layer */}
            <div className="absolute inset-0 bg-transparent z-0" />

            {/* Decorative Neon Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[150px] opacity-30 z-0 pointer-events-none" />
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[120px] opacity-20 z-0 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-amber/20 rounded-full blur-[120px] opacity-20 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6 w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-9xl font-black font-heading tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/20 pr-4"
                >
                    BEATOPIA
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-sm md:text-xl text-foreground/40 font-sans tracking-[0.2em] mt-[-35px] mb-12 uppercase"
                >
                    Dancing With Frequencies
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-sm md:text-xl text-foreground/70 font-sans tracking-[0.2em] mb-2 uppercase"
                >

                    Melodic Techno &bull; Indie Dance &bull; Progressive House &bull; Afro House

                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-sm md:text-xl text-foreground/70 font-sans tracking-[0.2em] mb-12 uppercase"
                >

                    Organic House &bull; Trance &bull; Tech House &bull; Techno

                </motion.p>

                <motion.button
                    onClick={scrollToBooking}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(157, 78, 221, 0.5)",
                        borderColor: "rgba(157, 78, 221, 0.8)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="group relative px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium tracking-[0.15em] uppercase rounded-none overflow-hidden transition-colors"
                >
                    <span className="relative z-10 group-hover:text-neon-blue transition-colors duration-300">Book The Crew</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
                />
            </motion.div>
        </section>
    );
}
