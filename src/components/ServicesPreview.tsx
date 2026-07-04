import { motion } from 'framer-motion';
import { Home, Compass, Building2, HeartHandshake } from 'lucide-react';

const features = [
  {
    id: '01',
    icon: Home,
    title: 'ARTISAN CRAFTSMANSHIP',
    desc: 'Carefully selected materials, expertly built to deliver rich aesthetics and a memorable experience.'
  },
  {
    id: '02',
    icon: Compass,
    title: 'CURATED DESIGNS',
    desc: 'Handcrafted structures and interiors prepared fresh with quality materials and thoughtful presentation.'
  },
  {
    id: '03',
    icon: Building2,
    title: 'PREMIUM AMBIENCE',
    desc: 'Beautiful spaces designed for relaxing conversations, productive meetings and special celebrations.'
  },
  {
    id: '04',
    icon: HeartHandshake,
    title: 'GENUINE PARTNERSHIP',
    desc: 'Attentive service and welcoming experiences that make every project feel comfortable and special.'
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-32 bg-[#0B3C5D] overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Header section matching screenshot */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#F4A300] text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">
            THE PRITHVIGRID EXPERIENCE
          </span>
          <h2 className="text-[#ffffff] text-4xl md:text-5xl font-serif uppercase tracking-wider">
            WHAT MAKES US SPECIAL?
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#ffffff] rounded-2xl p-8 relative overflow-hidden flex flex-col items-start shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Number */}
              <div className="absolute top-2 right-4 text-7xl font-bold text-[#f3f4f6] z-0 select-none pointer-events-none">
                {feature.id}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <feature.icon size={28} className="text-[#A87B51] mb-8" strokeWidth={1.5} />
                <h3 className="text-[#513b2e] font-bold text-sm uppercase tracking-wider mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
