import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

export default function Destinations() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Discover Amazing Places
          </motion.h1>
          <div className="w-full max-w-2xl">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full py-3 pl-12 pr-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <FaMapMarkerAlt className="mr-1" />
                  {destination.name.split(',')[1]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Best Time: {destination.bestTimeToVisit}</span>
                  <Link
                    to={`/destinations/${destination.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}