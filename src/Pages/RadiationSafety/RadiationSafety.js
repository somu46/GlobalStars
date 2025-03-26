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
      <div className="bg-gray-700 text-white py-16">
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

{/*Copied*/}
<div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
  {/* What is Land Remediation? */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Radiation?</h2>
      <p className="text-gray-600 leading-relaxed">
      Radiation is the process in which energy is emitted and travels in invisible waves or rays. When an emission of energy occurs as electromagnetic waves or as atomic energy, the energy is conveyed in the form of waves or streams of particles. It travels through the air medium, unless and until its absorbed by the matter.
      </p>
    </div>
  </div>

  {/* Main Causes of Land Contamination */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Radiation</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Ionizing Radiation:
          <p>It includes two types of radiation coming from both man-made (Technologically Enhanced Naturally Occurring Radioactive Material) as well as natural sources (Naturally Occurring Radioactive Material). For example, atomic power plant, cosmic rays, and X-ray machines.
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Non-Ionizing Radiation:
          <p>The parameter of this kind of radiation is usually low, thus less malicious for atmosphere and ecological system. Few examples of non-ionizing radiation are ultraviolet rays (UV), radio waves, and microwaves.
          </p>
        </li>
        
      </ul>
    </div>
  </div>

  {/* Objectives of Our Land Remediation Service in India */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Do all kinds of radiation are harmful?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        is a myth; all kinds of radiation are harmful for health and atmosphere. The intensity of the radiation mainly decides the hazards of radiation. Nominal amount of radiation is beneficial for health, and used for the treatment of cancer, preserving frozen food, etc.
      </p>
    </div>
  </div>

  {/* We are skilled at! */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Malicious Impact of Ionizing Radiation</h2>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Disturbs the smooth flow of ecological balance
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Society is easily prone to severe diseases via, all types of cancers
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Extremely harmful for fetus
        </li>
        
      </ul>
    </div>
  </div>

  {/* Why sky is our limit? */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Aah Windsor House as a Radiation Protection Service Provider
      </h2>
      <p>In a general term, radiation protection is also known as radiological protection. We at Aah Windsor House, offer the best radiation protection service in India to defend the environment and all living things from the damaging influence of ionizing radiation. Our top-notch radiation safety services in India are an overwhelming gift in medical and industrial sector.</p>
    </div>
  </div>

{/* Our Radiation Protection Process: */}
<div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Radiation Protection Process:
      </h2>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> <b>Occupational Radiation Protection Send your employee’s safe from work:</b>
          <p>It is the prime responsibility of any Organization to provide safety and security at the workplace. The exposure of radiation level is hugely high in medical and atomic plant centre. To prevent any kind of mishap due to the terrifying impact of ionizing radiation. Therefore, we serve occupational radiation protection service or you can say radiation shielding service to our clients.</p>
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> <b>Public Radiation Protection:</b>
          <p>Knowingly or unknowingly, we are below the exposure of Radiation. It is essential to detect and reduce the intensity of the radiation, before starting any environmental project or activity.</p>
        </li>
      </ul>
    </div>
  </div>

{/* Why commit to us! */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Why commit to us!
      </h2>
      <p>India air pollution is atrocious</p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Save’s you from all types of cancer’s.
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Leading brand name in India as well as across the globe
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span>Our well qualified RSWs, RSOs and RPA team makes sure that the atmosphere is safe, while we breath.
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span>Advanced and upgraded technology instrument via, Gamma Nuclide Identification System, model number: G Search S.r-N- 1713 and Survey meter model number: 2241-2(Auto Ranging Digital Meter, supports-GM, Proportional and Scintillation Detectors) used by our professionals.
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Indian Government certified.

        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Function as per AERB norms.

        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Assist in maintaining the smooth run of marine and ecological balance.
        </li>
      </ul>
    </div>
  </div>

</div>

    </div>
  )
}

export default RadiationSafety