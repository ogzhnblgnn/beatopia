"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative py-32 px-6 flex flex-col items-center justify-center bg-transparent overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute left-[-20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-amber/5 rounded-full blur-[150px] z-0 pointer-events-none" />

            <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-heading tracking-widest uppercase mb-12 text-white/90"
                >
                    Our Vision
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <p className="text-xl md:text-3xl font-sans font-light leading-relaxed text-foreground/80">
                        We believe in the unifying power of electronic music. <br className="hidden md:block" />
                        <span className="font-medium text-white">Beatopia</span> is more than an event crew—it's a sanctuary for sound.
                    </p>

                    <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-foreground/60 max-w-2xl mx-auto">
                        From the deep, emotional synths of Melodic Techno to the infectious, rhythmic grooves of Afro House, we curate experiences that dissolve boundaries and connect souls on the dancefloor.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                    className="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mt-16 origin-center"
                />
            </div>
        </section>
    );
}
