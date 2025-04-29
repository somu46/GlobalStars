import React from 'react'
import CoverImg from '../../../Assets/TestAnal.jpeg'
import { Link } from 'react-router-dom';
const TestAnal = () => {
  
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };
  return (
    <div className=" py-1">
      <div className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${CoverImg})`,
        backgroundPosition: 'center'
      }}>
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Are you looking for the reliable Non-desrtructive testing ?</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Our expertise inspection you can rely upon 
          </p>
          <Link to='/an-appointment'>
            <button onClick={handleScroll} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg">
              Schedule Inspection
            </button>
          </Link>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">


  {/* What is Testing & Analysis? */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">What is Testing & Analysis?</h2>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg">
        A testing analysis is a technique used for examining the material in the laboratory. Certified laboratory professionals carry out the testing analysis in the domain of fuel, oils and aviation hydraulic fluids. The specialized laboratory team provides test reports to MRO's, Aircraft Delivery centre and Airlines.
      </p>
    </div>
  </div>

  {/* Why We? */}
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Why Choose Us?</h2>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg">
        We at The Global Stars offers a comprehensive range of in-house and on-site services to our clients. As our expertise work according to PART 145 and FAR 145 international and AERB protocols. We are well- recognized as a prominent testing & analysis service provider in India. Our analytic team has excelled in the arena of Industrial Radiography also.
      </p>
    </div>
  </div>

  {/* Non-Destructive Testing Service */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-emerald-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Non-Destructive Testing Service</h2>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg">
        Non-destructive Testing (NDT) is a method of quality control of materials without impairing their aimed use. The material under inspection does not undergo any changes in its physical and chemical properties. The shape, size, density, colour and its internal component remains absolutely undisturbed after and before doing this kind of inspection. Gamma or X-rays are utilized by our expertise while performing this process. Henceforth, The Meridian superiority in the field of Industrial Radiography is known universally. Our sole aim is to provide radiation shielding worldwide.
      </p>
    </div>
  </div>

  {/* Our Process: NORM */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-amber-100 p-3 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Our Process: NORM</h2>
        </div>
        <p className="text-gray-700 font-medium mb-3">NORM (Naturally Occurring Radioactive Materials)</p>
        <p className="text-gray-600 leading-relaxed mb-4">
          NORM is the radioactive elements present naturally in the earth's crust, comparatively low in concentration. The particles that comprise a naturally occurring radionuclide, for example, potassium, thorium, uranium, radium and naturally occurring decaying products.
        </p>
        <p className="text-gray-700 font-medium mb-2">Sources:</p>
        <ul className="space-y-2">
          {['Burning of charcoal', 'Oil & gas production', 'Fertilizer'].map((item, index) => (
            <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
              <span className="bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* TENORM */}
    <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-[1.01]">
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-red-100 p-3 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">TENORM</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Technologically Enhanced Naturally Occurring Radioactive Materials (TENORM), when the naturally occurring radioactive elements are exposed in the earth's surface through the human activities interference via mining, extraction, and others. Then the ecological balance is disturbed and the concentration of radionuclide level rises up drastically in the atmosphere, which is extremely severe for health and atmosphere.
        </p>
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
          <p className="text-gray-600">
            Our RSOs combined their experience with quality assurance equipment's and serve finest testing & analysis services to mining and extraction industries, aviation industries, radiation industries etc.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Objectives */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Objectives of Our Land Remediation Service in India</h2>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          We are The Change You Wish to see In the Environment. It is our priority, whether public or private to provide full-fledged safety and security to the employees at the workplace. The employees working in the field of radiation exposure, during or after the remediation of contamination, the risk of health hazards is comparatively high. They are easily prone to life taking diseases like cancer, tumors, posterior subcapsular cataracts, hampers reproductive system, permanent hormonal disbalance and others.
        </p>
        <p className="text-gray-600 leading-relaxed">
          At Global Stars our expertise performs their crucial responsibilities as per AERB/BARC norms. Our well- certified and years experienced engineers, geologists and technician team serves you cost-effective services in India.
        </p>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-green-800 font-medium">
            The prime motto of our exclusive environmental or land remediation service in India is to minimize and detect the malicious source of ionizing radiation.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Experts Scanning Facility */}
  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden  transform transition hover:scale-[1.01]">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-indigo-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Experts Scanning Facility</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {['Weld joint scanning in an ultrasonic machine', 'Casting', 'Forging'].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start">
            <span className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-600">
        Our advanced testing & analysis service helps in detecting Lack of penetration, Lack of fusion, cracks, slag, etc. for the aid of our clients.
      </p>
    </div>
  </div>

  {/* Meridian Services */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Meridian Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Eddy Current', 'Ultrasonic', 'Magnetic Particle', 'Liquid Penetrant', 'Visual', 'Leak', 'Radiography'].map((service) => (
          <div key={service} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md transform transition hover:scale-105 hover:shadow-lg border border-blue-100">
            <div className="bg-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{service} Testing</h3>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Call to Action */}
 
</div>


    </div>
  )
}

export default TestAnal