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
    <div className="bg-[var(--background)] min-h-screen">
      {/* Light Page Header */}
      <section className="pt-48 pb-20 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F4A300] text-[10px] uppercase tracking-[0.4em] mb-4 block font-semibold"
          >
            Client Stories
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-[#1C1A17] uppercase tracking-wider"
          >
            Voices of <span className="italic text-[#F4A300] lowercase font-normal">trust</span>
          </motion.h1>
        </div>
      </section>

      {/* Signature Blue Container Section for Cards */}
      <section className="bg-[#0B3C5D] py-24 overflow-hidden relative">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <motion.div 
                key={t.author}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#ffffff] rounded-3xl p-10 md:p-12 shadow-2xl relative transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between min-h-[380px]"
              >
                {/* Large Quotation Mark */}
                <Quote className="text-[#A87B51]/15 absolute top-6 left-6" size={80} strokeWidth={1} />
                
                {/* Quote Text */}
                <p className="text-[#1C1A17] font-sans text-base md:text-lg leading-relaxed font-light mb-8 relative z-10 pt-4">
                  "{t.quote}"
                </p>

                {/* Author Meta */}
                <div className="flex items-center gap-5 mt-auto relative z-10 border-t border-gray-100 pt-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#A87B51]/30 shrink-0">
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[#1C1A17] font-bold text-[13px] uppercase tracking-wider">{t.author}</h4>
                    <p className="text-[#A87B51] text-[10px] uppercase tracking-[0.2em] font-medium mt-1">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
