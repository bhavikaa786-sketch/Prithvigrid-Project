import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-40 bg-[#0B3C5D] relative overflow-hidden">
      {/* Subtle light effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-[#ffffff] mb-8">
            Ready to Build Your <span className="italic">Dream Home?</span>
          </h2>
          <p className="text-[#F4A300] text-lg mb-12 max-w-2xl mx-auto font-light">
            Calculate your construction cost instantly or book a session with our site planning experts. We build in major cities across India with zero cost escalations.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-[#000000] text-[#ffffff] text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold hover:text-white transition-all duration-500"
          >
            Get Estimation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
