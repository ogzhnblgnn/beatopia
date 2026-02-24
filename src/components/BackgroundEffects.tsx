"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
    return (
        <div className="fixed inset-0 z-[-40] overflow-hidden pointer-events-none w-full h-full bg-black/20">
            {/* Animated Gradient Blob 1 - Deep Teal / Cyan */}
            <motion.div
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, -80, 40, 0],
                    scale: [1, 1.15, 0.95, 1],
                }}
                transition={{
                    duration: 100,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/4 left-1/12 w-[700px] h-[600px] bg-[#00f5ff]/18 rounded-full blur-[100px] mix-blend-screen"
            />

            {/* Animated Gradient Blob 2 - Dark Violet / Magenta */}
            <motion.div
                animate={{
                    x: [0, -100, 80, 0],
                    y: [0, 60, -90, 0],
                    scale: [1, 1.25, 0.85, 1],
                }}
                transition={{
                    duration: 100,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-1/4 right-1/10 w-[800px] h-[800px] bg-[#9d4edd]/18 rounded-full blur-[100px] mix-blend-screen"
            />

            {/* Static Noise Overlay for Texture */}
            <div
                className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
