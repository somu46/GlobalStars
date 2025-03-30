import React from "react";
import { FaHistory,FaCertificate,FaSearch, FaBrush,FaBookOpen} from "react-icons/fa";
import CoverImg from "../../Assets/AboutUs.jpeg";
import Card from "../../Components/UiCom/card";
import { Link } from "react-router-dom";

const AboutUs = () => {

  const handleScrolle = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${CoverImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-serif mb-4">Timeless Treasures</h1>
          <p className="text-xl max-w-2xl mx-auto italic">
            Preserving the past, curating history's finest artifacts
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-amber-800 mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Established in 1952, Timeless Treasures has been a guardian of
            history, specializing in the acquisition and preservation of
            exceptional antiques. For three generations, our family has
            connected collectors with extraordinary pieces that whisper stories
            of bygone eras.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaHistory className="text-amber-600 mt-1 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">
                  Heritage Preservation
                </h3>
                <p className="text-gray-700">
                  Committed to maintaining historical integrity through
                  meticulous conservation practices
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaBookOpen className="text-amber-600 mt-1 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">
                  Historical Authentication
                </h3>
                <p className="text-gray-700">
                  Comprehensive provenance research and certification for every
                  artifact
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl border-4 border-amber-100">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Antique Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center ">
          <h2 className="text-3xl font-serif text-amber-800 ">
            Our Team
          </h2>
          <div className="flex flex-wrap flex-row gap-8 justify-center items-center">
            <Card/>
            
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-amber-800 mb-6">
            Why Collectors Trust Us
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            The distinguishing qualities that make us stewards of history
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-600">
            <FaCertificate className="text-4xl text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-amber-800">
              Expert Authentication
            </h3>
            <p className="text-gray-700">
              Multi-stage verification process with leading historians and
              appraisers
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-600">
            <FaSearch className="text-4xl text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-amber-800">
              Rare Finds
            </h3>
            <p className="text-gray-700">
              Access to exclusive private collections and estate acquisitions
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-600">
            <FaBrush className="text-4xl text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-amber-800">
              Conservation Services
            </h3>
            <p className="text-gray-700">
              Museum-grade restoration by master craftsmen using traditional
              techniques
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-amber-100 py-16 rounded-xl text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-amber-800">70+</div>
              <div className="text-sm uppercase tracking-wide text-gray-700">
                Years Experience
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-amber-800">15k+</div>
              <div className="text-sm uppercase tracking-wide text-gray-700">
                Artifacts Curated
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-amber-800">98%</div>
              <div className="text-sm uppercase tracking-wide text-gray-700">
                Accuracy Rate
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-amber-800">200+</div>
              <div className="text-sm uppercase tracking-wide text-gray-700">
                Era Specialists
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif mb-6">
            Discover Hidden Histories
          </h2>
          <p className="text-amber-100 mb-8 italic">
            "The charm of history and its enigmatic lesson consists in the fact
            that from age to age nothing changes and yet everything is
            completely different." - Aldous Huxley
          </p>
          <Link to='/our-collections' onClick={handleScrolle}>
          <button  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-amber-100">
            Explore Our Collections
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
