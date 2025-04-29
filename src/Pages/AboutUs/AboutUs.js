import React from "react";
import { FaHistory,FaBookOpen} from "react-icons/fa";
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
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${CoverImg})` }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
          Our environment is an inimitable creation of mother nature</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          ” Our Experts build shiel to safeguard you from contamination “
          </p>
          <Link to='/an-appointment'>
          <button onClick={handleScrolle} className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
            Request Site Assessment
          </button></Link>
          
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-amber-800 mb-6">We Shield to Yield, a Radiation risk-free Environment</h2>
          <h4 className="text-xl font-semibold">Step ahead with Global Stars and let our earth stay “Alive and Kicking”</h4>
          <p className="">
          The world is spinning too fast and is undoubtedly heading towards a global revolution in the field of science and technology. This death-or-glory race is leading to an increase in the amount of pollution and radiation. Today, every nook and cranny is exposed to radiation. As a result, the chances of irreversible radiation damage to both human beings and environment cannot be ruled out. Radiation safety and protection is the need of the hour.“Global Stars” means something that shrouds you in, for safety. We strive to save you and your loved ones from radiation hazards. We are one among the world’s top-notch radiation service providers. Now we are looking forward to carve out a niche in the global scenario.
          </p>
          <br/>
          <p>We are one of the pioneers in field of radiation safety and protection services. Our team of experts, operating in India are committed to AERB radiation safety norms and follow proper guidelines. Our professionals use exclusive and upgraded equipment like Radiation Safety Jackets, Thyroid Collars, Radiation Monitors, TLD Badges, Radiation Survey Meters, GM Counters, etc. Evidently, our quality tested tools and techniques are the safest resort to handle radiation risks.</p>
          <p>Our five-fold approach and outstanding services ensure radiation safety. We help corresponding industries to nourish and flourish without disturbing the ecological balance. We work upon measures to keep the environment healthy and happy. Remember, Love your planet because it loves you back.</p>
        </div>

        {/* Core Values */}
        <div className=" gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaHistory className="text-amber-600 mt-1 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">
                Our Mission:
                </h3>
                <p className="text-gray-700">
                We strive to save the environment from ionizing radiation hazards.Our mission is to offer one-stop solution to radiation safety services across the country.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaBookOpen className="text-amber-600 mt-1 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">
                Our Values:
                </h3>
                <p className="text-gray-700">
                Global Stars values your trust and never compromises on radiation safety. We conduct authentic testing via trusted equipment. For best results the sessions are also conducted with stakeholders and investors.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaBookOpen className="text-amber-600 mt-1 text-2xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">
                Our Commitment:
                </h3>
                <p>We devote our high quality services to let the nation be free of radiation risks. In addition, we assist several organisations for smooth running of business. Our forte is Radiation safety and protection services. We also provide assistance in the following spheres.</p>
                <br/>
                <p className="text-gray-700">   
We devote our high quality services to let the nation be free of radiation risks. In addition, we assist several organisations for smooth running of business. Our forte is Radiation safety and protection services. We also provide assistance in the following spheres.
                </p>
              </div>
            </div>
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


        {/* Expertise Section */}
       
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
