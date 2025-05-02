import React from 'react'
import CoverImg from '../../../Assets/EVP.jpeg'


const EnvironmentalP = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[20rem] bg-cover bg-center flex items-center justify-center bg-gray-900 bg-opacity-60 bg-blend-multiply" style={{ backgroundImage: `url(${CoverImg})` }}>
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
            Leading Environmental Protection Service will make our mother Earth risk-free from effluence Radiation !
          </h1>
          
          
        </div>
      </div>
{/* Copied*/}
<div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
  {/* Hero Section */}


  {/* What is Environmental Protection? */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-emerald-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">What is Environmental Protection?</h2>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg">
        Nature is a unique creation of almighty. It is the government as well as our concern to safeguard our natural environment from the harmful impact of radiation waste products. The practice of protecting the atmosphere from the harmful influence is typically known as Environmental Protection. This act is extremely beneficial for both the living beings and environment.
      </p>
    </div>
  </div>

  {/* Why Environmental Protection is Crucial */}
  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Why Environmental Protection is Crucial?</h2>
      </div>
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg font-medium">Best way to protect the creations of mother nature</p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Due to the excessive pressure of population, technology, and over-consumption, the biophysical environment is degrading drastically. Without a single doubt, the parameter of the pollution in the atmosphere is rising day by day. Thus, it is clearly recognized by every sphere of the government, private as well as public sector.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Planting trees, afforestation is the sole key for protecting the environment",
            "Use of solar energy",
            "Minimize the use of fossil fuels via, petrol, coal etc.",
            "Using eco-friendly and biodegradable products",
            "Disposal of the waste products in an apposite manner"
          ].map((item, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <span className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Leading Organization */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-amber-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Meet the leading and well-known Environmental Protection Organization in India!</h2>
      </div>
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed text-lg">
          We, at The Global Stars provide finest quality radioactive safety amenities to our users. We are government registered Organization and known for our litheness and reactivity. Our radiation protection service has successfully established its brand in India as well as across the borders. We support our environment and human lives to be risk-free from negative vibes of ionizing radiation. Our talented expertise works under the supervision of AERB and provides fruitful service to its clients. We humbly appreciate our client's perspective that we are the well-known environmental protection service provider in India.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "We cover all ecological media & monitoring program",
            "Methodical planning",
            "Illustration supervision",
            "Statistics justification",
            "Provides shielding from the harmful waste of radioactive materials"
          ].map((item, index) => (
            <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
              <span className="text-amber-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Why Global Stars? */}
  <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Why Global Stars?</h2>
      </div>
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg">
          The Global Stars has emerged successfully as the topmost safety service provider in India. Our earnest agenda is to guard the atmosphere and human lives from the malicious vibes of ionizing radiation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Notable advice on disposal of radioactive residual",
            "Plan and procedure of Rad survey",
            "Provide RPA and RWA facilities",
            "Take all the vital steps to safety & precautions",
            "Environmental bearing valuation"
          ].map((item, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

</div>

    </div>
  )
}

export default EnvironmentalP