import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Moments } from "@/components/sections/moments";
import { Recognition } from "@/components/sections/recognition";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="container">
        <Hero />
      </main>
      <TechMarquee />
      <main className="container">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Moments />
        <Recognition />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
