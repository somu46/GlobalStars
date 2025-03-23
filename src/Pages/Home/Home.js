import React from 'react';
import { FaChevronRight, FaCertificate, FaBrush, FaHistory, FaShippingFast, FaQuoteLeft, FaUserGraduate, FaMicroscope, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Cover from '../../Assets/CoverPhoto.jpeg';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Cover})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Timeless Artifacts, Eternal Legacy
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Curators of history's most exquisite treasures since 1952
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/our-collections" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center transition-colors"
            >
              Explore Collection <FaChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <motion.div 
        className="bg-amber-100 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif text-amber-800 text-center mb-12"
            variants={fadeInUp}
          >
            Why Collectors Trust Us
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {icon: <FaCertificate />, title: "Expert Authentication", text: "Multi-stage verification process with leading historians"},
              {icon: <FaBrush />, title: "Museum Conservation", text: "Traditional restoration techniques by master craftsmen"},
              {icon: <FaHistory />, title: "Provenance Research", text: "Comprehensive historical documentation for every artifact"},
              {icon: <FaShippingFast/>, title : "Secure Shipping", text: "Climate-controlled transportation with real-time tracking"},
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="text-4xl text-amber-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-serif text-amber-800 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif text-amber-800 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-gray-700 text-lg leading-relaxed"
              variants={fadeInUp}
            >
              <p className="mb-4">
                Founded in 1952, we have been dedicated to preserving and showcasing the world's most exquisite historical artifacts. Our mission is to bridge the past and present by bringing timeless treasures to collectors and enthusiasts worldwide.
              </p>
              <p className="mb-4">
                With a team of expert historians, conservators, and researchers, we ensure that every artifact in our collection is authenticated, preserved, and documented to the highest standards.
              </p>
              <Link 
                to="/about-us" 
                className="text-amber-600 hover:text-amber-700 font-semibold underline"
              >
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg"
              variants={fadeInUp}
            >
              <img 
                src={Cover} 
                alt="Our Story" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Meet Our Experts Section */}
      <div className="py-16 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif text-amber-800 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            Meet Our Experts
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {[
              {icon: <FaUserGraduate />, name: "Dr. Emily Carter", role: "Lead Historian", bio: "Specializes in ancient civilizations and artifact authentication."},
              {icon: <FaMicroscope />, name: "James Thompson", role: "Conservation Specialist", bio: "Expert in traditional restoration techniques."},
              {icon: <FaBook />, name: "Sarah Mitchell", role: "Provenance Researcher", bio: "Dedicated to uncovering the history behind every artifact."},
            ].map((expert, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
                variants={fadeInUp}
              >
                <div className="text-4xl text-amber-600 mb-4 flex justify-center">
                  {expert.icon}
                </div>
                <h3 className="text-xl font-serif text-amber-800 mb-2">{expert.name}</h3>
                <p className="text-gray-700 mb-2"><strong>{expert.role}</strong></p>
                <p className="text-gray-700">{expert.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <motion.div 
        className="bg-amber-100 py-16"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif text-amber-800 text-center mb-12"
            variants={fadeInUp}
          >
            What Our Collectors Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {quote: "The authenticity and quality of the artifacts are unparalleled. A truly trustworthy source.", author: "John Doe"},
              {quote: "The team's expertise and attention to detail are remarkable. Highly recommended!", author: "Jane Smith"},
              {quote: "An exceptional experience from start to finish. The provenance research is impeccable.", author: "Michael Brown"},
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <FaQuoteLeft className="text-4xl text-amber-600 mb-4"/>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-amber-800 font-semibold">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;