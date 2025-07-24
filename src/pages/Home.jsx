import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { blogs } from '../data/blogs';
import { useState, useEffect } from 'react';
import SafeIcon from '../common/SafeIcon';
import { FiArrowRight, FiMapPin, FiStar, FiClock, FiCamera } from 'react-icons/fi';

export default function Home() {
  const [activeDestination, setActiveDestination] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDestination((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Featured Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Popular Destinations</h2>
            <Link to="/destinations" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium">
              View All <SafeIcon icon={FiArrowRight} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.slice(0, 3).map((destination, index) => (
              <motion.div 
                key={destination.id} 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm flex items-center">
                    <SafeIcon icon={FiMapPin} className="mr-1" />
                    {destination.name.split(',')[1]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center text-sm text-gray-500">
                      <SafeIcon icon={FiClock} className="mr-1" />
                      Best: {destination.bestTimeToVisit}
                    </span>
                    <Link 
                      to={`/destinations/${destination.id}`} 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      Explore <SafeIcon icon={FiArrowRight} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Travel With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the world with confidence, comfort and peace of mind with TravelGuide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: FiStar,
                title: "Handpicked Hotels",
                description: "We select the best accommodations for comfort and experience."
              },
              {
                icon: FiCamera,
                title: "Unforgettable Experiences",
                description: "Create memories that will last a lifetime."
              },
              {
                icon: FiMapPin,
                title: "Expert Guides",
                description: "Local experts to show you the hidden gems."
              },
              {
                icon: FiClock,
                title: "24/7 Support",
                description: "We're here for you whenever you need help."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <SafeIcon icon={feature.icon} className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Travel Stories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Travel Stories</h2>
            <Link to="/blogs" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium">
              View All <SafeIcon icon={FiArrowRight} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.slice(0, 2).map((blog, index) => (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-gray-500">{blog.author}</span>
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                    >
                      Read More <SafeIcon icon={FiArrowRight} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Get the latest travel tips, destination guides, and exclusive offers delivered straight to your inbox
            </p>
          </div>
          
          <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}