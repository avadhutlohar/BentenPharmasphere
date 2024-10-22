import React from 'react'
import bgImg from '../../assets/service1.png';

const DocumentsArchiving = () => {
    const services = [
        {
          title: 'Comprehensive Document Archiving Solutions',
          description: 'We provide comprehensive document archiving solutions to ensure the secure and organized storage of all types of documents.'
        },
        {
          title: 'Digitization of Documents',
          description: 'Our digitization services enable the conversion of physical documents into digital formats, ensuring easy access and retrieval while reducing storage space.'
        },
        {
          title: 'Indexing and Organization',
          description: 'We provide indexing and organization services to ensure that your documents are properly categorized and easily searchable, facilitating efficient retrieval and management.'
        },
        {
          title: 'Long-term Preservation',
          description: 'Our long-term preservation services ensure that your documents are safely stored and protected from degradation, loss, or damage, guaranteeing their integrity and availability for future use.'
        },
        {
          title: 'Compliance with Regulatory Requirements',
          description: 'We ensure that our document archiving solutions comply with regulatory requirements and data protection standards, providing you with peace of mind and minimizing the risk of non-compliance.'
        },
        {
          title: 'Easy Access and Retrieval',
          description: 'Our document archiving solutions facilitate easy access and retrieval of your documents, enabling you to quickly locate and retrieve the information you need.'
        }
      ];
    
      return (
        <div className="relative min-h-screen p-12">
          <img src={bgImg} alt="Background" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.2 }} />
          <div className="relative z-10 max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-12">DOCUMENTS ARCHIVING SERVICES</h1>
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

export default DocumentsArchiving