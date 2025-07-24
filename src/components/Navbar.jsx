import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiBell, FiMenu, FiX, FiUser, FiSearch, FiHome, FiMap, FiBook, FiInfo, FiPhone } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "Destinations", path: "/destinations", icon: FiMap },
    { name: "Blogs", path: "/blogs", icon: FiBook },
    { name: "About", path: "/about", icon: FiInfo },
    { name: "Contact", path: "/contact", icon: FiPhone }
  ];

  return (
    <nav className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors duration-300 flex items-center ${scrolled ? 'text-blue-600' : 'text-white'}`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <span className="bg-blue-600 text-white p-1 rounded-md mr-2">TG</span>
              TravelGuide
            </motion.div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 flex items-center ${
                  location.pathname === link.path 
                    ? 'text-blue-600' 
                    : scrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-200'
                }`}
              >
                <SafeIcon icon={link.icon} className="mr-1" />
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-2">
            <button className={`p-2 rounded-full transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
              <SafeIcon icon={FiSearch} />
            </button>
            <button className={`p-2 rounded-full transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
              <SafeIcon icon={FiBell} />
            </button>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
              <SafeIcon icon={FiUser} className="mr-1" />
              Login
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <SafeIcon icon={FiX} size={24} /> : <SafeIcon icon={FiMenu} size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  } flex items-center`}
                >
                  <SafeIcon icon={link.icon} className="mr-2" />
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 my-2 pt-2">
                <Link
                  to="/login"
                  className="block px-3 py-2 bg-blue-600 text-white rounded-md flex items-center"
                >
                  <SafeIcon icon={FiUser} className="mr-2" />
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}