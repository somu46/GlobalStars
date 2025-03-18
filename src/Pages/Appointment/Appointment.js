import React, { useRef } from 'react'
import Button from '../../Components/UiCom/Button'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Appointment = () => {

    const form =useRef();
     const { register, handleSubmit, formState: { errors }, reset } = useForm();

     const sendEmail = (e) => {
        // e.preventDefault();
        console.log("From.current: ", form.current);
        
        emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
    
          process.env.REACT_APP_EMAILJS_PUBLIC_ID,
          
        )
        .then(() => {
          toast.success('Message sent successfully!');
          reset();
        })
        .catch((error) => {
          console.log("Error: ", error);
          
          toast.error('Failed to send message. Please try again.');
        });
      };
    
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-3xl font-bold  mb-6 text-center">
        <span className='text-[#1E40AF]'>Book</span> <span className='text-[#FFD700]'> Appointment</span> 
        </h2>
        
        <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-6">
          {/* Date and Time */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
              name='Data'
             {...register("Date",{required:true})}
                type="date"
                id="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            <div className="flex-1">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                id="time"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              {...register("FullName",{required:true})}
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              {...register("MobileNumber",{required:true})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+91 98765 43210"
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* Purpose of Visit */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
              Purpose of Visit
            </label>
            <textarea
              id="purpose"
              {...register("PurposeOfVisit",{required:true})}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Briefly describe the reason for your visit"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className=' flex justify-center items-center'>
          <Button title="Book Appointment" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Appointment