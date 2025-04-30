import React from 'react';
import Avatar from '../../Assets/Avatar.png'

const EmployeeCard = () => {
  // Sample employee data
  const employees = [
    {
      id: 1,
      name: 'Suman Dutta',
      role: 'Managing Director',
      image: Avatar,
    },
    {
      id: 2,
      name: 'Anikit Gupta',
      role: 'CEO',
      image: Avatar,
    },
    
  ];
  
  

  return (
    <div className="bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h1> */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {employees.map((employee) => (
            <div key={employee.id} className="bg-white  rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              
                <div className="flex flex-col m-auto p-12 ">
                  <img 
                    className="h-48 w-48 rounded-full object-cover border-2 border-blue-500 m-auto"
                    src={employee.image}
                    alt={employee.name}
                  />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800">{employee.name}</h2>
                    <p className="text-amber-600 font-medium">{employee.role}</p>
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