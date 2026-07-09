import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Residential Construction',
    desc: 'From architectural planning to structural handover, we construct custom modern houses, villas, and independent floors tailored to your lifestyle and Vastu requirements.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Quality & Structural Audits',
    desc: 'Certified QA engineers conduct intensive inspections spanning foundation casting, slab reinforcement, brick alignment, plumbing pressure, and finish aesthetics.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: '3D Architecture & Design',
    desc: 'Create spatial layouts with Vastu compliance, detailed 2D/3D elevations, structural blueprints, and complete interior space mapping before breaking ground.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Commercial Construction',
    desc: 'Turnkey solutions for retail outlets, office workspace blocks, clinics, and light warehouses built with optimized materials and strict timeline adherence.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  }
];

const expertiseAreas = [
  {
    title: 'Escrow Account Safety',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Payments are linked to milestones and secured in an escrow system. Money is only released to builders after verified stage completion reports.'
  },
  {
    title: 'QASCON Quality Inspections',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Our certified QA engineers use standard audit frameworks to inspect materials, curing, alignments, and strength at every major gateway.'
  },
  {
    title: 'Branded Material Sourcing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Get absolute transparency in material grades. We procure steel, cement, fixtures, and wiring directly from top trusted brands at standard pricing.'
  },
  {
    title: 'Interactive 3D Walkthroughs',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Visualize details of structural load paths, plumbing layouts, Vastu compliance, and internal spacing through virtual floor plan rendering.'
  }
];

const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true, margin: "-100px" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Services = () => {
  const [clickedExpertise, setClickedExpertise] = useState<Record<number, boolean>>({});

  const toggleExpertise = (index: number) => {
    setClickedExpertise(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full flex items-center overflow-hidden">
        {/* Premium Background Image with Slow Motion Zoom */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Construction Services"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 z-[5] bg-[#0B3C5D]/60" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <SectionWrapper>
            <div className="max-w-4xl">
              <span className="text-[12px] uppercase tracking-[0.4em] text-[#F4A300] mb-8 block font-medium">
                Our Expertise
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif leading-tight text-[#ffffff]">
                Disciplines of <br /><span className="italic">Execution</span>
              </h1>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Services List Section */}
      <section className="bg-[#ffffff] py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-48">
            {services.map((service, i) => (
              <SectionWrapper key={service.title}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#000000] mb-8">{service.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed font-light mb-12">
                      {service.desc}
                    </p>
                    <div className="w-12 h-[2px] bg-[#F4A300]" />
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="bg-[#f8f9fa] py-32">
        <div className="container mx-auto px-6 md:px-12">
          <SectionWrapper>
            <div className="mb-16">
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#0B3C5D] font-bold block mb-4">
                Areas of Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[#000000]">
                Meeting your construction needs
              </h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, i) => {
              const isExpanded = !!clickedExpertise[i];
              return (
                <SectionWrapper key={i}>
                  <div 
                    onClick={() => toggleExpertise(i)}
                    className="group relative h-[500px] rounded-lg overflow-hidden cursor-pointer shadow-lg bg-gray-900"
                  >
                    {/* Background Image */}
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-90 md:group-hover:opacity-100 ${
                        isExpanded ? 'scale-110 opacity-100' : 'md:group-hover:scale-110'
                      }`} 
                    />
                    
                    {/* Expandable Box */}
                    <div 
                      className={`absolute bottom-0 left-0 right-0 bg-[#0B3C5D] text-white transform transition-transform duration-500 ${
                        isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-80px)] md:group-hover:translate-y-0'
                      }`}
                    >
                      <div className="h-[80px] flex items-center px-6">
                        <h3 className="text-xl font-medium text-[#F4A300]">{area.title}</h3>
                      </div>
                      <div 
                        className={`px-6 pb-6 transition-opacity duration-700 ${
                          isExpanded ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                        }`}
                      >
                        <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                          {area.desc}
                        </p>
                        <button className="text-[11px] uppercase tracking-[0.1em] font-semibold flex items-center text-[#F4A300] transition-colors">
                          Learn more about our {area.title.toLowerCase()}
                          <span className="ml-2 text-lg leading-none">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </SectionWrapper>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

