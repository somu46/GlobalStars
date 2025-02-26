import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../Assets/logo.png'; // Import the logo image

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleScrolle = () => {
    window.scrollTo(0, 0);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setIsValid(true);
      alert('Subscribed successfully!');
      setEmail('');
    } else {
      setIsValid(false);
    }
  };

  return (
    <footer className="bg-teal-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout for mobile and larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="col-span-2 sm:col-span-1">
            <img src={logo} alt="Islamic Knowledge" className="w-12 h-12 mx-auto my-2" />
            <h4 className="text-lg text-center font-semibold mb-4">Global Stars</h4>
            <p className="text-sm text-gray-300 text-center">
            Global Stars specializes in purchasing antique treasures, offering expert evaluations and fair pricing. With a passion for preserving history, we connect sellers with a trusted buyer dedicated to quality, authenticity, and exceptional customer service.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Quick Links</h4>
            <ul className="space-y-2 text-center">
              <li onClick={handleScrolle}>
                <Link to="/" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Home
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/about-us" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  About Us
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/contact-us" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Contact Us
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/terms-and-conditions" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Features Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Quick Services</h4>
            <ul className="space-y-2 text-center">
              <li onClick={handleScrolle}>
                <Link to="/essentials/prayer-times" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Prayer Times
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/essentials/islamic-calendar" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Islamic Calendar
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/essentials/zakat-calculator" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Zakat Calculator
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/essentials/al-quran" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Al-Quran
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/essentials/date-converter" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Date Converter
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/essentials/islamic-holidays" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Islamic Holidays
                </Link>
              </li>
              <li onClick={handleScrolle}>
                <Link to="/essentials/qibla-direction" className="text-sm text-gray-300 hover:text-amber-400 transition">
                  Qibla Direction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-center">Contact Us</h4>
            

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 mx-auto justify-center">
            <a href="mailto:globalstars@gmail.com" className="hover:text-amber-400 text-[1rem]">
              <FaEnvelope className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-amber-400 transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-amber-400 transition"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-amber-400 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-300 hover:text-amber-400 transition"
                aria-label="YouTube"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>

            {/* Newsletter Subscription Section */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4 text-center">Subscribe to Our Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex justify-center">
                <input
                  type="email"
                  className={`p-2 rounded-l-lg text-black ${!isValid && 'border-red-500'}`}
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  type="submit"
                  className="bg-amber-400 text-white p-2 rounded-r-lg hover:bg-amber-500 transition"
                >
                  Subscribe
                </button>
              </form>
              {!isValid && <p className="text-red-500 mt-2 text-center">Please enter a valid email address.</p>}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Global Stars. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;