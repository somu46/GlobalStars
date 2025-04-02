import React, { useRef, useState } from "react";
import Button from "../../Components/UiCom/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Appointment = () => {
  const form = useRef();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [charCount, setCharCount] = useState(0);

  const handleInput = (event) => {
    let text = event.target.value;
    if (text.length > 100) {
      event.target.value = text.slice(0, 100);
    }
    setCharCount(event.target.value.length);
  };

  const sendEmail = (data) => {
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_ID
    )
    .then(() => {
      toast.success("Message sent successfully!");
      reset();
      setCharCount(0);
    })
    .catch((error) => {
      console.log("Error: ", error);
      toast.error("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="text-[#1E40AF]">Book</span> 
          <span className="text-[#FFD700]"> Appointment</span>
        </h2>

        <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-6">
          
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("FullName", { required: "Full Name is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
            {errors.FullName && <span className="text-red-500 text-sm">{errors.FullName.message}</span>}
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              {...register("MobileNumber", { 
                required: "Mobile Number is required",
                pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="9876543210"
            />
            {errors.MobileNumber && <span className="text-red-500 text-sm">{errors.MobileNumber.message}</span>}
          </div>

          {/* Purpose of Visit */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
              Purpose of Visit  
            </label>
            <textarea
              id="purpose"
              {...register("PurposeOfVisit", { required: "This field is required" })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Briefly describe the reason for your visit"
              maxLength={100}
              onInput={handleInput}
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">{charCount}/100 characters</p>
            {errors.PurposeOfVisit && <span className="text-red-500 text-sm">{errors.PurposeOfVisit.message}</span>}
          </div>

          {/* Date and Time */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Date */}
            <div className="flex-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                {...register("Date", { required: "Date is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.Date && <span className="text-red-500 text-sm">{errors.Date.message}</span>}
            </div>

            {/* Time */}
            <div className="flex-1">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                id="time"
                {...register("Time", { required: "Time is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.Time && <span className="text-red-500 text-sm">{errors.Time.message}</span>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <Button title="Book Appointment" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
