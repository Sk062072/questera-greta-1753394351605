import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SafeIcon from '../common/SafeIcon';
import { FiSearch, FiMapPin, FiCalendar, FiUsers, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const [activeBackground, setActiveBackground] = useState(0);
  
  const backgrounds = [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d"
  ];
  
  const titles = [
    "Explore the World",
    "Discover Paradise",
    "Unforgettable Adventures"
  ];
  
  const subtitles = [
    "Discover amazing destinations and create unforgettable memories",
    "Experience the beauty of nature and cultural wonders",
    "Journey to extraordinary places with expert guidance"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {backgrounds.map((bg, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === activeBackground ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          style={{ backgroundImage: `url('${bg}')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </motion.div>
      ))}
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="mt-16 px-4 max-w-4xl">
          {titles.map((title, index) => (
            <motion.h1
              key={`title-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === activeBackground ? 1 : 0, y: index === activeBackground ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
            >
              {title}
            </motion.h1>
          ))}
          
          {subtitles.map((subtitle, index) => (
            <motion.p
              key={`subtitle-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === activeBackground ? 1 : 0, y: index === activeBackground ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white"
            >
              {subtitle}
            </motion.p>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white rounded-lg shadow-xl p-4 md:p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <SafeIcon icon={FiMapPin} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="relative">
                <SafeIcon icon={FiCalendar} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="When?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="relative">
                <SafeIcon icon={FiUsers} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none bg-white">
                  <option value="">Travelers</option>
                  <option value="1">1 Traveler</option>
                  <option value="2">2 Travelers</option>
                  <option value="3">3 Travelers</option>
                  <option value="4">4+ Travelers</option>
                </select>
              </div>
              <Link
                to="/destinations"
                className="bg-blue-600 text-white rounded-lg py-3 px-6 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <SafeIcon icon={FiSearch} className="mr-2" />
                Search
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <Link
              to="/destinations"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
            >
              Explore Destinations
              <SafeIcon icon={FiArrowRight} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveBackground(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeBackground ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}