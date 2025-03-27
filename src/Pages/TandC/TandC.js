import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {

    const handleScrolle = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div className="max-w-4xl mx-auto p-5 font-sans text-gray-800 leading-relaxed">
      <header className="text-center mb-8 pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
        <p className="text-gray-600 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <section className="mb-8">
          <p className="mb-4">
            Welcome to our Terms and Conditions page. By engaging in any transaction or agreement with us, 
            you agree to comply with the following terms. Please read them carefully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">1. Rice Puller Terms</h2>
          
          <div className="ml-5 mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Option 1: 24-Hour Sitting Process</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>A sample of <strong className="font-semibold text-gray-900">Mineral Water Test</strong> must be provided for verification.</li>
              <li>Upon approval, <strong className="font-semibold text-gray-900">two representatives from our side</strong> will visit the location.</li>
              <li>A <strong className="font-semibold text-gray-900">24-hour sitting period</strong> is required before further proceedings.</li>
              <li>After successful verification, the item will be placed under <strong className="font-semibold text-gray-900">Joint Custody</strong>.</li>
              <li>The company will provide:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong className="font-semibold text-gray-900">100 Crores (₹100 Cr.) as a Token Amount</strong></li>
                  <li><strong className="font-semibold text-gray-900">Jacket Kit</strong></li>
                  <li><strong className="font-semibold text-gray-900">Required Chemicals</strong></li>
                  <li><strong className="font-semibold text-gray-900">Scientist for verification</strong></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="ml-5 mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Option 2: If 24-Hour Sitting is Not Possible</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>A <strong className="font-semibold text-gray-900">Location Chip Stick</strong> will be placed by our team for tracking.</li>
              <li>The <strong className="font-semibold text-gray-900">Owner must visit our office</strong> to complete the Agreement with proper <strong className="font-semibold text-gray-900">KYC verification</strong>.</li>
              <li>The company will provide:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong className="font-semibold text-gray-900">5 Crores (₹5 Cr.) as an Initial Token</strong></li>
                </ul>
              </li>
              <li>The next day:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong className="font-semibold text-gray-900">100 Crores (₹100 Cr.) as Final Token</strong></li>
                  <li><strong className="font-semibold text-gray-900">Jacket Kit, Chemicals, and Scientist</strong> will be dispatched for <strong className="font-semibold text-gray-900">Joint Custody</strong>.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="ml-5">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Option 3: Same-Day Work</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="font-semibold text-gray-900">All expenses must be borne by the Owner</strong>.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">2. Mirror Terms</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>A <strong className="font-semibold text-gray-900">Cotton Test</strong> must be provided as a <strong className="font-semibold text-gray-900">Mirror Sample</strong> for verification.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">3. Binocular Terms</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>A <strong className="font-semibold text-gray-900">Cotton Test</strong> must be provided for verification.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">4. Snake Pearl (Nag Moni - N.M.) Terms</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>A sample of <strong className="font-semibold text-gray-900">Hibiscus Flower Bud/Blossom</strong> must be provided for verification.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">5. Red Mercury (R.M.) Terms</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>A <strong className="font-semibold text-gray-900">proper sample</strong> must be provided for verification.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">6. Herbal Product Terms</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>An <strong className="font-semibold text-gray-900">18-gauge Copper Wire sample</strong> must be provided for verification.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">General Terms</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All transactions are subject to <strong className="font-semibold text-gray-900">verification and approval</strong>.</li>
            <li>Any fraudulent activity will result in <strong className="font-semibold text-gray-900">legal action</strong>.</li>
            <li>The company reserves the right to <strong className="font-semibold text-gray-900">modify terms</strong> without prior notice.</li>
            <li>By proceeding, you agree to all terms mentioned above.</li>
          </ul>
        </section>

        <section className="mt-10 pt-5 border-t border-gray-200">
            
          <p>For any queries, contact us at: <Link onClick={handleScrolle} to='/contact-us'><strong className="font-semibold text-blue-600 underline">Contact Us</strong></Link></p>
        </section>

        <div className="mt-10 p-5 bg-gray-50 rounded-lg border-l-4 border-blue-500">
          <p className="font-semibold text-gray-900 mb-4">By proceeding, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
          <div className="italic">
            <p className='font-bold'>Global Stars</p>
            <a href='mailto:globalstarglobalstar90@gmail.com'>globalstarglobalstar90@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;