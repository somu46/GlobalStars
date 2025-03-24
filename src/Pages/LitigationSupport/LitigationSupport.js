import React from 'react'
import CoverImg from '../../Assets/LitigationSup.jpeg'
import { Link } from 'react-router-dom'

const LitigationSupport = () => {

  const handleScrolle = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${CoverImg})` }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Expert Litigation Support Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comprehensive legal consulting and technical expertise for complex litigation matters
          </p>
          <Link to='/an-appointment'>
          <button onClick={handleScrolle} className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
            Schedule Consultation
          </button></Link>
        </div>
      </div>

      {/* Key Services */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Litigation Support Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {icon: '⚖️', title: 'Expert Testimony', desc: 'Court-qualified experts across multiple technical disciplines'},
            {icon: '📑', title: 'Document Analysis', desc: 'Advanced discovery support & electronic document review'},
            {icon: '🔍', title: 'Case Strategy', desc: 'Technical consulting for litigation strategy development'},
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Highlights */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png" 
              alt="Legal Analysis" 
              className="w-full h-64 object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Our Services?</h2>
            <ul className="space-y-6">
              {[
                'Technical analysis of complex evidence',
                'Economic damage calculations',
                'Statistical modeling & data analysis',
                'Regulatory compliance evaluation',
                'Digital forensics & eDiscovery',
                'Industry-specific expert witnesses'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-indigo-600 text-white rounded-full p-1.5 mt-1">
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

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "Their expert analysis was instrumental in securing a favorable settlement in our complex IP litigation.",
              author: "Sarah Johnson, Partner at TechLaw LLP"
            },
            {
              quote: "The most thorough and reliable litigation consultants we've worked with in 15 years of practice.",
              author: "Michael Chen, General Counsel"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4 italic">" {testimonial.quote} "</p>
              <p className="font-semibold text-indigo-700">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Timeline */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            {[
              {step: '1', title: 'Case Consultation', desc: 'Initial case evaluation'},
              {step: '2', title: 'Evidence Analysis', desc: 'Technical review process'},
              {step: '3', title: 'Strategy Development', desc: 'Customized approach'},
              {step: '4', title: 'Trial Support', desc: 'Courtroom readiness'}
            ].map((stage, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
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
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Strengthen Your Legal Position</h2>
          <p className="text-gray-300 mb-8 text-lg">Contact us for a confidential case evaluation</p>
          <Link to='/an-appointment'>
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Request Case Review
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LitigationSupport