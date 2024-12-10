import React from "react";
import bgImg from "../../assets/document.png";

const DocumentsArchiving = () => {
  const serviceDescription =
    "We provide comprehensive document archiving solutions to ensure the secure and organized storage of all types of documents. Our services include digitization, indexing, and long-term preservation, facilitating easy access and retrieval while ensuring compliance with regulatory requirements and data protection standards.";

  return (
    <section
      id="documents-archiving"
      className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-white min-h-screen"
    >
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-full h-full">
        {/* Card Section (Left Side) */}

        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 lg:p-12 xl:p-14 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-blue-500">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 md:mb-10 lg:mb-12 xl:mb-14 text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">
              DOCUMENTS ARCHIVING SERVICES
            </h2>
            <div className="text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-700 text-center">
              {serviceDescription}
            </div>
          </div>
        </div>

        {/* Image Section (Right Side) */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center p-4 md:p-6 lg:p-8 xl:p-10">
          <img
            src={bgImg}
            alt="Document Archiving Illustration"
            className="h-auto w-full md:w-3/4 lg:w-3/4 xl:w-full max-h-[75vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DocumentsArchiving;
