import Hero from "@/components/Hero";
import About from "@/components/About";
import Artists from "@/components/Artists";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground overflow-hidden selection:bg-neon-purple/30 selection:text-neon-blue">
      <Hero />
      <About />
      <Artists />
      <Booking />

      {/* Footer minimal */}
      <footer className="py-8 bg-black/40 backdrop-blur-md text-center border-t border-white/5">
        <p className="text-foreground/40 font-sans text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} BEATOPIA. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
