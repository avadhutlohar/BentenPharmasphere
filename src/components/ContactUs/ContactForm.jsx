import React from 'react';
import { useForm } from "react-hook-form";
import contactImage from "../../assets/4.png";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section 
      id="contact-form" 
      className="flex flex-col md:flex-row items-center justify-between h-screen bg-gradient-to-r from-blue-100 to-blue-100"
    >
      <div className="flex flex-col md:flex-row w-full h-full items-center">
        {/* Contact Form - Left Side */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 lg:p-12 xl:p-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-gray-800">
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
                    {...register('name', { required: 'Name is required' })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
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
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
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
                    {...register('message', { required: 'Message is required' })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter your message"
                  ></textarea>
                  {errors.message && <small className="text-red-500">{errors.message.message}</small>}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 text-lg md:text-xl lg:text-xl xl:text-2xl"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center md:justify-end p-4 md:p-6 lg:p-8 xl:p-10">
          <img
            src={contactImage}
            alt="Contact Illustration"
            className="h-full w-full md:h-3/4 md:w-3/4 lg:h-3/4 lg:w-3/4 xl:h-full xl:w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;