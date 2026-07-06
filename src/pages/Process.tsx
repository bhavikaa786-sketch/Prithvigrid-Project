import { motion } from 'framer-motion';
import { MessageSquare, Compass, Layers, Building2, CheckCircle2 } from 'lucide-react';

const steps = [
  { num: '01', icon: MessageSquare, title: 'Consultation', desc: 'Understanding your vision and the site’s potential. We discuss the interplay of light, landscape, and legacy.' },
  { num: '02', icon: Compass, title: 'Concept Design', desc: 'Architectural sketching and conceptual planning. We establish the structural rhythm and material palette.' },
  { num: '03', icon: Layers, title: 'Technical Planning', desc: 'Surgical precision in engineering. Every joint and surface is planned to ensure structural honesty.' },
  { num: '04', icon: Building2, title: 'Construction', desc: 'Our master builders bring the vision to life, utilizing hand-poured concrete and precision-milled materials.' },
  { num: '05', icon: CheckCircle2, title: 'Finishing', desc: 'The refinement phase. We meticulously curate every surface to ensure an atmosphere of quiet luxury.' }
];

const Process = () => {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      {/* Blue Container Header */}
      <section className="bg-[#0B3C5D] pt-48 pb-32 overflow-hidden relative">
        {/* Subtle background graphic */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F4A300] text-[10px] uppercase tracking-[0.4em] mb-4 block font-semibold"
          >
            The Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white uppercase tracking-wider"
          >
            The Path to <span className="italic text-[#F4A300] lowercase font-normal">excellence</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Steps Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#ffffff] rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 min-h-[280px]"
              >
                {/* Background Number */}
                <div className="absolute top-2 right-4 text-7xl font-extrabold text-[#f3f4f6] z-0 select-none pointer-events-none tracking-tighter">
                  {step.num}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <step.icon size={32} className="text-[#A87B51] mb-6" strokeWidth={1.5} />
                    <h3 className="text-[#1C1A17] font-serif text-xl font-bold uppercase tracking-wider mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-light">
                      {step.desc}
                    </p>
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

export default Process;
