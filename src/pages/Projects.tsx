import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = ['All', 'Residential', 'Renovations', 'Commercial', 'Architecture'];

const allProjects = [
  { id: 1, title: 'Noida Sector 62 Glasshouse', category: 'Architecture', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1 md:col-span-2' },
  { id: 2, title: 'Bangalore Whitefield Heritage', category: 'Residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1' },
  { id: 3, title: 'Gurgaon Phase 5 Duplex', category: 'Renovations', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1' },
  { id: 4, title: 'Gachibowli Tech Hub', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1 md:col-span-2' },
  { id: 5, title: 'Pune Baner Retreat', category: 'Architecture', image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1' },
  { id: 6, title: 'Mumbai Bandra Penthouse', category: 'Renovations', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1 md:col-span-2' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#ffffff] w-full min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-[#0B3C5D]"
      >
        <motion.div
          animate={{ scale: 1.15 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Overlay - #0B3C5D highlighting the image */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0B3C5D', opacity: 0.5 }}></div>
        
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-6 md:px-12 pb-24 z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.4em] mb-8 block font-medium"
              style={{ color: '#F4A300' }}
            >
              Portfolio
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-8xl font-serif leading-tight mb-4"
              style={{ color: '#ffffff' }}
            >
              Selected <span className="italic">Works</span>
            </motion.h1>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pt-24 pb-32 bg-[#ffffff]" 
      >
        <div className="container mx-auto px-6 md:px-12">
          {/* Categories - Kept in one line */}
          <div className="flex justify-start md:justify-center mb-16 overflow-x-auto hide-scrollbar">
            <div className="flex flex-nowrap gap-8 whitespace-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[12px] uppercase tracking-[0.3em] transition-colors duration-300 font-bold ${
                    activeCategory === cat 
                      ? 'text-[#F4A300] border-b-2 border-[#F4A300] pb-2' 
                      : 'text-[#000000] hover:text-[#F4A300]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className={`${project.span} group relative overflow-hidden rounded-2xl`}
                >
                  <Link to={`/projects/${project.id}`} className="block relative">
                    <div className="aspect-[4/5] md:aspect-auto md:h-[500px] overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-all duration-1000 md:group-hover:scale-110" 
                      />
                      {/* Default state: lighter #0B3C5D overlay highlighting image */}
                      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 md:opacity-35 md:group-hover:opacity-0 bg-[#0B3C5D]"></div>
                      
                      {/* Hover/Touch state: text and dark gradient to make text visible */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-12">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#F4A300] mb-4">{project.category}</span>
                        <h3 className="text-4xl font-serif text-white">{project.title}</h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
