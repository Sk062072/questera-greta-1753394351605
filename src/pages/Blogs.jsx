import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { FaUser, FaCalendar, FaArrowRight } from 'react-icons/fa';

export default function Blogs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Stories</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover inspiring stories and expert tips from fellow travelers
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <FaUser className="mr-2" />
                    {blog.author}
                  </span>
                  <span className="flex items-center">
                    <FaCalendar className="mr-2" />
                    {blog.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}