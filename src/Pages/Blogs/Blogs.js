import React from 'react';
import BlogsData from './BlogsData';
import { FaCalendarAlt, FaTags, FaArrowRight } from 'react-icons/fa';

const Blogs = () => {
  

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Blog Header */}
      <div className="bg-[url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')] bg-cover bg-center">
        <div className="backdrop-blur-sm bg-black/30 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-serif text-white mb-4">Antique Chronicles</h1>
            <p className="text-lg text-amber-100 italic">Preserving Knowledge Through Generations</p>
          </div>
        </div>
      </div>

      {/* Featured blog */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1588591795084-1770cb3be374?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Featured blog" 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center text-amber-600 mb-4">
              <FaCalendarAlt className="mr-2" />
              <span className="text-sm">March 18, 2024</span>
            </div>
            <h2 className="text-3xl font-serif text-amber-800 mb-4">
              The Lost Art of Bookbinding: Reviving Ancient Techniques
            </h2>
            <p className="text-gray-700 mb-6">
              Explore the centuries-old craft of leather bookbinding and its modern revival among conservation specialists.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"> <FaTags className='inline-block m-2'/>Restoration</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"> <FaTags className='inline-block m-2'/>Book Arts</span>
              </div>
              <button className="flex items-center text-amber-600 hover:text-amber-700">
                Read More <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogsData.map(blog => (
            <article key={blog.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <div className="flex items-center text-amber-600 text-sm mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-serif text-amber-800 mb-3">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm"
                    >
                      <FaTags className='inline-block m-2'/>{tag} 
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* <span className="text-amber-600">{blog.}</span> */}
                  <button className="flex items-center text-amber-600 hover:text-amber-700">
                    Read More <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-amber-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-serif text-amber-800 mb-4">
            Join Our Antiquarian Circle
          </h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Receive exclusive articles, restoration tips, and collection highlights straight to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;