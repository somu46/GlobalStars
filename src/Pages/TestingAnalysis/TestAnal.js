import React from 'react'
import CoverImg from '../../Assets/TestAnal.jpeg'

const TestAnal = () => {
  return (
    <div className="bg-gray-50 py-1">
      <div className="relative h-auto bg-cover bg-center" style={{ backgroundImage: `url(${CoverImg})` }}>
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Testing and Analysis
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            What is Testing and Analysis?
          </h1>
          <p className="text-gray-600 leading-relaxed">
            A testing analysis is a technique used for examining the material in the laboratory. 
            Certified laboratory professionals carry out the testing analysis in the domain of fuel, 
            oils and aviation hydraulic fluids. The specialized laboratory team provides test reports 
            to MRO’s, Aircraft Delivery centre and Airlines.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We at The Aah Windsor House offers a comprehensive range of in-house and on-site services 
            to our clients. Our expertise work according to PART 145 and FAR 145 international and AERB 
            protocols. We are well-recognized as a prominent testing & analysis service provider in India. 
            Our analytic team has excelled in the arena of Industrial Radiography.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Process
          </h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">NORM:</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Naturally Occurring Radioactive Materials (NORM) are radioactive elements present 
                naturally in the earth’s crust, comparatively low in concentration. The particles 
                that comprise a naturally occurring radionuclide include potassium, thorium, uranium, 
                radium and naturally occurring decaying products.
              </p>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Sources:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-gray-600">Burning of Charcoal</li>
                  <li className="text-gray-600">Oil & gas production</li>
                  <li className="text-gray-600">Fertilizer</li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <h1 className="text-2xl font-semibold text-gray-700 mb-3">
                Non-Destructive Testing Service:
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Non-destructive Testing (NDT) is a method of quality control of materials without 
                impairing their aimed use. Gamma or X-rays are utilized by our expertise while 
                performing this process. Our superiority in Industrial Radiography is known 
                universally with the aim to provide radiation shielding worldwide.
              </p>
            </div>

            <div className="pt-6">
              <h1 className="text-2xl font-semibold text-gray-700 mb-3">TENORM:</h1>
              <p className="text-gray-600 leading-relaxed">
                Technologically Enhanced Naturally Occurring Radioactive Materials (TENORM) occur 
                when natural radioactive elements are exposed through human activities like mining 
                and extraction. Our RSOs combine experience with quality equipment to provide 
                superior testing & analysis services.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">
            Experts Scanning Facility:
          </h1>
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li className="text-gray-600 font-medium">Weld joint scanning in ultrasonic machine</li>
            <li className="text-gray-600 font-medium">Casting</li>
            <li className="text-gray-600 font-medium">Forging</li>
          </ol>
          <p className="text-gray-600 italic">
            Our advanced testing helps detect: Lack of penetration, fusion defects, cracks, 
            and slag inclusions.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Meridian Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Eddy Current', 'Ultrasonic', 'Magnetic Particle', 'Liquid Penetrant', 'Visual', 'Leak', 'Radiography']
              .map((service) => (
                <div 
                  key={service}
                  className="bg-white p-4 rounded-md text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 font-medium">{service} Testing</span>
                </div>
              ))}
          </div>
        </div>

{/* Copied*/}
<div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
  {/* What is Land Remediation? */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Testing & Analysis?</h2>
      <p className="text-gray-600 leading-relaxed">
      A testing analysis is a technique used for examining the material in the laboratory. Certified laboratory professionals carry out the testing analysis in the domain of fuel, oils and aviation hydraulic fluids. The specialized laboratory team provides test reports to MRO’s, Aircraft Delivery centre and Airlines.
      </p>
    </div>
  </div>
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Why We?</h2>
      <p className="text-gray-600 leading-relaxed">
      We at The Aah Windsor House offers a comprehensive range of in-house and on-site services to our clients. As our expertise work according to PART 145 and FAR 145 international and AERB protocols. We are well- recognized as a prominent testing & analysis service provider in India. Our analytic team has excelled in the arena of Industrial Radiography also.
      </p>
    </div>
  </div>

  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Non-Destructive Testing Service:</h2>
      <p className="text-gray-600 leading-relaxed">
      Non-destructive Testing (NDT) is a method of quality control of materials without impairing their aimed use. The material under inspection does not undergo any changes in its physical and chemical properties. The shape, size, density, colour and its internal component remains absolutely undisturbed after and before doing this kind of inspection.Gamma or X-rays are utilized by our expertise while performing this process. Henceforth, The Meridian superiority in the field of Industrial Radiography is known universally. Our sole aim is to provide radiation shielding worldwide.
      </p>
    </div>
  </div>

  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Our process:</h2>
      <p>NORM:</p>
      <p>NORM (Naturally Occurring Radioactive Materials) is the radioactive elements present naturally in the earth’s crust, comparatively low in concentration. The particles that comprise a naturally occurring radionuclide, for example, potassium, thorium, uranium, radium and naturally occurring decaying products.      </p>
      <p>Sources:</p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Burning of charcoal
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Oil & gas production
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Fertilizer
        </li>
      </ul>
      
    </div>
  </div>

  {/* Main Causes of Land Contamination */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">TENORM:</h2>
      <p>Technologically Enhanced Naturally Occurring Radioactive Materials (TENORM), when the naturally occurring radioactive elements are exposed in the earth’s surface through the human activities interference via mining, extraction, and others. Then the ecological balance is disturbed and the concentration of radionuclide level rises up drastically in the atmosphere, which is extremely severe for health and atmosphere.      </p>
      <br/>
      <p>Our RSOs combined their experience with quality assurance equipment’s and serve finest testing & analysis services to mining and extraction industries, aviation industries, radiation industries etc.</p>
    </div>
  </div>

  {/* Objectives of Our Land Remediation Service in India */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Objectives of Our Land Remediation Service in India</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        We are The Change You Wish to see In the EnvironmentIt is our priority, whether public or private to provide full-fledged safety and security to the employees at the workplace. The employees working in the field of radiation exposure, during or after the remediation of contamination, the risk of health hazards is comparatively high. They are easily prone to life taking diseases like cancer, tumors, posterior subcapsular cataracts, hampers reproductive system, permanent hormonal disbalance and others.
      </p>
      <p className="text-gray-600 leading-relaxed">
        At Aah Windsor House our expertise performs their crucial responsibilities as per AERB/BARC norms. Our well- certified and years experienced engineers, geologists and technician team serves you cost-effective services in India.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        The prime motto of our exclusive environmental or land remediation service in India is to minimize and detect the malicious source of ionizing radiation.
      </p>
    </div>
  </div>

  {/* We are skilled at! */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Experts Scanning Facility:</h2>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Weld joint scanning in an ultrasonic machine
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Casting
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Forging
        </li>
      </ul>
      <p>Our advanced testing & analysis service helps in detecting Lack of penetration, Lack of fusion, cracks, slag, etc. for the aid of our clients.</p>
    </div>
  </div>

  {/* Why sky is our limit? */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-600">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Meridian Service towards the Clients!</h2>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Eddy Current Inspection
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Ultrasonic Inspection
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Magnetic Particle Testing
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Liquid Penetrant Testing
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Visual Testing
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Leak Testing
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">•</span> Radiography Testing
        </li>
       
      </ul>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default TestAnal