import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#ffffff] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-brand-accent/5 rounded-[100%] blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <div>
            <span className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Let's Build Your <br />
              <span className="text-brand-concrete">Vision Together.</span>
            </h2>
            <p className="text-brand-light/70 mb-12 max-w-md text-sm leading-relaxed">
              Whether you're planning a luxury home build or a commercial renovation, our team is ready to bring your ideas to life with uncompromising quality.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-sm text-brand-accent flex-shrink-0">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Our Office</h4>
                  <p className="text-brand-concrete text-sm">Level 42, The Landmark Building<br />Connaught Place, New Delhi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-sm text-brand-accent flex-shrink-0">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <p className="text-brand-concrete text-sm">+91 98765 43210<br />Mon-Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-sm text-brand-accent flex-shrink-0">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <p className="text-brand-concrete text-sm">hello@prithvigrid.com<br />projects@prithvigrid.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-10 rounded-sm relative">
            {/* Glow effect behind form */}
            <div className="absolute inset-0 bg-brand-accent/5 blur-2xl rounded-sm -z-10" />
            
            <h3 className="text-2xl font-bold text-white mb-6">Request an Estimate</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-brand-concrete uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors rounded-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-brand-concrete uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors rounded-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-brand-concrete uppercase tracking-wider">Project Type</label>
                <select className="w-full bg-transparent border border-white/10 text-brand-concrete px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors rounded-sm appearance-none cursor-pointer">
                  <option value="" disabled selected>Select a project type</option>
                  <option value="residential" className="bg-brand-gray text-white">Residential Construction</option>
                  <option value="commercial" className="bg-brand-gray text-white">Commercial Build</option>
                  <option value="renovation" className="bg-brand-gray text-white">Renovation/Remodeling</option>
                  <option value="interior" className="bg-brand-gray text-white">Interior Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-brand-concrete uppercase tracking-wider">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors rounded-sm resize-none"
                  placeholder="Tell us about your project, timeline, and budget..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-white text-brand-black hover:bg-brand-accent hover:text-white transition-all duration-300 font-medium py-4 rounded-sm flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
