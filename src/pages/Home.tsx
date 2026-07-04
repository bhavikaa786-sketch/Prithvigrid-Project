import Hero from '../components/Hero';
import ProjectPreview from '../components/ProjectPreview';
import Philosophy from '../components/Philosophy';
import ServicesPreview from '../components/ServicesPreview';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <div className="bg-brand-black">
      <Hero />
      <ProjectPreview />
      <ServicesPreview />
      <Philosophy />
      <CTABanner />
    </div>
  );
};

export default Home;
