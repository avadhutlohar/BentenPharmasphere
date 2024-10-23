import React from 'react';
import { useForm } from "react-hook-form";
import bgImage from "../../assets/contact.png";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section id="contact-form" className="h-screen py-6 md:py-10 lg:py-12 xl:py-16 relative">
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        style={{ zIndex: -1 }} // Ensure the image is behind the form
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 h-full flex justify-start items-center">
        <div className="bg-transparent rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6 md:p-8 lg:p-10 xl:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-10 lg:mb-12 xl:mb-14">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg md:text-xl lg:text-xl xl:text-2xl font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-400"
                  placeholder="Enter your name"
                />
                {errors.name && <small className="text-red-500">{errors.name.message}</small>}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg md:text-xl lg:text-xl xl:text-2xl font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-400"
                  placeholder="Enter your email"
                />
                {errors.email && <small className="text-red-500">{errors.email.message}</small>}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg md:text-xl lg:text-xl xl:text-2xl font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register('message')}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-400"
                  placeholder="Enter your message"
                ></textarea>
                {errors.message && <small className="text-red-500">{errors.message.message}</small>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;