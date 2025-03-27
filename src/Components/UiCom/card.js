import React from 'react';

const EmployeeCard = () => {
  // Sample employee data
  const employees = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Senior Scientist',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Quality Control Manager',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Chemical Engineer',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      
    },
    
  ];

  return (
    <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h1> */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <div key={employee.id} className="bg-white  rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col m-auto">
                  <img 
                    className="h-32 w-32 rounded-full object-cover border-2 border-blue-500 m-auto"
                    src={employee.image}
                    alt={employee.name}
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{employee.name}</h2>
                    <p className="text-blue-600 font-medium">{employee.role}</p>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;