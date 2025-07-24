import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';
import { FaUser, FaCalendar, FaShare } from 'react-icons/fa';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <div>Blog post not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blog.image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white px-4 max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span className="flex items-center">
                <FaUser className="mr-2" />
                {blog.author}
              </span>
              <span className="flex items-center">
                <FaCalendar className="mr-2" />
                {blog.date}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {blog.content}
            </p>
            {/* Add more content sections as needed */}
          </div>

          {/* Share Section */}
          <div className="border-t pt-6 mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Share this article</h3>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-blue-600">
                  <FaShare />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}