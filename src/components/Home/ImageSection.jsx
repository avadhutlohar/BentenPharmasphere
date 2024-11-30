import React from 'react';
// import heroImage2 from "../../assets/heroImg2.png";
import heroImage2 from "../../assets/2.jpg";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import Icon4 from "../../assets/icon4.png";
import Icon5 from "../../assets/icon5.png";
import Icon6 from "../../assets/icon6.png";

const ImageSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between min-h-screen py-10 md:py-20 px-6 md:px-8">
      {/* Left Column - Illustration */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={heroImage2}
          alt="Doctor Illustration"
          className="h-auto w-[90%] sm:w-[80%] md:w-[90%] lg:w-[100%] max-h-[75vh] object-contain"
        />
      </div>

      {/* Right Column - Services List */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <h2 className="text-2xl md:text-6xl font-bold text-center md:text-left">
          What We Offer
        </h2>

        <div className="mt-8 space-y-4">
          {/* Service Card: Training hospital pharmacists */}
          <div className="flex items-center space-x-4 bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <img src={Icon1} alt="Training Icon" className="w-10 h-10 md:w-12 md:h-12" />
            <h3 className="font-semibold text-base md:text-lg">
              Training Hospital Pharmacists
            </h3>
          </div>

          {/* Service Card: Statutory compliance evaluation and audit */}
          <div className="flex items-center space-x-4 bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <img src={Icon2} alt="Compliance Icon" className="w-10 h-10 md:w-12 md:h-12" />
            <h3 className="font-semibold text-base md:text-lg">
              Statutory Compliance Evaluation and Audit
            </h3>
          </div>

          {/* Service Card: Pharmacy Consultation */}
          <div className="flex items-center space-x-4 bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <img src={Icon3} alt="Consultation Icon" className="w-10 h-10 md:w-12 md:h-12" />
            <h3 className="font-semibold text-base md:text-lg">Pharmacy Consultation</h3>
          </div>

          {/* Service Card: Clinical Training */}
          <div className="flex items-center space-x-4 bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <img src={Icon4} alt="Clinical Training Icon" className="w-10 h-10 md:w-12 md:h-12" />
            <h3 className="font-semibold text-base md:text-lg">
              Clinical Training of Hospital Pharmacists
            </h3>
          </div>

          {/* Service Card: Advisory and Guidance */}
          <div className="flex items-center space-x-4 bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <img src={Icon5} alt="Advisory Icon" className="w-10 h-10 md:w-12 md:h-12" />
            <h3 className="font-semibold text-base md:text-lg">
              Advisory and Guidance for Ethics Committees
            </h3>
          </div>

          {/* Service Card: Documents Archiving */}
          <div className="flex items-center space-x-4 bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <img src={Icon6} alt="Advisory Icon" className="w-10 h-10 md:w-12 md:h-12" />
            <h3 className="font-semibold text-base md:text-lg">
              Documents Archiving For Clinical Research
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;