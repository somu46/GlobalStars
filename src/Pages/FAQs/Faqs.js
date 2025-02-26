import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do you verify the authenticity of antiques?",
      answer: "Our team of certified appraisers uses a combination of provenance research, scientific testing, and historical documentation verification. We employ XRF analysis, UV examination, and consult with era-specific experts to ensure authenticity."
    },
    {
      question: "What time periods do you specialize in?",
      answer: "We specialize in artifacts from the Renaissance to Mid-Century Modern periods (1400-1960s), with particular expertise in Victorian, Art Deco, and Early American colonial eras."
    },
    {
      question: "Do you offer restoration services?",
      answer: "Yes, our master craftsmen provide museum-grade restoration using period-appropriate materials and techniques. All restoration work is documented and reversible to maintain historical integrity."
    },
    {
      question: "How are items priced?",
      answer: "Pricing considers rarity, condition, provenance, and current market demand. We provide transparent valuation reports with each item, referencing recent auction results and historical sales data."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, certified checks, and major credit cards. For high-value items, we offer escrow services for secure transactions."
    },
    {
      question: "Do you handle international shipping?",
      answer: "Yes, we specialize in secure international art transport. Items are packed in custom climate-controlled crates with full insurance coverage and GPS tracking."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-[url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-serif mb-4">Antique Collector's Guide</h1>
          <p className="text-lg italic">Answers to Your Curatorial Questions</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-amber-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700">
            Knowledge preserved through generations of expertise
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-amber-800">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaMinus className="text-amber-600" />
                ) : (
                  <FaPlus className="text-amber-600" />
                )}
              </button>
              <div
                className={`px-6 pb-4 pt-2 border-t transition-all duration-300 ${
                  activeIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-amber-100 p-8 rounded-xl">
          <h3 className="text-2xl font-serif text-amber-800 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 mb-6">
            Our curatorial team is available to assist with specialized inquiries
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;