import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] border-t border-brand-white/5 pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Logo & Vision */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="text-xl font-bold tracking-[0.2em] text-[#000000] uppercase flex items-center gap-3">
              <span className="font-serif italic text-brand-gold">P</span>
              <span className="font-light">PrithviGrid</span>
            </Link>
            <p className="text-brand-concrete text-sm leading-relaxed max-w-sm font-light">
              Architectural excellence through the lens of atmospheric atmospheres and structural precision.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#000000] mb-8 font-semibold">Explore</h4>
              <ul className="space-y-4">
                {['Selected Works', 'The Process', 'Journal', 'Inquire'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-[11px] text-brand-concrete hover:text-brand-gold transition-colors uppercase tracking-[0.1em]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#000000] mb-8 font-semibold">Connect</h4>
              <ul className="space-y-4">
                {['LinkedIn', 'Instagram', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-[11px] text-brand-concrete hover:text-brand-gold transition-colors uppercase tracking-[0.1em]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#000000] mb-8 font-semibold">Legal</h4>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-[11px] text-brand-concrete hover:text-brand-gold transition-colors uppercase tracking-[0.1em]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0B3C5D]">
        <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#ffffff]">
            © {new Date().getFullYear()} PrithviGrid. Architectural Excellence.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-[#ffffff] uppercase tracking-[0.2em]">A</span>
            <span className="text-[10px] text-[#ffffff] uppercase tracking-[0.2em]">D</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
