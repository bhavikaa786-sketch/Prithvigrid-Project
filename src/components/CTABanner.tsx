import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-40 bg-brand-black relative overflow-hidden">
      {/* Subtle light effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Ready to Build Your <span className="italic">Legacy?</span>
          </h2>
          <p className="text-brand-concrete text-lg mb-12 max-w-2xl mx-auto font-light">
            We are currently accepting inquiries for late 2024 and 2025 commissions. 
            Let's discuss how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-brand-light text-brand-black text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold hover:text-white transition-all duration-500"
          >
            Start a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
