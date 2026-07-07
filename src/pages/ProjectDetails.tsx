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
    title: 'The Glass House',
    titleItalic: 'House',
    category: 'Architecture',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Big Sur, California',
    year: '2023',
    materials: 'Exposed Steel, Low-Iron Glass, Honed Basalt',
    overviewTitle: 'A study in transparency and structural rhythm, The Glass House redefined the boundaries of coastal living.',
    overviewP1: 'Perched on the rugged cliffs of the Pacific coast, this project was a masterclass in architectural restraint. The challenge was to create a structure that vanished into its environment while providing a fortress against the elements.',
    overviewP2: 'We utilized custom-engineered steel frames and ultra-clear structural glass to minimize visual barriers. The result is a seamless transition between the hand-crafted interior surfaces and the vast horizon beyond.',
    nextId: 2,
    nextTitle: 'Modern Villa',
    nextTitleItalic: 'Villa',
  },
  {
    id: 2,
    title: 'Modern Villa',
    titleItalic: 'Villa',
    category: 'Residential',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Malibu, California',
    year: '2022',
    materials: 'Concrete, Timber, Travertine',
    overviewTitle: 'A bold residential statement that blurs the line between sculpture and shelter.',
    overviewP1: 'Nestled in the sun-drenched hills of Malibu, the Modern Villa was conceived as a retreat that celebrates light, volume, and materiality. Every element was considered for its visual weight and tactile quality.',
    overviewP2: 'Raw concrete walls meet warm timber ceilings to create a dialogue between the rugged and the refined. Floor-to-ceiling glazing frames curated views of the Pacific while maintaining thermal comfort throughout.',
    nextId: 3,
    nextTitle: 'Obsidian Suite',
    nextTitleItalic: 'Suite',
  },
  {
    id: 3,
    title: 'Obsidian Suite',
    titleItalic: 'Suite',
    category: 'Renovations',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'New York, NY',
    year: '2022',
    materials: 'Polished Obsidian, Brushed Brass, Silk Plaster',
    overviewTitle: 'A high-end renovation transforming a dated penthouse into a dark, dramatic sanctuary.',
    overviewP1: 'The brief was simple: create something unforgettable. The Obsidian Suite strips away the conventional and replaces it with deep tones, reflective surfaces, and carefully orchestrated light.',
    overviewP2: 'Custom obsidian-clad wall panels reflect pinpoint lighting to create a jewel-box effect at night. Brushed brass accents provide warmth against the cool stone palette.',
    nextId: 4,
    nextTitle: 'HQ Tower',
    nextTitleItalic: 'Tower',
  },
  {
    id: 4,
    title: 'HQ Tower',
    titleItalic: 'Tower',
    category: 'Commercial',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Chicago, Illinois',
    year: '2021',
    materials: 'High-Strength Steel, Curtain Wall Glass, Aluminum Composite',
    overviewTitle: 'A commercial landmark redefining the skyline with precision engineering and bold form.',
    overviewP1: 'HQ Tower was designed to be the anchor of a new financial district. Rising 42 stories, the faceted glass facade responds dynamically to the Chicago skyline, reflecting sky and city in equal measure.',
    overviewP2: 'The structural core was engineered to withstand Lake Michigan wind loads while freeing the floor plates of all interior columns, providing maximum flexibility for tenants.',
    nextId: 5,
    nextTitle: 'Zen Retreat',
    nextTitleItalic: 'Retreat',
  },
  {
    id: 5,
    title: 'Zen Retreat',
    titleItalic: 'Retreat',
    category: 'Architecture',
    heroImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'Kyoto, Japan',
    year: '2023',
    materials: 'Cedar, Shoji Paper, River Stone',
    overviewTitle: 'A meditative architectural experience rooted in Japanese spatial philosophy.',
    overviewP1: 'Inspired by the principles of ma (間) — the Japanese concept of negative space — the Zen Retreat is designed around silence and stillness. Every element serves a purpose; nothing is surplus.',
    overviewP2: 'Cedar screens filter light to create ever-changing shadow patterns throughout the day. The building sits lightly on the landscape, its low profile and natural palette ensuring it disappears into the surrounding cedar forest.',
    nextId: 6,
    nextTitle: 'Luxe Loft',
    nextTitleItalic: 'Loft',
  },
  {
    id: 6,
    title: 'Luxe Loft',
    titleItalic: 'Loft',
    category: 'Renovations',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    gallery1: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    gallery2: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    location: 'London, UK',
    year: '2024',
    materials: 'Aged Oak, Velvet, Polished Plaster',
    overviewTitle: 'A converted Victorian warehouse reimagined as an ultra-luxe urban sanctuary.',
    overviewP1: "The Luxe Loft began as a derelict Victorian textile warehouse in East London. The project's challenge was to preserve the industrial character — exposed brick, original cast iron columns — while introducing uncompromising luxury.",
    overviewP2: 'Hand-oiled aged oak floors were laid over radiant underfloor heating. Bespoke furniture pieces were commissioned from London and Milan craftspeople, creating a space that feels both rooted in history and utterly contemporary.',
    nextId: 1,
    nextTitle: 'The Glass House',
    nextTitleItalic: 'House',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id || '1', 10);
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];

  const [isBoxClicked, setIsBoxClicked] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsBoxClicked(false);
    setIsNextClicked(false);
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
              className="aspect-square overflow-hidden rounded-2xl"
              custom={0}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
            >
              <img
                src={project.gallery1}
                alt="Detail 1"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            <motion.div
              className="aspect-square overflow-hidden rounded-2xl mt-24"
              custom={0.2}
              variants={childVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
            >
              <img
                src={project.gallery2}
                alt="Detail 2"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
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
