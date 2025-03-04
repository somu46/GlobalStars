import React from 'react'

const EnvironmentalP = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Environmental Protection Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Preserving ecosystems through sustainable solutions and advanced environmental management
          </p>
          <button className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
            Start Conservation Plan
          </button>
        </div>
      </div>

      {/* Key Services */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Protection Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {icon: '🌳', title: 'Ecosystem Preservation', desc: 'Biodiversity conservation programs'},
            {icon: '💧', title: 'Water Resource Management', desc: 'Watershed protection & treatment'},
            {icon: '🌎', title: 'Climate Solutions', desc: 'Carbon footprint reduction strategies'},
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3079/3079155.png" 
              alt="Eco Protection" 
              className="w-full h-64 object-contain"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Comprehensive Environmental Care</h2>
            <ul className="space-y-6">
              {[
                'Pollution control systems',
                'Waste management solutions',
                'Environmental impact assessments',
                'Air quality monitoring',
                'Soil conservation programs',
                'Sustainable resource planning'
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

      {/* Process Flow */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Protection Methodology</h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {[
            {step: '1', title: 'Assessment', desc: 'Environmental analysis'},
            {step: '2', title: 'Planning', desc: 'Strategy development'},
            {step: '3', title: 'Implementation', desc: 'Solution deployment'},
            {step: '4', title: 'Monitoring', desc: 'Continuous evaluation'}
          ].map((stage, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
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

      {/* Technologies */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Innovative Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Bioremediation',
              'AI Monitoring',
              'Solar Treatment',
              'Biofiltration',
              'Nanotech Solutions',
              'IoT Sensors',
              'Drone Mapping',
              'Eco-Coatings'
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
          <h2 className="text-3xl font-bold mb-6">Protect Our Planet Together</h2>
          <p className="text-gray-300 mb-8 text-lg">Join our mission for sustainable environmental stewardship</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Contact Experts
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnvironmentalP