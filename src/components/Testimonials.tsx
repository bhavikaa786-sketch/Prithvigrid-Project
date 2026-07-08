import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "PrithviGrid constructed our commercial tech workspace block. What blew me away was their absolute budget predictability—zero cost overrun and completed exactly on schedule.",
    author: "Sneha Reddy",
    role: "Founder, Zenith Studios, Hyderabad",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 2,
    text: "Building our dream villa with PrithviGrid was an absolute pleasure. Their milestone-based escrow system meant zero risk for us, and the structural quality exceeded all expectations.",
    author: "The Sharma Family",
    role: "Whitefield, Bangalore",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    text: "The combination of Vastu-compliant spacing, structural design stability checks, and 10-year warranty certificate made PrithviGrid the best decision for our combined clinic & residence.",
    author: "Dr. Rajesh K.",
    role: "Baner, Pune",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#ffffff] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4 block">Client Success</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Words from our <span className="text-brand-concrete">Clients.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card p-8 md:p-16 rounded-sm">
            <Quote className="absolute top-8 left-8 text-brand-accent/20" size={64} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-10">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-accent/50">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold">{testimonials[currentIndex].author}</h4>
                    <p className="text-brand-concrete text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-6 z-20 pointer-events-none">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-all pointer-events-auto"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-all pointer-events-auto"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-brand-accent' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
