import React from 'react';
import { FaChevronRight, FaCertificate, FaBrush, FaHistory, FaShippingFast } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cover from '../../Assets/CoverPhoto.jpeg';

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

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif text-amber-800 text-center mb-12">Explore Eras</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Victorian', 'Art Deco', 'Ming Dynasty'].map((era, index) => (
            <div 
              key={index}
              className="relative h-96 rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity group-hover:opacity-20"></div>
              <img 
                src={`https://source.unsplash.com/random/800x600?${era}`}
                alt={era}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">{era}</h3>
                <button className="flex items-center text-amber-300 hover:text-amber-100">
                  View Collection <FaChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
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

      {/* Featured Collection */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif text-amber-800 text-center mb-12">Current Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img 
                src={`https://source.unsplash.com/random/600x800?antique${item}`}
                alt="Antique item"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg text-amber-800 mb-2">19th Century French Ormolu Clock</h3>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">$24,500</span>
                  <button className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg hover:bg-amber-200 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
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