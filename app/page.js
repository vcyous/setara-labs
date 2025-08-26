import CollaborationSection from "@/components/CollaborationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PainPointsSection from "@/components/PainPointsSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CollaborationSection />
        <ServicesSection />
        <PainPointsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
