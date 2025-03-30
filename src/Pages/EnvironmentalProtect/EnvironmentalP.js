import React from 'react'
import CoverImg from '../../Assets/EVP.jpeg'
import { Link } from 'react-router-dom'

const EnvironmentalP = () => {

  const handleScrolle = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${CoverImg})` }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Environmental Protection Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Preserving ecosystems through sustainable solutions and advanced environmental management
          </p>
          <Link to='/an-appointment'>
          <button onClick={handleScrolle} className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
            Start Conservation Plan
          </button></Link>
        </div>
      </div>

      {/* Key Services */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Protection Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {icon: '🌳', title: 'Ecosystem Preservation', desc: 'Biodiversity conservation programs'},
            {icon: '💧', title: 'Water Resource Management', desc: 'Watershed protection & treatment'},
            {icon: '🌎', title: 'Climate Solutions', desc: 'Carbon footprint reduction strategies'},
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3079/3079155.png" 
              alt="Eco Protection" 
              className="w-full h-64 object-contain"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Comprehensive Environmental Care</h2>
            <ul className="space-y-6">
              {[
                'Pollution control systems',
                'Waste management solutions',
                'Environmental impact assessments',
                'Air quality monitoring',
                'Soil conservation programs',
                'Sustainable resource planning'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-emerald-600 text-white rounded-full p-1.5 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Protection Methodology</h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {[
            {step: '1', title: 'Assessment', desc: 'Environmental analysis'},
            {step: '2', title: 'Planning', desc: 'Strategy development'},
            {step: '3', title: 'Implementation', desc: 'Solution deployment'},
            {step: '4', title: 'Monitoring', desc: 'Continuous evaluation'}
          ].map((stage, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {stage.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
              <p className="text-gray-600">{stage.desc}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 right-[-55%] w-16 border-t-2 border-dashed border-gray-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Innovative Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Bioremediation',
              'AI Monitoring',
              'Solar Treatment',
              'Biofiltration',
              'Nanotech Solutions',
              'IoT Sensors',
              'Drone Mapping',
              'Eco-Coatings'
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Protect Our Planet Together</h2>
          <p className="text-gray-300 mb-8 text-lg">Join our mission for sustainable environmental stewardship</p>
          <div className="flex justify-center gap-4">
            <Link to='/an-appointment'>
            <button className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Contact Experts
            </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

{/* Copied*/}
<div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
  {/* What is Land Remediation? */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Environmental Protection?</h2>
      <p className="text-gray-600 leading-relaxed">
      Nature is a unique creation of almighty. It is the government as well as our concern to safeguard our natural environment from the harmful impact of radiation waste products.The practice of protecting the atmosphere from the harmful influence is typically known as Environmental Protection. This act is extremely beneficial for both the living beings and environment.      </p>
    </div>
  </div>

  {/* Main Causes of Land Contamination */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Environmental Protection is Crucial?</h2>
      <p><b>Best way to protect the creations of mother nature</b></p>
      <p>Due to the excessive pressure of population, technology, and over-consumption, the biophysical environment is degrading drastically. Without a single doubt, the parameter of the pollution in the atmosphere is rising day by day. Thus, it is clearly recognized by every sphere of the government, private as well as public sector.</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Planting trees, afforestation is the sole key for protecting the environment
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Use of solar energy
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span>Minimize the use of fossil fuels via, petrol, coal etc.
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Using eco-friendly and biodegradable products
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Disposal of the waste products in an apposite manner
        </li>
        
      </ul>
    </div>
  </div>

  {/* Objectives of Our Land Remediation Service in India */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet the leading and well-known Environmental Protection Organization in India!</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
      We, at The Global Stars provide finest quality radioactive safety amenities to our users. We are government registered Organization and known for our litheness and reactivity. Our radiation protection service has successfully established its brand in India as well as across the borders. We support our environment and human lives to be risk-free from negative vibes of ionizing radiation. Our talented expertise works under the supervision of AERB and provides fruitful service to its clients. We humbly appreciate our client’s perspective that we are the well-known environmental protection service provider in India.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> We cover all ecological media & monitoring program
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Methodical planning
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span>Illustration supervision
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Statistics justification
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span>Provides shielding from the harmful waste of radioactive materials
        </li>
        
      </ul>
    </div>
  </div>



  {/* Why sky is our limit? */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Global Stars?</h2>
      <p>The Global Starshas emerged successfully as the topmost safety service provider in India. Our earnest agenda is to guard the atmosphere and human lives from the malicious vibes of ionizing radiation</p>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span>Notable advice on disposal of radioactive residual
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Plan and procedure of Rad survey
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Provide RPA and RWA facilities
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Take all the vital steps to safety & precautions
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Environmental bearing valuation
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default EnvironmentalP