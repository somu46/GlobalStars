import React from 'react';
import { 
  FaChevronRight, 
  FaShieldAlt, 
  FaBalanceScale, 
  FaLeaf, 
  FaSearch, 
  FaFlask,
  FaUserTie,
  FaMicroscope,
  FaFileAlt,
  FaQuoteLeft,
  FaMapMarkedAlt,
  FaWater,
  FaChartLine,
  FaIndustry
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Cover from '../../Assets/CoverPhoto.jpeg';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleScrolle = () => {
    window.scrollTo(0, 0);
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
            Environmental Excellence, Sustainable Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pioneering environmental consulting since 1995
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
              Explore Collections <FaChevronRight className="ml-2" />
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
            Why Clients Trust Us
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {icon: <FaShieldAlt />, title: "Regulatory Compliance", text: "Ensuring full adherence to environmental regulations"},
              {icon: <FaChartLine />, title: "Data-Driven Solutions", text: "Advanced analytics for measurable results"},
              {icon: <FaIndustry />, title: "Industry Expertise", text: "Specialized knowledge across multiple sectors"},
              {icon: <FaMapMarkedAlt />, title: "Site Assessment", text: "Comprehensive environmental site evaluations"},
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
                Founded in 1995, we have been at the forefront of environmental consulting, providing innovative solutions to complex environmental challenges. Our mission is to bridge the gap between industrial progress and environmental sustainability.
              </p>
              <p className="mb-4">
                With a team of expert environmental scientists, engineers, and legal specialists, we ensure that every project meets the highest standards of environmental compliance and sustainability.
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
                alt="Our Team in the Field" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif text-amber-800 text-center mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            Our Specialized Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            Comprehensive environmental and technical solutions
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Land Remediation",
                description: "Soil and groundwater contamination assessment and cleanup",
                icon: <FaLeaf className="text-3xl text-amber-600" />,
                link: "/land-remediation"
              },
              {
                title: "Radiation Safety",
                description: "Radiation protection services and safety consulting",
                icon: <FaShieldAlt className="text-3xl text-amber-600" />,
                link: "/radiation-safety-protection"
              },
              {
                title: "Litigation Support",
                description: "Expert witness services and technical documentation",
                icon: <FaBalanceScale className="text-3xl text-amber-600" />,
                link: "/litigation-support"
              },
              {
                title: "Environmental Protection",
                description: "Watershed management and water quality assessment",
                icon: <FaWater className="text-3xl text-amber-600" />,
                link: "/environmental-protection"
              },
              {
                title: "Boroscope Inspection",
                description: "Advanced visual inspection of facilities and equipment",
                icon: <FaSearch className="text-3xl text-amber-600" />,
                link: "/boroscope-inspection"
              },
              {
                title: "Testing And Analysis",
                description: "Comprehensive environmental testing services",
                icon: <FaFlask className="text-3xl text-amber-600" />,
                link: "/testing-analysis"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-amber-50 rounded-xl p-6 hover:shadow-lg transition-all border border-amber-100"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Link to={service.link} className="block" onClick={handleScrolle}>
                  <div className="flex items-start mb-4">
                    <div className="bg-amber-100 p-3 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-amber-800">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-amber-600 hover:text-amber-700 font-medium flex items-center mt-4">
                    Learn more <FaChevronRight className="ml-1 text-sm" />
                  </div>
                </Link>
              </motion.div>
            ))}
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
              {icon: <FaUserTie />, name: "Dr. Sarah Chen", role: "Lead Environmental Scientist", bio: "Specializes in ecological risk assessment and remediation."},
              {icon: <FaMicroscope />, name: "James Wilson", role: "Radiation Safety Officer", bio: "Expert in nuclear safety protocols and contamination control."},
              {icon: <FaFileAlt />, name: "Emily Rodriguez", role: "Regulatory Compliance Specialist", bio: "Dedicated to ensuring projects meet all environmental regulations."},
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
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {quote: "Their radiation safety protocols saved our project from costly delays. Exceptionally thorough.", author: "Michael Johnson, Energy Corp"},
              {quote: "The most reliable environmental consultants we've worked with. Data is always impeccable.", author: "Lisa Wong, Urban Developers"},
              {quote: "Turned our contaminated site into a development-ready property ahead of schedule.", author: "Robert Kline, Industrial Solutions"},
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