
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bikerDark text-bikerCream">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display mb-4 uppercase">Biker Jim's <span className="text-bikerRed">Dogs</span></h3>
            <p className="mb-4">
              Gourmet wild game hot dogs with a rebellious spirit. Elevating street food to culinary art since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-bikerRed transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-bikerRed transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-bikerRed transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-display mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-bikerRed transition-colors">Home</Link></li>
              <li><Link to="/our-story" className="hover:text-bikerRed transition-colors">Our Story</Link></li>
              <li><Link to="/menu" className="hover:text-bikerRed transition-colors">Menu</Link></li>
              <li><Link to="/catering" className="hover:text-bikerRed transition-colors">Catering</Link></li>
              <li><Link to="/find-us" className="hover:text-bikerRed transition-colors">Find Us</Link></li>
              <li><Link to="/contact" className="hover:text-bikerRed transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-display mb-4 uppercase">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-bikerRed flex-shrink-0 mt-1" />
                <span>Denver, CO 80205</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-bikerRed flex-shrink-0" />
                <span>(720) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-bikerRed flex-shrink-0" />
                <span>info@bikerjimsdogs.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-display mb-4 uppercase">Hours</h4>
            <ul className="space-y-2">
              <li><span className="font-semibold">Monday - Thursday:</span> 11am - 10pm</li>
              <li><span className="font-semibold">Friday - Saturday:</span> 11am - 2am</li>
              <li><span className="font-semibold">Sunday:</span> 11am - 9pm</li>
              <li className="mt-4 pt-2 border-t border-gray-700">
                <Link to="/catering" className="button-primary text-sm px-4 py-2">Book Catering</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {currentYear} Biker Jim's Dogs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
