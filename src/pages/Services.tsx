import { motion } from 'framer-motion';

const services = [
  {
    title: 'Residential Construction',
    desc: 'From architectural concept to structural completion, we build bespoke estates that stand as testaments to refined living.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Luxury Renovation',
    desc: 'Breathing new life into historic structures, we meticulously restore and modernize spaces while preserving their original soul.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Interior Architecture',
    desc: 'Curating every surface and detail to create a cohesive atmosphere that transcends traditional interior design.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Commercial Masterpieces',
    desc: 'Visionary professional environments designed to inspire creativity and project a legacy of corporate excellence.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  }
];

const Services = () => {
  return (
    <div className="bg-brand-black pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block font-medium"
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-tight text-white"
          >
            Disciplines of <br /><span className="italic">Execution</span>
          </motion.h1>
        </div>

        <div className="space-y-48">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                </div>
              </div>
              <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">{service.title}</h2>
                <p className="text-brand-concrete text-lg leading-relaxed font-light mb-12">
                  {service.desc}
                </p>
                <div className="w-12 h-[1px] bg-brand-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
