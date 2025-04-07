import React from 'react';
import { Link } from 'react-router-dom';
import CoverImg from '../../../Assets/ABI.jpeg';

const BoroscopeInspection = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${CoverImg})`,
        backgroundPosition: 'center'
      }}>
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Advanced Boroscope Inspection Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Precision internal inspection solutions for complex machinery and confined spaces
          </p>
          <Link to='/an-appointment'>
            <button onClick={handleScroll} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg">
              Schedule Inspection
            </button>
          </Link>
          <div className="mt-12 animate-bounce">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1993/1993464.png" 
              alt="Boroscope" 
              className="w-20 h-20 mx-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Inspection Capabilities</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {icon: '🔍', title: 'Real-Time Monitoring', desc: 'Live HD video feed with recording'},
            {icon: '📐', title: 'Precision Measurement', desc: 'Dual measurement systems'},
            {icon: '📊', title: 'Detailed Reporting', desc: 'Comprehensive analysis reports'},
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center hover:border-b-4 hover:border-blue-600">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inspection Process */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Inspection Process</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            {[
              {step: '1', title: 'Preparation', desc: 'Equipment calibration'},
              {step: '2', title: 'Access', desc: 'Non-invasive entry'},
              {step: '3', title: 'Examination', desc: '360° visual inspection'},
              {step: '4', title: 'Analysis', desc: 'Defect identification'},
              {step: '5', title: 'Reporting', desc: 'Detailed documentation'}
            ].map((stage, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 shadow-md">
                  {stage.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{stage.title}</h3>
                <p className="text-gray-600 text-sm">{stage.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 right-[-45%] w-24 border-t-2 border-dashed border-gray-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specs */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Technical Specifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Standard Inspection Kit</h3>
            <ul className="space-y-4">
              {[
                '4mm-8mm diameter probes',
                '2m-10m articulation range',
                '1080p HD resolution',
                'IP67 waterproof rating',
                '±0.1mm measurement accuracy'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Advanced Features</h3>
            <ul className="space-y-4">
              {[
                'Laser measurement system',
                '3D modeling capability',
                'Thermal imaging option',
                'Wireless connectivity',
                'ATEX certified units'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Industry Applications</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {icon: '✈️', title: 'Aviation'},
              {icon: '🏭', title: 'Manufacturing'},
              {icon: '⚡', title: 'Energy'},
              {icon: '🚗', title: 'Automotive'},
              {icon: '🛳️', title: 'Marine'},
              {icon: '🏗️', title: 'Construction'},
              {icon: '⛏️', title: 'Mining'},
              {icon: '🩺', title: 'Medical'}
            ].map((app, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow hover:translate-y-[-5px]">
                <div className="text-3xl mb-2">{app.icon}</div>
                <span className="text-gray-700 font-medium">{app.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* What is Borescope? */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Borescope?</h2>
            <p className="text-gray-600 leading-relaxed">
              A borescope allows the examiner to examine the places that are otherwise inaccessible by the naked eyes. A borescope is a valuable optical tool and especially designed for non-destructive testing.
            </p>
          </div>
        </div>

        {/* Types of Borescope */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Borescope:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Rigid Borescope:</h3>
                <p className="text-gray-700">
                  This kind of borescope depicts crystal clear images to the viewer. It provides by far the finest quality of the image and works effortlessly in the inspecting field of hydraulic manifold bodies, gunsmithing, fuel injectors, and automotive cylinders.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Flexible Borescope:</h3>
                <p className="text-gray-700">
                  It is a twistable rod that is attached to the camera to the eyepiece on one end. This type of borescope is used for varieties of purpose such as for peeking into curvy pipes, vents, chimney, ducts etc.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg md:col-span-2">
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Video Borescope:</h3>
                <p className="text-gray-700">
                  It is popularly also known as inspection camera. A video camera is linked at the end of this device, the ability to capture the still images or video of this equipment is exclusive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why our service is reliable */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why our borescope inspection in India is reliable?</h2>
            <p className=" leading-relaxed mb-4 font-semibold text-blue-800">
              Quality Assurance Device used by Our Specialized team!
            </p>
            <p className="text-gray-700 mb-4">
              Global Stars professionals uses advanced and upgraded borescope for inspecting the medium. Our inspecting device comprises of rod lens system, a reliable lens system, fibre optic image guides a CMOS camera or CCD. Our borescope is introduced into the element being assessed, without disturbing the subject of interest.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Advanced Development in Our Borescope Inspection Service</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'High-resolution videoscope',
                'Highly configured to measure minor defects, it is highly essential for examining of aircraft turbines',
                'Highly elevated CMOS sensors',
                'Exceedingly firm images'
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-blue-50 p-3 rounded-lg">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use of Our Borescope */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Use of Our Borescope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'It is used for non-destructive testing techniques for identifying imperfections.',
                'Generally used in the visual review of truck engines, automotive, aircraft engines, diesel engines, aeroderivative, industrial gas turbines etc.',
                'Used for forensic application\'s in law enforcement and building inspection.',
                'Our borescope inspection service in India has emerged globally to control the high radiation intensity caused by aircraft engines and other sources.',
                'Recognized by the Government of India, AERB.',
                'Complete video recording of our inspection.'
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-blue-50 p-3 rounded-lg">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Precision Inspection Solutions</h2>
          <p className="text-gray-300 mb-8 text-lg">Contact our certified inspectors for non-destructive testing needs</p>
          <Link to='/an-appointment'>
            <button onClick={handleScroll} className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
              Request Inspection
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BoroscopeInspection;