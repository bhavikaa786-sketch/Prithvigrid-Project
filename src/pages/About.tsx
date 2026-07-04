import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-brand-black pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block font-medium"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-tight text-white mb-12"
          >
            Crafting the <br /><span className="italic">Foundations of Legacy</span>
          </motion.h1>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-48 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541888086225-ee593257dfde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Construction Detail" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-12"
          >
            <h2 className="text-4xl font-serif text-white italic">"We don't just build structures; we curate environments that inspire."</h2>
            <p className="text-brand-concrete text-xl leading-relaxed font-light">
              Founded on the principles of architectural restraint and structural integrity, PrithviGrid has spent over two decades redefining the luxury landscape. Our journey began with a single vision: to merge the raw honesty of industrial materials with the refined elegance of modern design.
            </p>
            <p className="text-brand-concrete text-xl leading-relaxed font-light">
              Today, our team of master builders and visionary planners work in tandem to deliver projects that are as technically sound as they are visually arresting.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-brand-white/10 pt-24">
          {[
            { title: 'Permanence', desc: 'We build for generations, not just for the moment. Our materials and methods are chosen for their enduring quality.' },
            { title: 'Clarity', desc: 'Design should be intuitive and honest. We strip away the unnecessary to reveal the essential beauty of space.' },
            { title: 'Mastery', desc: 'Our craftsmen are artisans of the trade. Every joint, every pour, and every finish is executed with surgical precision.' }
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-6 font-bold">{value.title}</h3>
              <p className="text-brand-concrete leading-relaxed font-light">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
