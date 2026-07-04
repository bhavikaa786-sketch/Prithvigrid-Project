import { motion } from 'framer-motion';
import { Home, Hammer, PaintBucket, Building2, Wrench, Compass, Sofa, Frame } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Ground-up custom home builds tailored to your lifestyle and aesthetic preferences.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Hammer,
    title: 'Home Renovation',
    description: 'Complete interior and exterior transformations that breathe new life into your property.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Frame,
    title: 'Interior Remodeling',
    description: 'Structural changes and space optimization for modern, functional living areas.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Wrench,
    title: 'Kitchen Renovation',
    description: 'High-end culinary spaces featuring premium materials and state-of-the-art appliances.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: PaintBucket,
    title: 'Bathroom Remodeling',
    description: 'Spa-like sanctuaries designed for ultimate relaxation and sophisticated comfort.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Professional workspaces and retail environments built to impress and perform.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Compass,
    title: 'Architectural Design',
    description: 'Visionary planning and structural engineering that pushes the boundaries of design.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Sofa,
    title: 'Custom Builds',
    description: 'Bespoke architectural elements and unique structural features for discerning clients.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-24 bg-[#0B3C5D] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#ffffff] text-sm font-medium tracking-widest uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#ffffff]">
              Comprehensive <span className="text-brand-concrete">Solutions.</span>
            </h2>
          </div>
          <p className="text-brand-light/70 max-w-md text-sm leading-relaxed">
            From initial concept to final finishing touches, we deliver uncompromising quality across a wide spectrum of construction and renovation disciplines.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-brand-gray/30 border border-white/5 p-8 rounded-sm hover:bg-brand-gray/80 transition-all duration-500 overflow-hidden"
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-full h-40 mb-6 overflow-hidden rounded-sm relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 w-10 h-10 glass flex items-center justify-center rounded-sm text-[#ffffff] shadow-lg">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#ffffff] mb-3 group-hover:text-brand-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-concrete text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
