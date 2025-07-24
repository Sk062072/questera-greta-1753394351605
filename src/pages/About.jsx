import { motion } from 'framer-motion';
import { FaGlobe, FaUsers, FaHeart } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl">Helping travelers explore the world with confidence and excitement</p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At TravelGuide, we believe that travel has the power to transform lives and create lasting memories. 
            Our mission is to inspire and empower travelers to explore the world with confidence, providing them 
            with authentic insights and practical guidance for their journeys.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaGlobe className="text-5xl text-blue-600 mb-4" />,
              title: "Global Perspective",
              description: "We bring you insights from every corner of the world, celebrating diversity and cultural exchange."
            },
            {
              icon: <FaUsers className="text-5xl text-blue-600 mb-4" />,
              title: "Community First",
              description: "Our community of travelers helps each other grow and share authentic experiences."
            },
            {
              icon: <FaHeart className="text-5xl text-blue-600 mb-4" />,
              title: "Passion for Travel",
              description: "We're driven by our love for exploration and adventure, sharing that passion with our users."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              {value.icon}
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mark Thompson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              },
              {
                name: "Sarah Chen",
                role: "Travel Expert",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              },
              {
                name: "David Miller",
                role: "Content Director",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}