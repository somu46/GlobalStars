import React from 'react'
import CoverImg from '../../../Assets/RadiationSafety.jpeg'
import { Link } from 'react-router-dom'

const RadiationSafety = () => {
  const handleScrolle = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[20rem] bg-cover bg-center flex items-center justify-center bg-gray-900 bg-opacity-60 bg-blend-multiply" style={{ backgroundImage: `url(${CoverImg})` }}>
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
            Leading Environmental Protection Service will make our mother Earth risk-free from effluence Radiation !
          </h1>
          
          <Link to='/an-appointment'>
            <button 
              onClick={handleScrolle} 
              className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90  shadow-lg hover:scale-105 transform transition duration-300 text-lg"
            >
              Request Site Assessment
            </button>
          </Link>
        </div>
      </div>

{/*Copied*/}
<div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
  {/* What is Radiation? */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">What is Radiation?</h2>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg">
        Radiation is the process in which energy is emitted and travels in invisible waves or rays. When an emission of energy occurs as electromagnetic waves or as atomic energy, the energy is conveyed in the form of waves or streams of particles. It travels through the air medium, unless and until its absorbed by the matter.
      </p>
    </div>
  </div>

  {/* Types of Radiation */}
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Types of Radiation</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Ionizing Radiation</h3>
          </div>
          <p className="text-gray-600">
            It includes two types of radiation coming from both man-made (Technologically Enhanced Naturally Occurring Radioactive Material) as well as natural sources (Naturally Occurring Radioactive Material). For example, atomic power plant, cosmic rays, and X-ray machines.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Non-Ionizing Radiation</h3>
          </div>
          <p className="text-gray-600">
            The parameter of this kind of radiation is usually low, thus less malicious for atmosphere and ecological system. Few examples of non-ionizing radiation are ultraviolet rays (UV), radio waves, and microwaves.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Are all radiations harmful? */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-amber-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Do all kinds of radiation are harmful?</h2>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg">
        It is a myth; all kinds of radiation are harmful for health and atmosphere. The intensity of the radiation mainly decides the hazards of radiation. Nominal amount of radiation is beneficial for health, and used for the treatment of cancer, preserving frozen food, etc.
      </p>
    </div>
  </div>

  {/* Malicious Impact */}
  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-red-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Malicious Impact of Ionizing Radiation</h2>
      </div>
      <div className="space-y-4">
        {[
          "Disturbs the smooth flow of ecological balance",
          "Society is easily prone to severe diseases via, all types of cancers",
          "Extremely harmful for fetus"
        ].map((item, index) => (
          <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
            <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Global Stars as Provider */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-emerald-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Global Stars as a Radiation Protection Service Provider</h2>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg">
        In a general term, radiation protection is also known as radiological protection. We at Global Stars, offer the best radiation protection service in India to defend the environment and all living things from the damaging influence of ionizing radiation. Our top-notch radiation safety services in India are an overwhelming gift in medical and industrial sector.
      </p>
    </div>
  </div>

  {/* Our Process */}
  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Our Radiation Protection Process</h2>
      </div>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
            Occupational Radiation Protection: Send your employee's safe from work
          </h3>
          <p className="text-gray-600 ml-9">
            It is the prime responsibility of any Organization to provide safety and security at the workplace. The exposure of radiation level is hugely high in medical and atomic plant centre. To prevent any kind of mishap due to the terrifying impact of ionizing radiation. Therefore, we serve occupational radiation protection service or you can say radiation shielding service to our clients.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            Public Radiation Protection
          </h3>
          <p className="text-gray-600 ml-9">
            Knowingly or unknowingly, we are below the exposure of Radiation. It is essential to detect and reduce the intensity of the radiation, before starting any environmental project or activity.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Why Choose Us */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Why commit to us!</h2>
      </div>
      <p className="text-gray-700 font-medium text-lg mb-6">India air pollution is atrocious</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Save's you from all types of cancer's",
          "Leading brand name in India as well as across the globe",
          "Our well qualified RSWs, RSOs and RPA team makes sure that the atmosphere is safe, while we breath",
          "Advanced and upgraded technology instrument via, Gamma Nuclide Identification System, model number: G Search S.r-N- 1713 and Survey meter model number: 2241-2(Auto Ranging Digital Meter, supports-GM, Proportional and Scintillation Detectors) used by our professionals",
          "Indian Government certified",
          "Function as per AERB norms",
          "Assist in maintaining the smooth run of marine and ecological balance"
        ].map((item, index) => (
          <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
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
{/* New Radiation Protection and Safety Training Section */}
<div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-indigo-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Radiation Protection & Safety Training Programs</h2>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed text-lg">
          Global Stars offers comprehensive radiation safety training programs designed to meet regulatory requirements and ensure safe work practices in radiation environments. Our courses are approved by AERB and tailored for various industries including healthcare, nuclear, and industrial sectors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Training Program 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Occupational Radiation Safety Training
            </h3>
            <ul className="space-y-2 mt-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span> AERB-approved RSO (Radiation Safety Officer) certification courses
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span> Hands-on training with radiation detection equipment
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span> Emergency response procedures for radiation incidents
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span> Regulatory compliance training (AERB, BARC guidelines)
              </li>
            </ul>
          </div>
          
          {/* Training Program 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              Medical Radiation Safety Training
            </h3>
            <ul className="space-y-2 mt-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span> Diagnostic X-ray safety for technicians
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span> Radiation protection in radiotherapy
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span> PET-CT and nuclear medicine safety protocols
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span> Patient dose optimization techniques
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            Customized Training Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">On-site training at your facility</span>
            </div>
            <div className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Virtual training options available</span>
            </div>
            <div className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Industry-specific curriculum development</span>
            </div>
            <div className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Annual refresher courses</span>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Training Benefits:</h4>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Compliance with AERB radiation safety regulations
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Reduced radiation exposure for workers
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Prevention of costly regulatory violations
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Certification for radiation workers
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>

    </div>
  )
}

export default RadiationSafety