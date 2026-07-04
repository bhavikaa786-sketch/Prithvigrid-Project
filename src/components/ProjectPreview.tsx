import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'the-obsidian-house',
    title: 'The Obsidian House',
    category: 'Architecture',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    size: 'large'
  },
  {
    id: 'pavilion-no-4',
    title: 'Pavilion No. 4',
    category: 'Residential',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    size: 'small',
    desc: 'Exploring the boundaries between interior comfort and the wild untamed landscape.'
  },
  {
    id: 'alpine-retreat',
    title: 'Alpine Retreat',
    category: 'Hospitality',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    size: 'full'
  }
];

const ProjectPreview = () => {
  return (
    <section className="py-32 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-brand-white/10 pb-12">
          <h2 className="text-5xl md:text-6xl font-serif text-white">Selected Works</h2>
          <Link to="/projects" className="text-[11px] uppercase tracking-[0.2em] text-brand-gold hover:text-white transition-colors flex items-center gap-2 mb-2">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32">
          {/* Large Project Left */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <Link to={`/projects/${projects[0].id}`} className="group block relative overflow-hidden">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-2 block">{projects[0].category}</span>
                  <h3 className="text-3xl font-serif text-white group-hover:text-brand-gold transition-colors">{projects[0].title}</h3>
                </div>
                <span className="text-[10px] text-brand-concrete mt-1">{projects[0].year}</span>
              </div>
            </Link>
          </motion.div>

          {/* Small Project Right */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:mt-48"
          >
            <Link to={`/projects/${projects[1].id}`} className="group block relative">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={projects[1].image} 
                  alt={projects[1].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="mt-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-2 block">{projects[1].category}</span>
                <h3 className="text-3xl font-serif text-white group-hover:text-brand-gold transition-colors mb-4">{projects[1].title}</h3>
                <p className="text-brand-concrete text-sm leading-relaxed max-w-xs">{projects[1].desc}</p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Full Width Project */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <Link to={`/projects/${projects[2].id}`} className="block relative h-[600px] overflow-hidden">
            <img 
              src={projects[2].image} 
              alt={projects[2].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors" />
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <h3 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-[0.1em]">{projects[2].title}</h3>
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white">
                View Project
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-black transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPreview;
