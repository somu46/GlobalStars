import React from 'react'
import CoverImg from '../../../Assets/LandRem.jpeg'
import { Link } from 'react-router-dom'

const LandRem = () => {
  const handleScrolle = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[32rem] bg-cover bg-center flex items-center justify-center bg-gray-900 bg-opacity-60 bg-blend-multiply" style={{ backgroundImage: `url(${CoverImg})` }}>
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our environment is an inimitable creation of mother nature
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto italic font-light">
            ” Our Experts build shield to safeguard you from contamination “
          </p>
          <Link to='/an-appointment'>
            <button 
              onClick={handleScrolle} 
              className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:scale-105 transform transition duration-300 text-lg"
            >
              Request Site Assessment
            </button>
          </Link>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* What is Land Remediation? */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="p-8 pl-12">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">What is Land Remediation?</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg pl-4 border-l-2 border-gray-200">
              Taking care of our environment today is the sustainable act for the generations of tomorrow. Land remediation service deals with an exclusive process of removing contaminant materials or particles from surface water, terrestrial, and sediments. This technique is performed for keeping the atmosphere pollution and radiation safe.The solemn criterion of our land remediation service in India is to protect all living beings and the mother nature from the damaging effects of land radiation.
            </p>
          </div>
        </div>

        {/* Main Causes of Land Contamination */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="p-8 pl-12">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Main Causes of Land Contamination</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4 border-l-2 border-gray-200">
              {[
                "Deforestation",
                "Mining & mineral's extraction",
                "Natural source (Cosmic rays and UV rays)",
                "Urbanization",
                "Man made radiation (Gamma & X-rays)",
                "Agriculture",
                "Industrial or Nuclear waste products"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Objectives of Our Land Remediation Service in India */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="p-8 pl-12">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Objectives of Our Land Remediation Service in India</h2>
            </div>
            <div className="space-y-6 text-gray-600 text-lg pl-4 border-l-2 border-gray-200">
              <p>
                We are The Change You Wish to see In the EnvironmentIt is our priority, whether public or private to provide full-fledged safety and security to the employees at the workplace. The employees working in the field of radiation exposure, during or after the remediation of contamination, the risk of health hazards is comparatively high. They are easily prone to life taking diseases like cancer, tumors, posterior subcapsular cataracts, hampers reproductive system, permanent hormonal disbalance and others.
              </p>
              <p>
                At Global Stars our expertise performs their crucial responsibilities as per AERB/BARC norms. Our well- certified and years experienced engineers, geologists and technician team serves you cost-effective services in India.
              </p>
              <p>
                The prime motto of our exclusive environmental or land remediation service in India is to minimize and detect the malicious source of ionizing radiation.
              </p>
            </div>
          </div>
        </div>

        {/* We are skilled at! */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="p-8 pl-12">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">We are skilled at!</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4 border-l-2 border-gray-200">
              {[
                "Land inspection and detection for ionizing radiation",
                "Provide occupational safety to the employees",
                "Land evaluation and survey",
                "Waste Management"
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why sky is our limit? */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-6 ">
          
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Why sky is our limit?</h2>
            </div>
            <div className="space-y-4 pl-4 border-l-2 border-gray-200">
              {[
                "We have emmerged successfully as the global leader in the industry of radiation protection. We serve our clients across the sea, via UK, USA, and Switzerland",
                "Technologically advanced devices and instruments are used",
                "AERB certified RSOs and highly qualified engineers, technicians & professionals",
                "An accredited Organization",
                "Always a step ahead to save environment from radiation & waste hazards",
                "Saves the client from legal troubles, related to environmental safety and security",
                "Assist in upholding the smooth run of ecological as well marine balance",
                "Detect and reduces the negative impact of radioactive materials",
                "Protect you and your beloved ones from the threat of cancer and other diseases"
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1 group-hover:bg-red-200 transition-colors">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-lg group-hover:text-gray-800 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default LandRem;