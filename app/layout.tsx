import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", weight: ["400", "500", "600", "700"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Maimuna Rahman Mysha — Full Stack Developer",
  description:
    "Portfolio of Maimuna Rahman Mysha, full stack developer and final-year CSE student at Jashore University of Science and Technology.",
  openGraph: {
    title: "Maimuna Rahman Mysha — Full Stack Developer",
    description: "Full stack developer · CSE, JUST · Jashore, Bangladesh",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${space.variable} ${mono.variable}`}>
      <body>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,#000_20%,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff08 1px,transparent 1px),linear-gradient(90deg,#ffffff08 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
