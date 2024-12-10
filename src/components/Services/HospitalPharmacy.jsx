import React from 'react';
import bgImg from '../../assets/service3.png';

const HospitalPharmacy = () => {
  const services = [
    {
      title: 'Hospital Pharmacy Set up and Consultation Services',
      description:
        'Ensures compliance to regulatory standards while creating an efficient pharmacy design and layout. We develop comprehensive Standard Operating Procedures (SOPs) and implement effective inventory management systems to optimize pharmacy operations and enhance patient care.'
    },
    {
      title: 'Training of Hospital Pharmacists',
      description:
        'We provide specialized training for pharmacy staff, focusing on procedures, technology, and regulatory compliance. Our programs are designed to ensure ongoing professional development and maintain competency, empowering pharmacists to deliver exceptional patient care.'
    },
    {
      title: 'Statutory Compliance Evaluation and Audit',
      description:
        'We conduct evaluations and audits to ensure hospital pharmacies meet all statutory compliances and quality elements as required by accreditation standards. Our team assesses policies, procedures, and practices to identify areas of improvement, mitigate risks, and enhance operational efficiency, ultimately ensuring the safe and effective management of medications within your facility.'
    },
    {
      title: 'Clinical Training of Hospital Pharmacists',
      description:
        'Our Clinical Training programs equip hospital pharmacists with essential skills in specialized areas such as Antimicrobial Stewardship guidelines, medicine knowledge in Oncology Pharmacy, Pharmacovigilance, and Prescription Audits. We also provide training on managing High-Risk Medications and LASA drugs to enhance their clinical knowledge base and improve patient safety.'
    }
  ];

  return (
    <div className="relative min-h-screen p-8 md:p-12 bg-gradient-to-r from-blue-100 to-white">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.1 }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800 hover:text-blue-500">
          HOSPITAL PHARMACY SERVICES
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8  bg-opacity-80 rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300 hover:text-blue-500"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-4">✓ {service.title}</h2>
              <p className="text-sm md:text-base text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalPharmacy;