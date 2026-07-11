import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    project_type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.project_type || !formData.message) {
      alert('Please fill out all fields before sending your inquiry.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const sheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    if (!sheetsUrl || sheetsUrl === 'your_google_sheets_web_app_url') {
      console.warn('Google Sheets Web App URL not configured. Simulating successful submit in development.');
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
          from_name: '',
          from_email: '',
          project_type: '',
          message: '',
        });
      }, 1500);
      return;
    }

    try {
      // POST form data as JSON to Google Sheets web app
      // Using 'cors' with a simple Content-Type (text/plain) avoids preflight OPTIONS requests,
      // while allowing mobile browsers (like iOS Safari) to successfully follow cross-origin redirects.
      await fetch(sheetsUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus('success');
      setFormData({
        from_name: '',
        from_email: '',
        project_type: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to submit form to Google Sheets:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[var(--background)] min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F4A300] text-[10px] uppercase tracking-[0.4em] mb-4 block font-semibold"
          >
            Inquire
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-serif text-[#1C1A17] uppercase tracking-wider"
          >
            Start Your <span className="italic text-[#F4A300] lowercase font-normal">commission</span>
          </motion.h1>
        </div>

        <div className="w-full h-[1px] bg-gray-200 mb-16" />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Inquiry Form Card (White Container) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-[#ffffff] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 flex flex-col justify-between"
          >
            <form ref={formRef} className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#A87B51] font-bold">Full Name</label>
                  <input 
                    type="text" 
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 text-[#1C1A17] py-3 focus:outline-none focus:border-[#A87B51] transition-colors font-light text-lg"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#A87B51] font-bold">Email Address</label>
                  <input 
                    type="email" 
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 text-[#1C1A17] py-3 focus:outline-none focus:border-[#A87B51] transition-colors font-light text-lg"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#A87B51] font-bold">Project Type</label>
                <div className="relative">
                  <select 
                    name="project_type"
                    value={formData.project_type}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 text-[#1C1A17] py-3 focus:outline-none focus:border-[#A87B51] transition-colors font-light text-lg appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#ffffff] text-gray-400">Select a service</option>
                    <option value="residential" className="bg-[#ffffff] text-[#1C1A17]">Residential House Construction</option>
                    <option value="renovation" className="bg-[#ffffff] text-[#1C1A17]">Home Renovation & Remodelling</option>
                    <option value="interior" className="bg-[#ffffff] text-[#1C1A17]">3D Design & Interior Architecture</option>
                    <option value="commercial" className="bg-[#ffffff] text-[#1C1A17]">Commercial Workspace Construction</option>
                  </select>
                  <div className="absolute right-2 top-4 pointer-events-none text-gray-400">
                    ▼
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#A87B51] font-bold">Project Vision</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-200 text-[#1C1A17] py-3 focus:outline-none focus:border-[#A87B51] transition-colors font-light text-lg resize-none"
                  placeholder="Tell us about your requirements (e.g., plot size, number of floors, city location, preferred start date)..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 bg-[#fbfbfa] border border-[#A87B51]/20 rounded-2xl text-sm text-[#1C1A17] font-light leading-relaxed"
                >
                  <span className="font-serif text-[#A87B51] font-bold block mb-1 uppercase tracking-wider text-xs">Inquiry Sent Successfully</span>
                  Thank you. Our curators will review your vision and connect with you shortly.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 bg-[#fdfafb] border border-red-200 rounded-2xl text-sm text-red-800 font-light leading-relaxed"
                >
                  <span className="font-serif text-red-900 font-bold block mb-1 uppercase tracking-wider text-xs">Unable to Send Message</span>
                  An error occurred while sending. Please try again or write to us at <a href="mailto:hello@prithvigrid.com" className="underline font-normal">hello@prithvigrid.com</a>.
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="group px-10 py-4 bg-[var(--foreground)] text-[var(--background)] border border-[var(--foreground)] text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-transparent hover:text-[var(--foreground)] transition-all duration-500 font-medium inline-flex items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details Card (Deep Blue Container) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 bg-[#0B3C5D] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[500px]"
          >
            {/* Subtle background overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            
            <div className="relative z-10 space-y-12">
              <div>
                <span className="text-[#F4A300] text-[10px] uppercase tracking-[0.4em] mb-6 block font-semibold">Global Studio</span>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#F4A300] flex-shrink-0 mt-1" size={18} />
                    <p className="text-gray-200 text-base font-light leading-relaxed">
                      Level 42, The Landmark Building<br />
                      Connaught Place, New Delhi<br />
                      India, 110001
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-[#F4A300] flex-shrink-0" size={18} />
                    <p className="text-gray-200 text-base font-light">hello@prithvigrid.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-[#F4A300] flex-shrink-0" size={18} />
                    <p className="text-gray-200 text-base font-light">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 border-t border-white/10 pt-8 mt-12">
              <span className="text-[#F4A300] text-[10px] uppercase tracking-[0.4em] mb-4 block font-semibold">Social Connection</span>
              <div className="flex gap-8">
                {['LinkedIn', 'Instagram', 'Twitter'].map((s) => (
                  <a key={s} href="#" className="text-[11px] uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-colors">{s}</a>
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
