import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
import CoverImg from '../../Assets/ContactUs.jpeg';

const Contact = () => {
  const form = useRef();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendEmail = (data) => {
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_ID
    )
    .then(() => {
      toast.success('Message sent successfully!');
      reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      toast.error('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center bg-gradient-to-r from-black/70 to-black/30" 
           style={{ backgroundImage: `url(${CoverImg})` }}>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Our Curators</h1>
            <p className="text-xl text-amber-200 italic">Your portal to historical preservation</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 py-8">

          {/* Contact Information */}


          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            
            <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Send Us a Message</h2>
            
            
            <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                  <input
                    name="fullName"
                    {...register("fullName", { required: "Name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                  {errors.fullName && <span className="text-red-500 text-sm mt-1">{errors.fullName.message}</span>}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Subject *</label>
                <input
                  name="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Subject of your message"
                />
                {errors.subject && <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  {...register("message", { required: "Message is required" })}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                className="lg:w-[25%]  bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center text-center mx-auto"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default Contact;