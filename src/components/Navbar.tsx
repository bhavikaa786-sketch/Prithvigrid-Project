import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'glass-dark py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-[0.2em] text-white flex items-center gap-3 uppercase group">
          <span className="font-serif italic text-brand-gold group-hover:text-white transition-colors duration-500">P</span>
          <span className="hidden sm:inline font-light">PrithviGrid</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-gold ${
                location.pathname === link.path ? 'text-brand-gold' : 'text-brand-light/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-8 py-3 border border-brand-white/20 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-white hover:text-brand-black transition-all duration-500"
          >
            Inquire
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col justify-center items-center gap-8 lg:hidden"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <Link to="/" className="text-sm tracking-[0.3em] uppercase text-brand-gold mb-12">PrithviGrid</Link>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-serif italic text-white hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-8 px-12 py-4 border border-brand-gold text-brand-gold uppercase tracking-[0.2em] text-xs hover:bg-brand-gold hover:text-brand-black transition-all"
            >
              Inquire Now
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
