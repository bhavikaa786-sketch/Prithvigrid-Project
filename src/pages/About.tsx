import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [clickedBoxes, setClickedBoxes] = useState<Record<string, boolean>>({});

  const toggleGlow = (title: string) => {
    setClickedBoxes(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="bg-brand-black w-full overflow-hidden">
      {/* Header */}
      <div className="relative pt-40 pb-32">
        {/* Image Background with Slow Zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            alt="Construction Hero"
            className="w-full h-full object-cover"
          />
          {/* Solid color overlay */}
          <div className="absolute inset-0 bg-[#0B3C5D] opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mb-12"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[10px] uppercase tracking-[0.4em] mb-8 block font-medium"
              style={{ color: '#F4A300' }}
            >
              About Us
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-8xl font-serif leading-tight mb-12"
              style={{ color: '#ffffff' }}
            >
              Crafting the <br /><span className="italic">Foundations of Legacy</span>
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="bg-[#ffffff] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Premium Luxury Construction" 
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-12"
            >
              <h2 className="text-4xl font-serif text-gray-900 italic">"We don't just build structures; we curate environments that inspire."</h2>
              <p className="text-gray-600 text-xl leading-relaxed font-light">
                Founded on the principles of architectural restraint and structural integrity, PrithviGrid has spent over two decades redefining the luxury landscape. Our journey began with a single vision: to merge the raw honesty of industrial materials with the refined elegance of modern design.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed font-light">
                Today, our team of master builders and visionary planners work in tandem to deliver projects that are as technically sound as they are visually arresting.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Performance', desc: 'We build for generations, not just for the moment. Our materials and methods are chosen for their enduring quality.' },
              { title: 'Clarity', desc: 'Design should be intuitive and honest. We strip away the unnecessary to reveal the essential beauty of space.' },
              { title: 'Mastery', desc: 'Our craftsmen are artisans of the trade. Every joint, every pour, and every finish is executed with surgical precision.' }
            ].map((value, i) => {
              const isClicked = !!clickedBoxes[value.title];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  onClick={() => toggleGlow(value.title)}
                  className="p-10 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-500 cursor-pointer"
                  style={{
                    border: isClicked ? '1px solid rgba(244,163,0,0.5)' : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: isClicked
                      ? '0 0 28px 6px rgba(244,163,0,0.45), 0 8px 32px rgba(0,0,0,0.3)'
                      : '0 8px 24px rgba(0,0,0,0.2)',
                    transform: isClicked ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                  onMouseEnter={e => {
                    if (window.innerWidth >= 768 && !isClicked) {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.boxShadow = '0 0 28px 6px rgba(244,163,0,0.45), 0 8px 32px rgba(0,0,0,0.3)';
                      el.style.transform = 'translateY(-8px)';
                      el.style.border = '1px solid rgba(244,163,0,0.5)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (window.innerWidth >= 768 && !isClicked) {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
                      el.style.transform = 'translateY(0)';
                      el.style.border = '1px solid rgba(255,255,255,0.1)';
                    }
                  }}
                >
                  <h3 className="text-2xl mb-6 font-bold" style={{ color: '#F4A300' }}>{value.title}</h3>
                  <p className="leading-relaxed font-light" style={{ color: '#ffffff' }}>{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
