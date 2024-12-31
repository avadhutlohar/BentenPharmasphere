import React, { useState } from "react";
import { useForm } from "react-hook-form";
import contactImage from "../../assets/4.png";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitError, setSubmitError] = useState(null);
  const [emailCountExceeded, setEmailCountExceeded] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  // Dummy email count (replace with real logic)
  const emailCount = 150;

  const onSubmit = async (data) => {
    // Check email count before sending the form
    if (emailCount >= 200) {
      setEmailCountExceeded(true);
      reset();
      return; // Prevent submission if count exceeds
    }

    // Show loader
    setLoading(true);

    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        message: data.message,
        to_name: "BentenPharmaSphere",
      };

      await emailjs.send(
        "service_y6m2hjh",
        "template_q2alm41",
        templateParams,
        "X5w0olrwd5KXDuY5C"
      );

      // Show success notification
      toast.success("Message sent successfully!");

      // Clear form fields
      reset();
      setSubmitError(null); // Reset any errors on successful submission
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to send your message. Please try again.");
      toast.error("Failed to send your message. Please try again.");
    } finally {
      // Hide loader after submission
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-blue-100 to-blue-100"
    >
      {/* Toast Container */}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex flex-col md:flex-row w-full items-center">
        {/* Contact Form - Left Side */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 lg:p-12 xl:p-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-gray-800">
              Contact Us
            </h2>

            {emailCountExceeded && (
              <div className="text-center text-red-500 mb-4">
                The email could not be sent. Please try again later or contact
                us directly at <strong>+1234567890</strong>.
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
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <small className="text-red-500">
                      {errors.name.message}
                    </small>
                  )}
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
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <small className="text-red-500">
                      {errors.email.message}
                    </small>
                  )}
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
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Invalid mobile number (10 digits required)",
                      },
                    })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && (
                    <small className="text-red-500">
                      {errors.mobile.message}
                    </small>
                  )}
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
                    {...register("message")}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 text-lg md:text-xl lg:text-xl xl:text-2xl"
                    disabled={loading} // Disable the button when loading
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>

            {/* Loader (Conditionally Rendered) */}
            {loading && (
              <div className="flex justify-center mt-4">
                <div className="loader"></div>
              </div>
            )}
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
