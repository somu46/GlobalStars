import React from 'react'
import CoverImg from '../../Assets/RadiationSafety.jpeg'
import { Link } from 'react-router-dom'

const RadiationSafety = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${CoverImg})` }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Radiation Safety Solutions</h1>
          <p className="text-xl mb-8">Protecting People and Environment Through Advanced Radiation Safety Measures</p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Get Started
          </button>
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Safety Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {icon: '🛡️', title: 'Radiation Monitoring', desc: '24/7 real-time monitoring systems with advanced sensors'},
            {icon: '📊', title: 'Risk Assessment', desc: 'Comprehensive analysis and predictive risk modeling'},
            {icon: '🧪', title: 'Material Analysis', desc: 'Advanced testing of radioactive materials and waste'},
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Radiation Protection</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Personal dosimetry services</li>
                <li>Radiation shielding design</li>
                <li>Contamination control systems</li>
                <li>Emergency response planning</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Safety Training</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Radiation safety officer training</li>
                <li>ALARA principles implementation</li>
                <li>Regulatory compliance workshops</li>
                <li>Emergency procedure drills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Protocol */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-gradient-to-br from-blue-700 to-cyan-600 text-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-8">Safety Protocols</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              {[
                'Radiation exposure monitoring',
                'Containment system checks',
                'Waste management protocols',
                'Emergency shutdown procedures'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1998/1998664.png" 
                alt="Safety Shield" 
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Start Your Safety Journey Today</h2>
          <p className="text-gray-300 mb-8">Contact our experts for a comprehensive radiation safety assessment</p>
          <Link to='/an-appointment'>
          <button className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors">
            Schedule Consultation
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RadiationSafety