import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] border-t border-brand-white/5 pt-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top: Centered Logo & Brand Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-light tracking-[0.3em] text-[#000000] uppercase font-sans">
              PrithviGrid
            </span>
          </Link>
        </div>

        {/* Elegant Separator Line */}
        <div className="w-full h-[1px] bg-brand-white/5 mb-16" />

        {/* Bottom: Information Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left">
          
          {/* Column 1: Contact Us & Address */}
          <div className="space-y-10">
            <div>
              <h4 className="text-[13px] uppercase tracking-[0.25em] text-[#000000] mb-4 font-semibold">Contact Us</h4>
              <ul className="space-y-2 text-sm text-brand-concrete uppercase tracking-wide font-light">
                <li>+91 98765 43210</li>
                <li>
                  <a href="mailto:hello@prithvigrid.com" className="hover:text-brand-gold transition-colors normal-case">
                    hello@prithvigrid.com
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[13px] uppercase tracking-[0.25em] text-[#000000] mb-4 font-semibold">Address</h4>
              <p className="text-sm text-brand-concrete uppercase tracking-wide font-light leading-relaxed">
                <span className="font-bold text-[#000000]">PrithviGrid Architects</span><br />
                <span className="text-xs text-brand-concrete/70 font-light block mb-2 font-sans normal-case">(A Unit of PrithviGrid Operations Pvt. Ltd.)</span>
                Level 42, The Landmark Building<br />
                Connaught Place, New Delhi<br />
                India, 110001
              </p>
            </div>
          </div>

          {/* Column 2: Opening Hours */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.25em] text-[#000000] mb-4 font-semibold">Opening Hours</h4>
            <div className="text-sm text-brand-concrete uppercase tracking-wide font-light space-y-5">
              <div>
                <p className="font-semibold text-[#000000]">Monday – Friday</p>
                <p className="text-gray-500 mt-1 font-sans">09:00 AM – 06:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#000000]">Saturday – Sunday</p>
                <p className="text-gray-500 mt-1 font-sans">10:00 AM – 04:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 3: Find Us (Map) */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.25em] text-[#000000] mb-4 font-semibold">Find Us</h4>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=The+Landmark+Building+Connaught+Place+New+Delhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200/50 shadow-md group mt-2"
            >
              <img 
                src="/map_preview.png" 
                alt="Connaught Place Map Preview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0B3C5D]/10 group-hover:bg-[#0B3C5D]/20 transition-colors flex items-center justify-center">
                <span className="px-4 py-2 bg-[#ffffff] text-[#0B3C5D] text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-md flex items-center gap-1 transition-all duration-300 group-hover:scale-105">
                  Open in Maps ↗
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0B3C5D]">
        <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#ffffff]">
            © {new Date().getFullYear()} PrithviGrid. Architectural Excellence.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-[#ffffff]/80 hover:text-white uppercase tracking-[0.2em] transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-[#ffffff]/80 hover:text-white uppercase tracking-[0.2em] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
