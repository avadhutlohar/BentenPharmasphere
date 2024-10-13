import React from 'react';
import bgImage from '../assets/why-choose-us.jpg';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src={bgImage} alt="Team working" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <ul className="space-y-4">
              <li>
                <h4 className="text-lg font-semibold">Best Quality</h4>
                <p className="text-gray-600">No compromise in delivering the quality services.</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">24x7 Support</h4>
                <p className="text-gray-600">We are available to support you around the clock.</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">Result Oriented Services</h4>
                <p className="text-gray-600">Our services are tailored to meet your needs and ensure results.</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">Experienced Professionals</h4>
                <p className="text-gray-600">We have a team of experts with years of experience.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
