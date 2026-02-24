"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronDown } from "lucide-react";

export default function Booking() {
    const [selectedArtist, setSelectedArtist] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    const artistOptions = [
        { value: "full_crew", label: "Full Crew (Showcase)", color: "var(--color-neon-foreground)" },
        { value: "alex_k", label: "WAVEJACKERS", color: "var(--color-neon-blue)" },
        { value: "dj_luna", label: "LIDIA PETREA", color: "var(--color-neon-purple)" },
        { value: "marco_v", label: "OGUZHAN BILGIN", color: "var(--color-neon-red)" },
        { value: "sync", label: "DANT3", color: "var(--color-neon-amber)" }
    ];

    // Helper to get selected artist color
    const selectedColor = selectedArtist
        ? artistOptions.find(opt => opt.value === selectedArtist)?.color || "var(--color-neon-purple)"
        : "var(--color-neon-purple)";

    return (
        <section id="booking" className="relative py-32 px-6 bg-transparent">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 xl:bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-widest uppercase mb-4 text-white">
                        BOOK THE CREW
                    </h2>
                    <p className="text-foreground/60 font-sans tracking-wide">
                        Ready to elevate your event? Get in touch with us.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Name */}
                    <div className="relative group">
                        <input
                            type="text"
                            id="name"
                            required
                            className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-neon-purple transition-colors font-sans"
                            placeholder="Name / Company"
                        />
                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-purple font-sans tracking-widest uppercase">
                            Name / Company
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative group">
                        <input
                            type="email"
                            id="email"
                            required
                            className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-neon-purple transition-colors font-sans"
                            placeholder="Email Address"
                        />
                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-purple font-sans tracking-widest uppercase">
                            Email Address
                        </label>
                    </div>

                    {/* Date */}
                    <div className="relative group">
                        <input
                            type="date"
                            id="date"
                            required
                            className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:ring-0 focus:border-neon-purple transition-colors font-sans [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:transition-opacity"
                        />
                        <label htmlFor="date" className="absolute left-0 -top-5 text-xs text-foreground/50 font-sans tracking-widest uppercase">
                            Event Date
                        </label>
                    </div>

                    {/* Venue / City */}
                    <div className="relative group">
                        <input
                            type="text"
                            id="venue"
                            required
                            className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-neon-purple transition-colors font-sans"
                            placeholder="Venue / City"
                        />
                        <label htmlFor="venue" className="absolute left-0 -top-3.5 text-xs text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-purple font-sans tracking-widest uppercase">
                            Venue / City
                        </label>
                    </div>

                    {/* Custom Artist Selection */}
                    <div className="relative group md:col-span-2" ref={dropdownRef}>
                        <div
                            className="relative w-full border-b border-white/20 py-3 cursor-pointer transition-colors font-sans group-[.focus-within]:border-neon-purple"
                            style={{
                                borderColor: selectedArtist || isDropdownOpen ? selectedColor : undefined
                            }}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span
                                className={`block truncate transition-colors duration-300 ${selectedArtist ? "" : "text-transparent"}`}
                                style={{ color: selectedArtist ? selectedColor : undefined }}
                            >
                                {selectedArtist ? artistOptions.find(opt => opt.value === selectedArtist)?.label : "Select an option"}
                            </span>

                            {/* Animated Label */}
                            <label
                                className={`absolute left-0 transition-all font-sans tracking-widest uppercase pointer-events-none ${selectedArtist || isDropdownOpen ? "-top-5 text-xs" : "-top-5 text-xs text-foreground/50"}`}
                                style={{ color: selectedArtist || isDropdownOpen ? selectedColor : undefined }}
                            >
                                Artist Selection
                            </label>

                            {/* Dropdown Icon */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                <ChevronDown size={16} className={`text-white/50 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </div>
                        </div>

                        {/* Custom Dropdown Menu */}
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute z-50 w-full mt-2 bg-[#050505]/95 backdrop-blur-xl border border-white/10 rounded-sm overflow-hidden py-2 shadow-2xl"
                                >
                                    {artistOptions.map((option) => (
                                        <motion.div
                                            key={option.value}
                                            onClick={() => {
                                                setSelectedArtist(option.value);
                                                setIsDropdownOpen(false);
                                            }}
                                            whileHover={{
                                                backgroundColor: `color-mix(in srgb, ${option.color} 10%, transparent)`,
                                                color: option.color,
                                                paddingLeft: "1.5rem"
                                            }}
                                            transition={{ duration: 0.2 }}
                                            className="px-4 py-3 text-white/50 cursor-pointer font-sans transition-colors tracking-widest text-sm uppercase"
                                        >
                                            {option.label}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Message */}
                    <div className="relative group md:col-span-2 mt-4">
                        <textarea
                            id="message"
                            rows={4}
                            required
                            className="peer w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-neon-purple transition-colors font-sans resize-none"
                            placeholder="Tell us about the event..."
                        ></textarea>
                        <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-purple font-sans tracking-widest uppercase">
                            Message Details
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-8 flex justify-center">
                        <motion.button
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 0 20px rgba(157, 78, 221, 0.4)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full md:w-auto px-12 py-4 bg-white text-black font-semibold tracking-[0.2em] uppercase overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Send Request
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
