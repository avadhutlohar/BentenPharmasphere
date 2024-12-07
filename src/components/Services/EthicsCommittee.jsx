import React from 'react';
import bgImg from '../../assets/ethics.png';

const EthicsCommittee = () => {
  const serviceDescription =
    'We provide all types of comprehensive Ethics Committee-related services, including advisory support and documentation guidelines. We assist with the formation and setup of Ethics Committees, along with CDSCO and DHR registration and renewals. We also handle member changes and ensure proper intimation to CDSCO and DHR. Our services include the development of Ethics Committee SOPs and GCP training for committee members, ensuring compliance and maintaining ethical standards in clinical research.';

  return (
    <section
      id="ethics-committee"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-blue-100 to-blue-100"
    >
      <div className="flex flex-col md:flex-row w-full h-full items-center">
        {/* Ethics Committee Services - Left Side */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 lg:p-12 xl:p-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-gray-800">
              ETHICS COMMITTEE SERVICES
            </h2>
            <div className="text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-700 text-center">
              {serviceDescription}
            </div>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center md:justify-end p-4 md:p-6 lg:p-8 xl:p-10">
          <img
            src={bgImg}
            alt="Ethics Committee Illustration"
            className="h-auto w-full md:w-3/4 lg:w-3/4 xl:w-full object-contain max-h-[75vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default EthicsCommittee;