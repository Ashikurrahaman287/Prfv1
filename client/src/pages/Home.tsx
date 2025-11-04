import BlockchainBackground from '@/components/BlockchainBackground';
import TechParticles from '@/components/TechParticles';
import DataStream from '@/components/DataStream';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import VenturesSection from '@/components/VenturesSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustedBySection from '@/components/TrustedBySection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BlockchainBackground />
      <TechParticles />
      <DataStream />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <VenturesSection />
        <ExperienceTimeline />
        <TestimonialsSection />
        <TrustedBySection />
        <AwardsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
