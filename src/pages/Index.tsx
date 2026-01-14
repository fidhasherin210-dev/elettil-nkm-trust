import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroCarousel />
      <AboutSection />
      <MissionSection />
      <ImpactSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
