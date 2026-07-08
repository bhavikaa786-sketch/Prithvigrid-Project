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
              "Building a home is the milestone of a lifetime. We make it completely transparent, reliable, and stress-free."
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
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-light font-semibold mb-6">Trust & Predictability</h4>
            <p className="text-brand-concrete text-lg leading-relaxed mb-8 font-light">
              We believe that building a house shouldn't involve endless stress, delays, and hidden costs. By routing all payments through milestone-based escrow accounts and using tech-led site trackers, we make construction predictable and safe.
            </p>
            <p className="text-brand-concrete text-lg leading-relaxed mb-12 font-light">
              From soil testing and Vastu-compliant 3D layouts to structural stability checks, our certified experts audit quality at every gate to deliver a home you can trust for generations.
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
