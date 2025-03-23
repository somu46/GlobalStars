import React from 'react'
import CoverImg from '../../Assets/LandRem.jpeg'
import { Link } from 'react-router-dom'

const LandRem = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${CoverImg})` }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Land Remediation Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Restoring ecosystems and transforming contaminated land into safe, usable spaces through advanced remediation technologies
          </p>
          <button className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
            Request Site Assessment
          </button>
          <div className="mt-12">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3079/3079155.png" 
              alt="Environmental Recovery" 
              className="w-32 h-32 mx-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Key Services */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Remediation Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {icon: '☣️', title: 'Contaminant Removal', desc: 'Soil & groundwater purification'},
            {icon: '📝', title: 'Site Assessment', desc: 'Comprehensive contamination analysis'},
            {icon: '🔬', title: 'Bioremediation', desc: 'Microbial treatment solutions'},
            {icon: '🛡️', title: 'Risk Management', desc: 'Exposure prevention strategies'},
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1067/1067555.png" 
              alt="Eco Recovery" 
              className="w-full h-64 object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Sustainable Land Recovery</h2>
            <ul className="space-y-6">
              {[
                'Heavy metal contamination treatment',
                'Petroleum hydrocarbon cleanup',
                'Agricultural land restoration',
                'Industrial site rehabilitation',
                'Brownfield redevelopment',
                'Ecological impact assessment'
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

      {/* Process Timeline */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Remediation Process</h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 relative">
          {[
            {step: '1', title: 'Site Investigation', desc: 'Comprehensive analysis'},
            {step: '2', title: 'Risk Assessment', desc: 'Contaminant evaluation'},
            {step: '3', title: 'Treatment Plan', desc: 'Customized solutions'},
            {step: '4', title: 'Implementation', desc: 'Remediation execution'},
            {step: '5', title: 'Verification', desc: 'Post-treatment validation'}
          ].map((stage, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                {stage.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
              <p className="text-gray-600 text-sm">{stage.desc}</p>
              {index < 4 && (
                <div className="hidden md:block absolute top-6 right-[-45%] w-24 border-t-2 border-dashed border-gray-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Advanced Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Chemical Oxidation',
              'Thermal Treatment',
              'Soil Washing',
              'Phytoremediation',
              'Nanoremediation',
              'Electrokinetics',
              'Permeable Barriers',
              'Vapor Extraction'
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
          <h2 className="text-3xl font-bold mb-6">Reclaim Your Land Today</h2>
          <p className="text-gray-300 mb-8 text-lg">Contact our environmental specialists for sustainable remediation solutions</p>
          <Link to='/an-appointment'>
          <button
          onClick={()=>window.scrollTo(0,0)}
          className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Start Land Recovery
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandRem