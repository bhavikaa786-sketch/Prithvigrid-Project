import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Residential Construction', id: 'residential' },
  { title: 'Luxury Renovation', id: 'renovation' },
  { title: 'Interior Architecture', id: 'interior' },
  { title: 'Commercial Builds', id: 'commercial' }
];

const ServicesPreview = () => {
  return (
    <section className="py-32 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-brand-white/10 pb-12">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-4 block font-medium">Our Expertise</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white">Crafting the <br />Uncommon</h2>
          </div>
          <Link to="/services" className="text-[11px] uppercase tracking-[0.2em] text-brand-concrete hover:text-white transition-colors mt-8 md:mt-0">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-96 overflow-hidden flex items-end p-8 border border-brand-white/10 rounded-sm"
            >
              <div className="absolute inset-0 bg-brand-gray/20 group-hover:bg-brand-gold/10 transition-colors duration-500" />
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-brand-gold transition-colors leading-snug">{service.title}</h3>
                <Link to="/services" className="text-[10px] uppercase tracking-[0.3em] text-brand-concrete group-hover:text-white transition-colors">
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
