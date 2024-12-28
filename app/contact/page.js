"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
      
       setFormData({
            name: "",
            email: "",
            message: "",
        });
      
   
      };


  return (
    <section className="bg-gray-900 text-gray-300 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 flex justify-center gap-3">
          Contact <span className="text-white flex gap-2"><img src="/pay.svg" alt="" width={25} height={25} />GlobalPay</span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Have questions, feedback, or need assistance? We're here to help. Reach out to us using the form below or via our contact information.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">Get in Touch</h2>
              {formSubmitted && (
                <p className="text-green-500 mb-4">Your message has been sent successfully!</p>
              )}
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={!isFormValid }
                  className={`w-full text-white py-3 px-6 rounded-lg shadow transition duration-300 ${
                    isFormValid ?
                       "bg-blue-500 hover:bg-blue-600"
                      :"bg-gray-600 cursor-not-allowed"
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-white mb-4">Contact Information</h2>
              <p className="text-gray-400 leading-relaxed">
                Reach out to us via any of the contact details below. We're always ready to assist!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-blue-500 text-2xl">📞</span>
                  <p className="text-gray-400">(+92) 3482346425</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-500 text-2xl">📧</span>
                  <p className="text-gray-400">muzammilmehdi52@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-500 text-2xl">📍</span>
                  <p className="text-gray-400">
                    Alamdar Road, Quetta, Balochistan, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
