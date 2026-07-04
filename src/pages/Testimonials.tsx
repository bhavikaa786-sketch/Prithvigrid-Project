import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Building with PrithviGrid was a journey of discovery. They didn't just build our home; they understood the legacy we wanted to leave for our children.",
    author: "The Sinclair Family",
    location: "Malibu, California",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    quote: "Their mastery of materials is unmatched. The way they handle raw concrete and timber is truly surgical. The atmosphere in our office now is one of quiet power.",
    author: "Marcus Chen",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-brand-black pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block font-medium"
          >
            Client Stories
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-tight text-white mb-12"
          >
            Voices of <br /><span className="italic">Trust</span>
          </motion.h1>
        </div>

        <div className="space-y-48">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:col-span-6 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-all duration-1000" />
                </div>
              </div>
              <div className={`lg:col-span-6 relative ${i % 2 !== 0 ? 'lg:order-1 lg:pr-24' : 'lg:pl-24'}`}>
                <Quote className="text-brand-gold/20 mb-8" size={64} />
                <h2 className="text-4xl md:text-5xl font-serif text-white italic leading-relaxed mb-12">"{t.quote}"</h2>
                <div>
                  <h4 className="text-white font-medium mb-2 tracking-[0.2em] uppercase text-xs">{t.author}</h4>
                  <p className="text-brand-gold text-[10px] uppercase tracking-[0.3em]">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
