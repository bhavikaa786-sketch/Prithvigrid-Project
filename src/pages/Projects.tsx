import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = ['All', 'Residential', 'Renovations', 'Commercial', 'Architecture'];

const allProjects = [
  { id: 1, title: 'The Glass House', category: 'Architecture', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1 md:col-span-2' },
  { id: 2, title: 'Modern Villa', category: 'Residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1' },
  { id: 3, title: 'Obsidian Suite', category: 'Renovations', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1' },
  { id: 4, title: 'HQ Tower', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1 md:col-span-2' },
  { id: 5, title: 'Zen Retreat', category: 'Architecture', image: 'https://images.unsplash.com/photo-1541888086225-ee593257dfde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1' },
  { id: 6, title: 'Luxe Loft', category: 'Renovations', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', span: 'col-span-1' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-brand-black pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block font-medium"
            >
              Portfolio
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif leading-tight text-white mb-4"
            >
              Selected <span className="italic">Works</span>
            </motion.h1>
          </div>
          
          <div className="flex flex-wrap gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-300 ${
                  activeCategory === cat ? 'text-brand-gold border-b border-brand-gold pb-2' : 'text-brand-concrete hover:text-white'
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
                className={`${project.span} group relative overflow-hidden`}
              >
                <Link to={`/projects/${project.id}`} className="block relative">
                  <div className="aspect-[4/5] md:aspect-auto md:h-[500px] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4">{project.category}</span>
                    <h3 className="text-4xl font-serif text-white">{project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
