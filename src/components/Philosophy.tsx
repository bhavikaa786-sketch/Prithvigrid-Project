import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Philosophy = () => {
  return (
    <section className="py-32 bg-[#ffffff] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block font-medium">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight text-white mb-12">
              "Architecture is the art of space, defined by the dialogue between silence and light."
            </h2>
            <div className="w-24 h-[1px] bg-brand-gold/50" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:mt-24"
          >
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-light font-semibold mb-6">Restraint & Clarity</h4>
            <p className="text-brand-concrete text-lg leading-relaxed mb-8 font-light">
              We believe that true luxury is found in what is removed. Our process is a pursuit of essential form—stripping away the superfluous to reveal the soul of a structure. 
            </p>
            <p className="text-brand-concrete text-lg leading-relaxed mb-12 font-light">
              Every material, from the hand-poured concrete to the precision-milled timber, is selected for its ability to age with grace and tell a story of permanence.
            </p>
            <Link 
              to="/about" 
              className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-brand-gold hover:text-white transition-colors"
            >
              Learn About Our Method
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
