import React from 'react';
import { FaChevronRight, FaCertificate, FaBrush, FaHistory, FaShippingFast, FaQuoteLeft, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cover from '../../Assets/CoverPhoto.jpeg';
import Artifact1 from '../../Assets/11.png';
import Artifact2 from '../../Assets/11.png';
import Artifact3 from '../../Assets/11.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Cover})` }} // Use imported image here
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Timeless Artifacts, Eternal Legacy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 italic">
            Curators of history's most exquisite treasures since 1952
          </p>
          <Link 
            to="/collection" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center transition-colors"
          >
            Explore Collection <FaChevronRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-amber-800 text-center mb-12">Why Collectors Trust Us</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {icon: <FaCertificate />, title: "Expert Authentication", text: "Multi-stage verification process with leading historians"},
              {icon: <FaBrush />, title: "Museum Conservation", text: "Traditional restoration techniques by master craftsmen"},
              {icon: <FaHistory />, title: "Provenance Research", text: "Comprehensive historical documentation for every artifact"},
              {icon: <FaShippingFast/>, title : "Secure Shipping", text: "Climate-controlled transportation with real-time tracking"},
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl text-amber-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-serif text-amber-800 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Artifacts Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-amber-800 text-center mb-12">Featured Artifacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {image: Artifact1, title: "Ancient Relic", description: "A rare artifact from the Bronze Age"},
              {image: Artifact2, title: "Medieval Manuscript", description: "A beautifully preserved manuscript from the 12th century"},
              {image: Artifact3, title: "Renaissance Sculpture", description: "An exquisite marble sculpture from the Renaissance period"},
            ].map((artifact, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img src={artifact.image} alt={artifact.title} className="w-full h-64 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-amber-800 mb-2">{artifact.title}</h3>
                  <p className="text-gray-700">{artifact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-amber-800 text-center mb-12">What Our Collectors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {quote: "The authenticity and quality of the artifacts are unparalleled. A truly trustworthy source.", author: "John Doe"},
              {quote: "The team's expertise and attention to detail are remarkable. Highly recommended!", author: "Jane Smith"},
              {quote: "An exceptional experience from start to finish. The provenance research is impeccable.", author: "Michael Brown"},
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <FaQuoteLeft className="text-4xl text-amber-600 mb-4"/>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-amber-800 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-amber-800 text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {date: "2023-10-15", title: "Ancient Civilizations Exhibition", description: "Explore artifacts from ancient Egypt, Greece, and Rome"},
              {date: "2023-11-05", title: "Medieval Manuscripts Workshop", description: "Learn about the art of manuscript preservation"},
              {date: "2023-12-01", title: "Renaissance Art Symposium", description: "A deep dive into the art and culture of the Renaissance"},
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FaCalendarAlt className="text-2xl text-amber-600 mr-2"/>
                    <p className="text-gray-700">{event.date}</p>
                  </div>
                  <h3 className="text-xl font-serif text-amber-800 mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif mb-6">Join Our Collector's Circle</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">
            Receive exclusive updates on new acquisitions, private viewings, and expert insights
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;