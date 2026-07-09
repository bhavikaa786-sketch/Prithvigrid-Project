import { motion } from 'framer-motion';
import { TestimonialsCard, type TestimonialItem } from '@/components/ui/testimonials-card';

const testimonials: TestimonialItem[] = [
  {
    name: "The Sharma Family",
    role: "Whitefield, Bangalore",
    text: "Building our dream villa with PrithviGrid was an absolute pleasure. Their milestone-based escrow system meant zero risk for us, and the structural quality exceeded all expectations.",
    avatar: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "Amit Verma",
    role: "Sector 15, Noida",
    text: "Their QASCON quality checking framework is incredibly rigorous. The engineering team caught minor waterproofing issues early and rectified them immediately. Very professional.",
    avatar: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "Sneha Reddy",
    role: "Founder, Zenith Studios, Hyderabad",
    text: "PrithviGrid constructed our commercial tech workspace block. What blew me away was their absolute budget predictability—zero cost overrun and completed exactly on schedule.",
    avatar: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "Vikram & Anjali Sen",
    role: "DLF Phase 5, Gurgaon",
    text: "The customer dashboard app made our house construction so easy. We received daily photo logs and material reports, meaning we barely had to visit the dusty site ourselves.",
    avatar: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "Dr. Rajesh K.",
    role: "Baner, Pune",
    text: "The combination of Vastu-compliant spacing, structural design stability checks, and 10-year warranty certificate made PrithviGrid the best decision for our combined clinic & residence.",
    avatar: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
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
            className="text-3xl sm:text-5xl md:text-7xl font-serif text-[#1C1A17] uppercase tracking-wider"
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
          <TestimonialsCard 
            testimonials={testimonials} 
            width={500} 
            autoPlay={true} 
            autoPlayInterval={5000} 
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
