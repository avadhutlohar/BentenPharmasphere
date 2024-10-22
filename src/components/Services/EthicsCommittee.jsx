import React from 'react'
import bgImg from '../../assets/service2.svg';

const EthicsCommittee = () => {
  const services = [
    {
      title: 'Advisory and guidance',
      description: 'We offer specialized advisory services for ethics committees to navigate complex ethical dilemmas and regulatory frameworks. Our expert guidance helps committees establish robust review processes, ensuring compliance with ethical standards while fostering integrity and accountability in clinical research.'
    },
    {
      title: 'Ethics committee formation and setup',
      description: 'We specialize in the formation and setup of ethics committees that align with your organization\'s objectives. Our approach includes defining roles, responsibilities, and procedures to ensure a thorough review process, fostering trust and integrity in your research initiatives.'
    },
    {
      title: 'CDSCO and DHR Registration and Renewal',
      description: 'Our team simplifies the registration and renewal processes with the Central Drugs Standard Control Organization (CDSCO) and the Department of Health Research (DHR). We ensure timely submissions and adherence to regulatory requirements, minimizing the risk of non-compliance.'
    },
    {
      title: 'Member Changes intimation to CDSCO and DHR',
      description: 'We facilitate the communication of any changes in ethics committee membership to CDSCO and DHR, ensuring that your organization\'s records are accurate and up-to-date. This service helps maintain compliance and transparency in your operations.'
    },
    {
      title: 'Ethics committee SOP development',
      description: 'We create customized Standard Operating Procedures (SOPs) for ethics committees to standardize processes and enhance operational efficiency. Our SOPs are designed to ensure compliance with ethical guidelines while promoting a thorough review of research proposals.'
    },
    {
      title: 'GCP Training to Ethics Committee members',
      description: 'Our comprehensive Good Clinical Practice (GCP) training equips ethics committee members with the necessary knowledge and skills to oversee clinical trials effectively. We focus on ethical considerations, regulatory requirements, and best practices to uphold the integrity of research activities.'
    }
  ];

  return (
    <div className="relative min-h-screen p-8">
      <img src={bgImg} alt="Background" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.2 }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">ETHICS COMMITTEE SERVICES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-opacity-80 rounded-lg shadow-lg">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300 hover:text-blue-500"
            >
              <h2 className="text-xl font-semibold mb-4">✓ {service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EthicsCommittee