import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
