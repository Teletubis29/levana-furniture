// pages/privacy-policy.jsx

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to Levana Living! This Privacy Policy describes how we collect, use, and protect
          your information when you visit our website. By using our site, you agree to the terms outlined in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information Collection</h2>
        <p className="text-gray-600 leading-relaxed">
          We collect information you provide directly to us when you make an inquiry or sign up for updates.
          This may include your name, email address, phone number, and other relevant details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Usage of Information</h2>
        <p className="text-gray-600 leading-relaxed">
          The information we collect helps us provide better service, improve our website, and respond to
          your requests effectively. We may also use your details to send promotional messages or updates about our products.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sharing of Information</h2>
        <p className="text-gray-600 leading-relaxed">
          We do not sell, trade, or otherwise transfer your personal information to outside parties.
          This does not include trusted third parties who assist us in operating our website or conducting our business.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cookies</h2>
        <p className="text-gray-600 leading-relaxed">
          Our website may use &quot;cookies&quot; to enhance user experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Security</h2>
        <p className="text-gray-600 leading-relaxed">
          We adopt appropriate data collection, storage, and processing practices to protect against unauthorized access, alteration, and disclosure of your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-600 leading-relaxed">
          Levana Living reserves the right to update this Privacy Policy at any time. We encourage you to frequently check this page for any changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@levanaliving.com" className="text-blue-500">info@levanaliving.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
