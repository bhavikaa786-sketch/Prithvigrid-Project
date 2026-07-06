import { motion } from 'framer-motion';
import { TestimonialsCard, type TestimonialItem } from '@/components/ui/testimonials-card';

const testimonials: TestimonialItem[] = [
  {
    name: "The Sinclair Family",
    role: "Malibu, California",
    text: "Building with PrithviGrid was a journey of discovery. They didn't just build our home; they understood the legacy we wanted to leave for our children.",
    avatar: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" // Modern glass pavilion villa
  },
  {
    name: "Marcus Chen",
    role: "London, UK",
    text: "Their mastery of materials is unmatched. The way they handle raw concrete and timber is truly surgical. The atmosphere in our office now is one of quiet power.",
    avatar: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" // Raw concrete/steel commercial tower
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, Elevate Tech",
    text: "PrithviGrid transformed our outdated commercial space into a modern, functional masterpiece. Their attention to detail and commitment to the timeline was unprecedented.",
    avatar: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" // Urban concrete/botanical design space
  },
  {
    name: "David & Emma Thompson",
    role: "Homeowners",
    text: "Building our custom luxury home with PrithviGrid was a seamless experience. They understood our vision perfectly and executed it with precision and premium craftsmanship.",
    avatar: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" // Premium glass/pool residential estate
  },
  {
    name: "Michael Chen",
    role: "Principal Architect, Chen Designs",
    text: "The architectural insight and construction quality provided by their team is unmatched in the industry. They don't just build; they create art.",
    avatar: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" // Luxury hillside villa
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
