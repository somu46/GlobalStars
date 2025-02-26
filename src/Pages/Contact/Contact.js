import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaFacebook } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendEmail = (data) => {
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(() => {
      toast.success('Message sent successfully!');
      reset();
    })
    .catch((error) => {
      toast.error('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-[url('https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-serif mb-4">Contact Our Curators</h1>
          <p className="text-lg italic">Your portal to historical preservation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-serif text-amber-800 mb-6">Send a Message</h2>
            <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Subject *</label>
                <input
                  {...register("subject", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                {errors.subject && <span className="text-red-500 text-sm">Subject is required</span>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-amber-100 p-6 rounded-xl">
              <h3 className="text-xl font-serif text-amber-800 mb-4">Visit Our Gallery</h3>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-amber-600 mt-1 text-xl" />
                <div>
                  <p className="text-gray-700">123 Heritage Lane</p>
                  <p className="text-gray-700">Antiquaria, HT 45678</p>
                  <p className="text-gray-700">United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-100 p-6 rounded-xl">
              <h3 className="text-xl font-serif text-amber-800 mb-4">Direct Contacts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-amber-600" />
                  <a href="tel:+441234567890" className="text-gray-700 hover:text-amber-700">
                    +44 1234 567890
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <FaClock className="text-amber-600" />
                  <p className="text-gray-700">Mon-Sat: 10am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-100 p-6 rounded-xl">
              <h3 className="text-xl font-serif text-amber-800 mb-4">Follow Our Journey</h3>
              <div className="flex space-x-6">
                <a href="https://instagram.com" className="text-amber-600 hover:text-amber-700">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="https://facebook.com" className="text-amber-600 hover:text-amber-700">
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;