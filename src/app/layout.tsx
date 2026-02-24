import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beatopia | Electronic Music Crew",
  description: "Melodic Techno • Progressive House • Tech House • Afro House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}
