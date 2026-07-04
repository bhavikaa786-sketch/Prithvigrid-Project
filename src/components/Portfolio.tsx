import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation'];

const projects = [
  {
    id: 1,
    title: 'The Glass House',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'Modern Minimalist Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Luxury Kitchen Remodel',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    title: 'Historic Brownstone',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#ffffff] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <span className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Featured <span className="text-brand-concrete">Projects.</span>
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-white text-brand-black font-medium'
                    : 'bg-white/5 text-brand-light hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          ref={ref}
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-sm ${project.span}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-brand-accent text-xs font-medium uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white flex items-center justify-between">
                      {project.title}
                      <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                        <ArrowUpRight size={20} />
                      </span>
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/projects"
            className="inline-block px-10 py-4 border border-white/20 text-white text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 font-medium"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
