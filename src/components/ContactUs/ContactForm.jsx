import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import contactImage from "../../assets/4.png";

const ContactForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm();

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Simulate form submission (replace with your actual submission logic)
      console.log(data);
      
      // Show success message
      setIsSubmitSuccessful(true);
      
      // Clear form fields
      reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitSuccessful(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      // Optionally handle submission error
    }
  };

  return (
    <section 
      id="contact-form" 
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-blue-100 to-blue-100"
    >
      <div className="flex flex-col md:flex-row w-full items-center">
        {/* Contact Form - Left Side */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 lg:p-12 xl:p-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-gray-800">
              Contact Us
            </h2>

            {/* Success Message */}
            {isSubmitSuccessful && (
              <div 
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" 
                role="alert"
              >
                <span className="block sm:inline">
                  Thank you for your message! We'll get back to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg md:text-xl lg:text-xl xl:text-2xl font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters"
                      }
                    })}
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
                    Email
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

                {/* Mobile Number Field */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-lg md:text-xl lg:text-xl xl:text-2xl font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    {...register('mobile', { 
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Invalid mobile number (10 digits required)"
                      }
                    })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && <small className="text-red-500">{errors.mobile.message}</small>}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg md:text-xl lg:text-xl xl:text-2xl font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register('message')}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter your message"
                  ></textarea>
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
            className="h-auto w-full md:w-3/4 lg:w-3/4 xl:w-full max-h-[75vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
