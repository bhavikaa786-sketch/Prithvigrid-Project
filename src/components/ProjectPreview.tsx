import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'lumina-residences',
    title: 'Lumina Residences',
    desc: 'Bespoke residential estate featuring sprawling glass facades and integrated natural landscapes.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'the-glass-pavilion',
    title: 'The Glass Pavilion',
    desc: 'Seamless integration of indoor living and untouched natural surroundings for total serenity.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'aura-tower',
    title: 'Aura Commercial Tower',
    desc: 'Next-generation workspace built with sustainable materials and futuristic aesthetics.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'zenith-villa',
    title: 'Zenith Luxury Villa',
    desc: 'Private mountain retreat offering panoramic views and ultra-premium modern amenities.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'horizon-estate',
    title: 'Horizon Estate',
    desc: 'A magnificent beachfront property redefining coastal luxury and sustainable architecture.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'urban-oasis',
    title: 'Urban Oasis',
    desc: 'A modern metropolitan haven blending concrete strength with lush botanical elements.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  }
];

const ProjectPreview = () => {
  return (
    <section className="py-32 bg-[#ffffff] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header matching the image layout */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="w-16 h-[1px] bg-[#F4A300] mb-6 opacity-70" />
          <h2 className="text-4xl md:text-5xl font-serif text-[#000000] uppercase tracking-wider mb-4">Selected Works</h2>
          <p className="text-[#F4A300] text-sm uppercase tracking-[0.2em] font-medium">Premium Commissions</p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full overflow-hidden flex py-4">
        <motion.div
          className="flex gap-6 pr-6 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {[...projects, ...projects].map((project, i) => (
            <div
              key={i}
              className="w-[300px] md:w-[350px] lg:w-[400px] shrink-0 bg-[#ffffff] rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full group"
            >
              <div className="h-56 sm:h-64 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center flex-grow flex flex-col items-center justify-start bg-[#ffffff]">
                <h3 className="text-[#000000] font-bold text-[13px] uppercase tracking-wider mb-4">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{project.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPreview;
