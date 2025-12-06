import React, { useState } from 'react';
import Avatar from '../../Assets/Avatar.png';
import CEOID from '../../Assets/GS597219SD.jpeg';
import {FaRegEye} from 'react-icons/fa';

const EmployeeCard = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      name: 'Anil Reddy',
      role: 'CEO',
      image: Avatar,
      companyId: 'GS597219SD',
      IDCard: CEOID
    }
  ];

  const handleViewID = (employee) => {
    if (employee.companyId && employee.IDCard) {
      setSelectedEmployee(employee);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-12 mt-10">
        {employees.map((employee) => (
          <div key={employee.id} className="bg-white border border-gray-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col m-auto p-12 relative">
              {/* Eye Icon - Only show if employee has companyId and IDCard */}
              {employee.companyId && employee.IDCard && (
                <button
                  onClick={() => handleViewID(employee)}
                  className="absolute top-4 right-4 p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200 group"
                  title="View ID Card"
                >
                  <FaRegEye className="h-6 w-6 text-blue-600 group-hover:text-blue-800" />
                </button>
              )}
              
              <img 
                className="h-48 w-48 rounded-full object-cover border-2 border-blue-500 m-auto"
                src={employee.image}
                alt={employee.name}
              />
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">{employee.name}</h2>
                <p className="text-amber-600 font-medium mt-1">{employee.role}</p>
                
                {/* Display Company ID if available */}
                {employee.companyId && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600">Company ID:</p>
                    <p className="text-lg font-semibold text-gray-800">{employee.companyId}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for ID Card */}
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-24 px-2">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[75vh] overflow-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                {selectedEmployee.name}'s ID Card
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-gray-600">Company ID: <span className="font-semibold">{selectedEmployee.companyId}</span></p>
                <p className="text-gray-600">Role: <span className="text-amber-600 font-medium">{selectedEmployee.role}</span></p>
              </div>
              
              <div className="flex justify-center">
                <img
                  src={selectedEmployee.IDCard}
                  alt={`ID Card of Anil Reddy - GS597219SD - Global Stars CEO`}
                  className="max-w-full h-auto rounded-lg border border-gray-300"
                />
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  This ID card is the property of the company and should be returned upon termination.
                </p>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeCard;