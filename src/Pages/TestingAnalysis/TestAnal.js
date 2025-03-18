import React from 'react'
import CoverImg from '../../Assets/TestAnal.jpeg'

const TestAnal = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${CoverImg})` }}>
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
      </div>
    </div>
  )
}

export default TestAnal