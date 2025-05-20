
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'Find Us', path: '/find-us' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 py-2",
        scrolled || isMenuOpen ? "bg-bikerDark shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="z-50">
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-display text-bikerCream uppercase tracking-wider">
              Biker Jim's <span className="text-bikerRed">Dogs</span>
            </span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "font-display uppercase tracking-wider text-lg hover:text-bikerRed transition-colors",
                    pathname === link.path ? "text-bikerRed" : "text-bikerCream"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-bikerCream hover:text-bikerRed z-50 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-bikerDark flex flex-col justify-center items-center transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
        )}
      >
        <nav>
          <ul className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "font-display uppercase text-2xl tracking-wider hover:text-bikerRed transition-colors",
                    pathname === link.path ? "text-bikerRed" : "text-bikerCream"
                  )}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
