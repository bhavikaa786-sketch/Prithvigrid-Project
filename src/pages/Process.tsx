import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Consultation', desc: 'Understanding your vision and the site’s potential. We discuss the interplay of light, landscape, and legacy.' },
  { num: '02', title: 'Concept Design', desc: 'Architectural sketching and conceptual planning. We establish the structural rhythm and material palette.' },
  { num: '03', title: 'Technical Planning', desc: 'Surgical precision in engineering. Every joint and surface is planned to ensure structural honesty.' },
  { num: '04', title: 'Construction', desc: 'Our master builders bring the vision to life, utilizing hand-poured concrete and precision-milled materials.' },
  { num: '05', title: 'Finishing', desc: 'The refinement phase. We meticulously curate every surface to ensure an atmosphere of quiet luxury.' }
];

const Process = () => {
  return (
    <div className="bg-brand-black pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block font-medium"
          >
            The Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-tight text-white mb-12"
          >
            The Path to <br /><span className="italic">Excellence</span>
          </motion.h1>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-brand-white/10 hidden lg:block" />

          <div className="space-y-32 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 flex justify-center lg:justify-end overflow-hidden">
                  <motion.div 
                    initial={{ opacity: 0.1, scale: 0.8, color: "rgba(197, 160, 89, 0.1)" }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1, 
                      color: "rgba(197, 160, 89, 0.3)",
                      textShadow: "0 0 40px rgba(197, 160, 89, 0.2)"
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                    className={`text-9xl md:text-[12rem] font-serif italic leading-none select-none ${i % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'}`}
                  >
                    {step.num}
                  </motion.div>
                </div>
                <div className="lg:w-1/2 text-left relative">
                  {/* Glowing side accent */}
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "100%", opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -left-8 top-0 w-[2px] bg-brand-gold/50 shadow-[0_0_15px_rgba(197,160,89,0.5)] hidden md:block"
                  />
                  
                  <motion.h3 
                    initial={{ color: "#FFFFFF" }}
                    whileInView={{ 
                      color: "#C5A059",
                      textShadow: "0 0 20px rgba(197, 160, 89, 0.4)"
                    }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.8 }}
                    className="text-3xl font-serif mb-6 uppercase tracking-[0.2em]"
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-brand-concrete text-lg md:text-xl leading-relaxed font-light max-w-md">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
