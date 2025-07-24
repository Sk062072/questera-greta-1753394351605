import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import { FiCalendar, FiInfo, FiHeart, FiShare2, FiChevronLeft, FiChevronRight, FiMapPin, FiAward } from 'react-icons/fi';

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === parseInt(id));
  
  // Initialize state regardless of destination
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  
  // If no destination found, return early
  if (!destination) return <div className="p-8 text-center">Destination not found</div>;
  
  // Additional images for the gallery
  const galleryImages = [
    destination.image,
    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    "https://images.unsplash.com/photo-1486299267070-83823f5448dd",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  ];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl font-bold mb-4">{destination.name}</h1>
            <p className="text-xl">{destination.shortDescription}</p>
            <div className="flex items-center justify-center mt-6">
              <button 
                className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition-colors"
                onClick={() => setShowLightbox(true)}
              >
                <SafeIcon icon={FiAward} className="mr-2" />
                View Gallery
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">About {destination.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{destination.description}</p>
              
              {/* Photo Gallery */}
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <SafeIcon icon={FiShare2} className="mr-2 text-blue-600" />
                Photo Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {galleryImages.map((img, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer relative overflow-hidden rounded-xl"
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setShowLightbox(true);
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`${destination.name} gallery ${index + 1}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                      <SafeIcon icon={FiShare2} className="text-white opacity-0 hover:opacity-100 text-2xl" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Additional Content */}
              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <SafeIcon icon={FiMapPin} className="mr-2 text-blue-600" />
                  Location Highlights
                </h3>
                <ul className="space-y-4">
                  {[
                    "Spectacular natural landscapes",
                    "Rich cultural heritage sites",
                    "Vibrant local markets",
                    "Authentic culinary experiences"
                  ].map((highlight, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-600 mr-3"></span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg p-8 sticky top-4"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <SafeIcon icon={FiCalendar} className="mr-2 text-blue-600" />
                  Best Time to Visit
                </h3>
                <p className="text-gray-700">{destination.bestTimeToVisit}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <SafeIcon icon={FiInfo} className="mr-2 text-blue-600" />
                  Travel Tips
                </h3>
                <ul className="space-y-3">
                  {destination.tips.map((tip, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-gray-700 flex items-start"
                    >
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      {tip}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="flex space-x-2">
                <button
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <SafeIcon icon={FiHeart} className="mr-2" />
                  Save
                </button>
                <button
                  className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <SafeIcon icon={FiShare2} className="mr-2" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Related Destinations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations
              .filter(d => d.id !== parseInt(id))
              .slice(0, 3)
              .map((relatedDest) => (
                <motion.div
                  key={relatedDest.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={relatedDest.image}
                    alt={relatedDest.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{relatedDest.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{relatedDest.shortDescription}</p>
                    <Link
                      to={`/destinations/${relatedDest.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center text-sm"
                    >
                      Explore
                      <SafeIcon icon={FiChevronRight} className="ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Lightbox Gallery */}
      {showLightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 text-white text-2xl z-10"
            >
              ×
            </button>
            
            <div className="relative">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full rounded-lg"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2"
              >
                <SafeIcon icon={FiChevronLeft} className="text-white text-2xl" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2"
              >
                <SafeIcon icon={FiChevronRight} className="text-white text-2xl" />
              </button>
            </div>
            
            <div className="text-white text-center mt-4">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}