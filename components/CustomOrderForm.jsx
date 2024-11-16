import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const CustomOrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    dimensions: "",
    material: "",
    color: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Konfigurasi EmailJS
    const serviceId = "service_l06qmy5";
    const templateId = "template_9j4rg75";
    const publicKey = "YmbAGErlWjlk_gruQ";

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setSuccessMessage("Your form has been successfully sent to Levana Living");
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: "",
          dimensions: "",
          material: "",
          color: "",
          notes: "",
        });
      })
      .catch(() => {
        setErrorMessage(
          "An error occurred while sending the order. Please try again."
        );
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <div className="container">
        <div>
          <p className="text-lg font-bold mt-2">Welcome to Levana Living!</p>
          <p className="mt-4">
            We&apos; re excited to help you create the furniture of your dreams,
            perfectly suited to your style and needs. Levana Living offers
            custom product services for various types of furniture, including
            chairs, tables, and dining sets. You can personalize the size,
            material, color, and other details to make sure our products fit
            seamlessly into your space. Please fill out the form below to start
            your custom order. Our team will be happy to contact you to discuss
            further details and bring your vision to life!
          </p>
        </div>
        <div className="flex justify-center items-center py-7 md:py-11">
          <div className="w-full flex bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Custom Order Form
              </h2>
              {successMessage && (
                <p className="text-green-600 bg-green-100 p-3 rounded-md">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="text-red-600 bg-red-100 p-3 rounded-md">
                  {errorMessage}
                </p>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
                    required
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
                    required
                  />
                </div>
                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
                    required
                  />
                </div>
                {/* Furniture Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-gray-700 font-medium"
                  >
                    Furniture Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Chair">Chair</option>
                    <option value="Table">Table</option>
                    <option value="Dining Set">Dining Set</option>
                    <option value="Storage">Storage</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
                {/* Dimensions */}
                <div>
                  <label
                    htmlFor="dimensions"
                    className="block text-gray-700 font-medium"
                  >
                    Dimensions (Length x Width x Height)
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="e.g., 100cm x 50cm x 75cm"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
                  />
                </div>
                {/* Material */}
                <div>
                  <label
                    htmlFor="material"
                    className="block text-gray-700 font-medium"
                  >
                    Material
                  </label>
                  <input
                    type="text"
                    id="material"
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    placeholder="e.g., Teakwood, iron, etc."
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
                  />
                </div>
                {/* Color */}
                <div>
                  <label
                    htmlFor="color"
                    className="block text-gray-700 font-medium"
                  >
                    Color
                  </label>
                  <input
                    type="text"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    placeholder="e.g., Black, white, brown"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
                  />
                </div>
                {/* Special Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-gray-700 font-medium"
                  >
                    Special Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Provide additional details or special requests"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-950"
                    rows="4"
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gray-950 text-white py-3 rounded hover:bg-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-950"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Custom Order"}
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full bg-gray-100 p-6 hidden md:block">
              <Image
                src="https://st2.depositphotos.com/2481271/8258/i/450/depositphotos_82583980-stock-photo-carpenter-holding-a-pieces-of.jpg"
                alt="Custom-Order"
                className="w-full h-full object-cover"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomOrderForm;
