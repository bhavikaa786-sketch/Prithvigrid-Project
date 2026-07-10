/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/prithvilogo.png';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-[#ffffff] border-b-[4px] border-[#F4A300] ${isScrolled
          ? 'py-2 shadow-sm'
          : 'py-4'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="PrithviGrid Construction Logo"
            className={`transition-all duration-500 object-contain ${isScrolled ? 'h-16' : 'h-20'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:text-[#F4A300] ${location.pathname === link.path ? 'text-[#F4A300]' : 'text-[#000000]'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-8 py-2 border border-[#000000]/20 text-[#000000] text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-500"
          >
            Inquire
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="text-[#000000]"
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
              className="absolute top-8 right-8 text-[#000000] hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <Link to="/" className="mb-12" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={logo}
                alt="PrithviGrid Construction Logo"
                className="h-16 object-contain"
              />
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-serif italic transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-[#F4A300]' : 'text-[#000000] hover:text-[#F4A300]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-8 px-12 py-4 border border-[#000000] text-[#000000] uppercase tracking-[0.2em] text-xs rounded-full hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-500 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
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
