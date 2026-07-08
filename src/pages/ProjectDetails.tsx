import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

/* ─── Shared animation variants ─── */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

const viewportOpts = { once: true, margin: '-80px' };

/* ─── Project data ─── */
const projectsData = [
  {
    id: 1,
    title: 'Noida Sector 62 Glasshouse',
    titleItalic: 'Glasshouse',
    category: 'Architecture',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Noida, Uttar Pradesh',
    year: '2023',
    materials: 'Reinforced Concrete, Low-E Glass, Structural Steel',
    overviewTitle: 'A landmark architectural study in structural glass integration and modern Vastu layout design.',
    overviewP1: 'Situated in the premium residential hub of Sector 62, Noida, this project was designed to balance high natural illumination with effective heat mitigation. The site conditions required customized cooling systems and durable materials resistant to northern plains weathering.',
    overviewP2: 'We utilized structural steel framing alongside high-performance double-glazed glass units. The internal spaces incorporate Vastu-compliant layouts with a continuous visual flow to the landscape gardens outside.',
    nextId: 2,
    nextTitle: 'Bangalore Whitefield Heritage',
    nextTitleItalic: 'Heritage',
  },
  {
    id: 2,
    title: 'Bangalore Whitefield Heritage',
    titleItalic: 'Heritage',
    category: 'Residential',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Bangalore, Karnataka',
    year: '2022',
    materials: 'Granite Plinths, Teak Wood, Engineered Earth Blockwork',
    overviewTitle: 'A sprawling multi-level villa designed to merge classical Karnataka elements with modern engineering.',
    overviewP1: 'Located in Bangalore\'s IT hub of Whitefield, this duplex estate was commissioned by a family wanting open-sky courtyards and deep shaded verandas. The design incorporates natural ventilation paths to optimize cooling.',
    overviewP2: 'Raw stone textures meet rich teakwood details. The entire structure was validated through 310+ QA parameters—guaranteeing waterproofing, plastering consistency, and long-term durability.',
    nextId: 3,
    nextTitle: 'Gurgaon Phase 5 Duplex',
    nextTitleItalic: 'Duplex',
  },
  {
    id: 3,
    title: 'Gurgaon Phase 5 Duplex',
    titleItalic: 'Duplex',
    category: 'Renovations',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Gurgaon, Haryana',
    year: '2022',
    materials: 'Imported Marble, Brass Channels, Acoustic Paneling',
    overviewTitle: 'A total interior restructuring and layout optimization of an independent duplex house.',
    overviewP1: 'The client needed to modernize an older brick construction structure in DLF Phase 5. Our team executed complete structural reinforcement of columns and beams before beginning aesthetic finishes.',
    overviewP2: 'Milestone escrow releases gave the client peace of mind while tracking progress on the digital dashboard. The renovation added Vastu-compliant entryways and premium marble finishes.',
    nextId: 4,
    nextTitle: 'Gachibowli Tech Hub',
    nextTitleItalic: 'Tech Hub',
  },
  {
    id: 4,
    title: 'Gachibowli Tech Hub',
    titleItalic: 'Tech Hub',
    category: 'Commercial',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Hyderabad, Telangana',
    year: '2021',
    materials: 'High-Grade Structural Steel, Glass Curtain Walls, Epoxy Flooring',
    overviewTitle: 'A multi-story commercial workspace built with rapid execution and strict QA parameters.',
    overviewP1: 'Located in Hyderabad\'s high-tech Gachibowli area, this office building serves as a modern headquarters. Engineered to accommodate dynamic workspace layouts and server utilities with zero columns.',
    overviewP2: 'The project was completed under budget with zero cost overruns. Certified checks covered critical electrical duct mapping, safety compliance, and robust structural foundations.',
    nextId: 5,
    nextTitle: 'Pune Baner Retreat',
    nextTitleItalic: 'Retreat',
  },
  {
    id: 5,
    title: 'Pune Baner Retreat',
    titleItalic: 'Retreat',
    category: 'Architecture',
    heroImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Pune, Maharashtra',
    year: '2023',
    materials: 'Exposed Concrete, Bamboo Screens, Terracotta Jali',
    overviewTitle: 'A meditative residence designed to combine cooling jali work with exposed concrete.',
    overviewP1: 'Built in the windy hills of Baner, Pune, this combined residence-clinic prioritizes natural cooling. Vastu principles dictate the layout, placing the consultation clinic at the east gate and residence upstairs.',
    overviewP2: 'Terracotta jali blocks allow constant air flow while keeping dust out. The client tracked daily progress photos on the dashboard throughout the multi-stage execution.',
    nextId: 6,
    nextTitle: 'Mumbai Bandra Penthouse',
    nextTitleItalic: 'Penthouse',
  },
  {
    id: 6,
    title: 'Mumbai Bandra Penthouse',
    titleItalic: 'Penthouse',
    category: 'Renovations',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Mumbai, Maharashtra',
    year: '2024',
    materials: 'Teak Decking, Polished Veneer, Premium Acoustic Walls',
    overviewTitle: 'A high-end renovation of a sea-facing penthouse in Bandra, prioritizing light and acoustics.',
    overviewP1: 'The project required adapting a classic brick wall layout into an open-plan loft style facing the Arabian Sea. Strict load-bearing calculations were made to safeguard column integrity.',
    overviewP2: 'Materials like premium teak decking and acoustically insulated partitions were sourced directly from certified brands. Payments were released via the milestone escrow system.',
    nextId: 1,
    nextTitle: 'Noida Sector 62 Glasshouse',
    nextTitleItalic: 'Glasshouse',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id || '1', 10);
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];

  const [isBoxClicked, setIsBoxClicked] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isGallery1Colored, setIsGallery1Colored] = useState(false);
  const [isGallery2Colored, setIsGallery2Colored] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsBoxClicked(false);
    setIsNextClicked(false);
    setIsGallery1Colored(false);
    setIsGallery2Colored(false);
  }, [projectId]);

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsNextClicked(true);
    setTimeout(() => {
      navigate(`/projects/${project.nextId}`);
    }, 600); // 600ms transition time
  };

  const titleParts = project.title.split(' ');
  const titleStart = titleParts.slice(0, titleParts.length - 1).join(' ');

  return (
    <div className="bg-brand-black">

      {/* ── Hero ── */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Slow Ken-Burns zoom */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ animation: 'heroZoom 18s ease-in-out infinite alternate' }}
        >
          <img
            src={project.heroImage}
            alt="Project Detail"
            className="w-full h-full object-cover"
          />
        </div>
        <style>{`
          @keyframes heroZoom {
            0%   { transform: scale(1); }
            100% { transform: scale(1.18); }
          }
        `}</style>

        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: '#000000', opacity: 0.65 }} />

        {/* Hero text — slides up on page load */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <Link
                to="/projects"
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] hover:opacity-80 transition-opacity mb-8"
                style={{ color: '#F4A300' }}
              >
                <ArrowLeft size={14} style={{ color: '#F4A300' }} />
                Back to Projects
              </Link>
            </motion.div>
            <motion.h1
              className="text-6xl md:text-8xl font-serif"
              style={{ color: '#ffffff' }}
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            >
              {titleStart} <span className="italic">{project.titleItalic}</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <motion.section
        className="py-32"
        style={{ backgroundColor: '#ffffff' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

            {/* Left — text content */}
            <div className="lg:col-span-8">
              <motion.h2
                className="text-[10px] uppercase tracking-[0.4em] mb-12 block font-medium"
                style={{ color: '#F4A300' }}
                custom={0}
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
              >
                Project Overview
              </motion.h2>
              <motion.p
                className="text-3xl md:text-4xl font-serif leading-relaxed mb-12 font-light"
                style={{ color: '#0B3C5D' }}
                custom={0.15}
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
              >
                {project.overviewTitle}
              </motion.p>
              <motion.div
                className="space-y-8 text-xl leading-relaxed font-light"
                style={{ color: '#444444' }}
                custom={0.3}
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
              >
                <p>{project.overviewP1}</p>
                <p>{project.overviewP2}</p>
              </motion.div>
            </div>

            {/* Right — info block */}
            <motion.div
              onClick={() => setIsBoxClicked(!isBoxClicked)}
              className="lg:col-span-4 pl-12 py-12 rounded-2xl transition-all duration-500 cursor-pointer"
              style={{
                backgroundColor: '#0B3C5D',
                boxShadow: isBoxClicked
                  ? '0 0 40px 8px rgba(244,163,0,0.45), 0 8px 32px rgba(0,0,0,0.25)'
                  : '0 8px 32px rgba(0,0,0,0.25)',
              }}
              custom={0.2}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              onMouseEnter={e => {
                if (window.innerWidth >= 768 && !isBoxClicked) {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 0 40px 8px rgba(244,163,0,0.45), 0 8px 32px rgba(0,0,0,0.25)';
                }
              }}
              onMouseLeave={e => {
                if (window.innerWidth >= 768 && !isBoxClicked) {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 8px 32px rgba(0,0,0,0.25)';
                }
              }}
            >
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] mb-4 font-bold" style={{ color: '#F4A300' }}>
                    Location
                  </h4>
                  <p className="font-light" style={{ color: '#ffffff' }}>{project.location}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] mb-4 font-bold" style={{ color: '#F4A300' }}>
                    Year
                  </h4>
                  <p className="font-light" style={{ color: '#ffffff' }}>{project.year}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] mb-4 font-bold" style={{ color: '#F4A300' }}>
                    Materials
                  </h4>
                  <p className="font-light" style={{ color: '#ffffff' }}>{project.materials}</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ── Gallery ── */}
      <motion.section
        className="py-32"
        style={{ backgroundColor: '#0B3C5D' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="aspect-square overflow-hidden rounded-2xl cursor-pointer"
              custom={0}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              onClick={() => setIsGallery1Colored(prev => !prev)}
            >
              <img
                src={project.gallery1}
                alt="Detail 1"
                className={`w-full h-full object-cover transition-all duration-1000 md:hover:grayscale-0 ${
                  isGallery1Colored ? 'grayscale-0' : 'grayscale'
                }`}
              />
            </motion.div>
            <motion.div
              className="aspect-square overflow-hidden rounded-2xl mt-24 cursor-pointer"
              custom={0.2}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              onClick={() => setIsGallery2Colored(prev => !prev)}
            >
              <img
                src={project.gallery2}
                alt="Detail 2"
                className={`w-full h-full object-cover transition-all duration-1000 md:hover:grayscale-0 ${
                  isGallery2Colored ? 'grayscale-0' : 'grayscale'
                }`}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── Next Project ── */}
      <motion.section
        className="py-48 border-t border-gray-100"
        style={{ backgroundColor: '#ffffff' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
      >
        <div className="container mx-auto px-6 text-center">
          {project.id < 6 ? (
            <>
              <motion.span
                className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block"
                custom={0}
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
              >
                Next Project
              </motion.span>
              <div onClick={handleNextClick} className="group inline-block cursor-pointer">
                <motion.h2
                  className="text-6xl md:text-8xl font-serif italic transition-colors duration-500 hover:text-[#F4A300]"
                  style={{ color: isNextClicked ? '#F4A300' : '#0B3C5D' }}
                  custom={0.15}
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOpts}
                >
                  {project.nextTitle}
                </motion.h2>
                <motion.div
                  className="mt-12 flex justify-center items-center gap-4 transition-colors uppercase tracking-[0.2em] text-[11px] hover:text-[#F4A300]"
                  style={{ color: isNextClicked ? '#F4A300' : '#0B3C5D' }}
                  custom={0.28}
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOpts}
                >
                  View Project <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </motion.div>
              </div>
            </>
          ) : (
            <div className="text-gray-400">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block">
                Portfolio End
              </span>
              <h2 className="text-6xl md:text-8xl font-serif italic text-[#0B3C5D] mb-12">
                Final Project
              </h2>
              <Link to="/projects" className="inline-block px-10 py-4 border border-[#0B3C5D] text-[#0B3C5D] text-[11px] uppercase tracking-[0.2em] hover:bg-[#0B3C5D] hover:text-white transition-all duration-500 font-medium">
                Back to Projects
              </Link>
            </div>
          )}
        </div>
      </motion.section>

    </div>
  );
};

export default ProjectDetails;
