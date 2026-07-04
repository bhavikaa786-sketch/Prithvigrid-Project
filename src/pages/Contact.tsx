import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-brand-black pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block font-medium"
          >
            Inquire
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-tight text-white mb-12"
          >
            Start Your <br /><span className="italic">Commission</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-brand-white/10 text-white py-4 focus:outline-none focus:border-brand-gold transition-colors font-light text-xl"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-brand-white/10 text-white py-4 focus:outline-none focus:border-brand-gold transition-colors font-light text-xl"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Project Type</label>
                <select className="w-full bg-transparent border-b border-brand-white/10 text-brand-concrete py-4 focus:outline-none focus:border-brand-gold transition-colors font-light text-xl appearance-none cursor-pointer">
                  <option value="" disabled selected>Select a service</option>
                  <option value="residential" className="bg-brand-black">Residential Construction</option>
                  <option value="renovation" className="bg-brand-black">Luxury Renovation</option>
                  <option value="interior" className="bg-brand-black">Interior Architecture</option>
                  <option value="commercial" className="bg-brand-black">Commercial Masterpiece</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Project Vision</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-white/10 text-white py-4 focus:outline-none focus:border-brand-gold transition-colors font-light text-xl resize-none"
                  placeholder="Tell us about your project legacy..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group flex items-center gap-6 px-12 py-5 bg-brand-light text-brand-black text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold hover:text-white transition-all duration-500"
              >
                Send Inquiry
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 lg:pl-24 space-y-24"
          >
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 font-bold">Global Studio</h4>
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <MapPin className="text-brand-gold flex-shrink-0" size={20} />
                  <p className="text-white text-xl font-light leading-relaxed">
                    Level 42, The Landmark Building<br />
                    Connaught Place, New Delhi<br />
                    India, 110001
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <Mail className="text-brand-gold flex-shrink-0" size={20} />
                  <p className="text-white text-xl font-light">hello@prithvigrid.com</p>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="text-brand-gold flex-shrink-0" size={20} />
                  <p className="text-white text-xl font-light">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 font-bold">Social Connection</h4>
              <div className="flex gap-12">
                {['LinkedIn', 'Instagram', 'Twitter'].map((s) => (
                  <a key={s} href="#" className="text-[11px] uppercase tracking-[0.2em] text-brand-concrete hover:text-white transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
