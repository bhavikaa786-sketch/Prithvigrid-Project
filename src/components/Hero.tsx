import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#000000]/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury Architecture"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-[#000000]/60 via-transparent to-[#000000]/40" />
      <div className="absolute inset-0 z-[5] bg-gradient-to-r from-[#000000]/60 via-transparent to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-30 pt-48 pb-48">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] text-[#ffffff] mb-8"
          >
            Your Dream Home, <br />
            <span className="italic">Safely Built</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-[#ffffff] mb-12 max-w-xl font-light leading-relaxed"
          >
            Building your dream home with 100% money safety, absolute transparency, and AI-led quality audits. We bring structural honesty and premium finishing to independent houses, villas, and commercial spaces across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-8 mb-20"
          >
            <Link
              to="/projects"
              className="px-10 py-4 bg-[var(--background)] text-[var(--foreground)] border border-[var(--background)] text-[11px] uppercase tracking-[0.2em] hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:border-[var(--foreground)] transition-all duration-500 font-medium"
            >
              Our Portfolio
            </Link>
            <Link
              to="/process"
              className="px-10 py-4 bg-[var(--background)] text-[var(--foreground)] border border-[var(--background)] text-[11px] uppercase tracking-[0.2em] hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:border-[var(--foreground)] transition-all duration-500 font-medium inline-flex items-center gap-3 group"
            >
              The Process
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Bottom Stats */}
      <div className="absolute bottom-12 left-0 right-0 z-20 pointer-events-none">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-white/10 pt-12">
            {[
              { label: 'Quality Assurance', value: '310+ QA Checks' },
              { label: 'Secure Payments', value: '100% Safe Escrow' },
              { label: 'Zero Overrun Policy', value: 'On-Time Delivery' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 + (i * 0.2), ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto"
              >
                <div className="text-3xl md:text-4xl font-serif text-[#F4A300] mb-3">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-[#ffffff] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 right-12 z-20 hidden lg:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
