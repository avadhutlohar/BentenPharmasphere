import React from 'react';
import heroImage from '../assets/home.jpg';

const ImageSection = () => {
  return (
    
    <div className='min-h-screen flex justify-center items-center flex-col p-8 bg-[#F3F6F3]'>
      <div className="grid grid-cols-2  py-12 border border-blue-200 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center items-center relative group">
        <img
          src={heroImage}
          alt="hero"
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center items-end pr-10">
        <h1 className="text-4xl font-bold text-right transition-transform duration-500 ease-in-out transform group-hover:scale-105 text-blue-500">
          Welcome to Benten-Pharmasphere Services!
        </h1>
        <p className="text-lg mt-4 text-right transition-transform duration-500 ease-in-out transform group-hover:scale-105">
          Your premier portal for comprehensive hospital services and pharmacist training. We focus on enhancing hospital pharmacy practices and professional development through specialized training programs for pharmacists, college students, and healthcare institutions. Join us to enhance your skills, stay ahead in your field, and make a meaningful impact in healthcare. Start your journey with us today!
        </p>
      </div>

    </div>
    <div className='grid grid-cols-2  py-12 border border-blue-200 bg-white rounded-lg shadow-lg gap-8 p-8 mt-6 '>
      <h1 className='text-4xl font-bold text-blue-500'>Let’s Get in Touch</h1>
      <button className='bg-blue-500 text-black px-4 py-2 rounded-md font-bold'>+91 9876543210</button>
    </div>
    </div>
  );
};

export default ImageSection;