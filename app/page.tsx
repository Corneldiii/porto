import HeroSection from "./component/sections/HeroSection";
import AboutSection from "./component/sections/AboutSection";
import ExperienceSection from "./component/sections/ExperienceSection";
import ProjectsSection from "./component/sections/ProjectsSection";
import ContactSection from "./component/sections/ContactSection";
import ScrollToTop from "./component/ScrollToTop";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <main className="relative flex flex-col min-h-screen w-full max-w-screen">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
}
