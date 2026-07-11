import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-[#ffffff] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:max-w-none overflow-hidden rounded-sm">
              <img 
                src="/concrete_pouring.png" 
                alt="Construction Process" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-10 -right-4 lg:-right-10 glass-card p-6 md:p-8 rounded-sm max-w-xs"
            >
              <div className="text-brand-accent text-4xl font-bold mb-2">100%</div>
              <p className="text-white font-medium mb-1">Client Satisfaction</p>
              <p className="text-brand-concrete text-sm">Delivering beyond expectations on every single project since our inception.</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4 block">About Our Firm</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Redefining <span className="text-brand-concrete">Modern</span> Construction.
            </h2>
            <p className="text-brand-light/80 text-lg mb-6 font-light leading-relaxed">
              At PrithviGrid, we don't just build structures; we craft environments that inspire. With over two decades of experience in luxury residential and high-end commercial construction, our approach blends innovative engineering with uncompromising aesthetic standards.
            </p>
            <p className="text-brand-concrete text-sm mb-10 leading-relaxed">
              We believe that true luxury lies in the details. From the initial architectural sketches to the final material finishes, our dedicated team of master builders, designers, and project managers ensure a seamless, transparent, and superior construction experience.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Uncompromising quality and premium materials',
                'Transparent project management and timelines',
                'Sustainable and innovative building practices',
                'Award-winning architectural partnerships'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-brand-light">
                  <CheckCircle2 className="text-brand-accent flex-shrink-0" size={20} />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/about"
              className="inline-block px-10 py-4 bg-brand-white text-brand-black text-[11px] uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-white transition-all duration-500 font-medium"
            >
              Discover Our Story
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
