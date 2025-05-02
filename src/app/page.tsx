import AboutSection from '@components/section/About';
import ContactSection from '@components/section/Contact';
import ExperienceSection from '@components/section/Experience';
import FaqSection from '@components/section/Faq';
import HeroSection from '@components/section/Hero';
import ProjectSection from '@components/section/Projects';
import SkillsSection from '@components/section/Skills';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
