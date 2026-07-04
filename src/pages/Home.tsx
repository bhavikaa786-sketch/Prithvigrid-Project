import Hero from '../components/Hero';
import ProjectPreview from '../components/ProjectPreview';
import Philosophy from '../components/Philosophy';
import ServicesPreview from '../components/ServicesPreview';
import CTABanner from '../components/CTABanner';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <div className="bg-brand-black">
      <Hero />
      <SectionWrapper><ProjectPreview /></SectionWrapper>
      <SectionWrapper><ServicesPreview /></SectionWrapper>
      <SectionWrapper><Philosophy /></SectionWrapper>
      <SectionWrapper><CTABanner /></SectionWrapper>
    </div>
  );
};

export default Home;
