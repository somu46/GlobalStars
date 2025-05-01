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
<div className="flex flex-col lg:flex-row  gap-12 mt-10  ">
          {employees.map((employee) => (
            <div key={employee.id} className="bg-white border border-gray-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              
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

  );
};

export default EmployeeCard;