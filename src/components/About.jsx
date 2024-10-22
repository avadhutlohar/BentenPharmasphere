import bgImage from "../assets/about-bg-img.jpg";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="py-16 bg-cover bg-center relative mb-36"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mt-64 mx-auto px-4 relative">
          <div className="absolute -mt-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              About Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Who Are We */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Who Are We</h3>
                <p className="text-gray-600">
                  At Benten –Pharmasphere services, we are dedicated to
                  enhancing the skills and knowledge of pharmacists through
                  customized training programs in pharmacy, clinical pharmacy,
                  and drug information. Our comprehensive modules are designed
                  to improve professional capabilities and adapt to the evolving
                  needs of the healthcare industry.
                </p>
              </div>

              {/* Our Vision */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  Our vision is to offer comprehensive support to hospitals,
                  clinical research organizations and deliver exceptional
                  training for pharmacists and college students. We are
                  dedicated to advancing excellence in pharmacy practice and
                  education.
                </p>
              </div>

              {/* What We Do */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">What We Do</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Hospital Pharmacy Set up</li>
                  <li>Training of hospital pharmacists</li>
                  <li>Pharmacy consultation</li>
                  <li>Clinical training of hospital pharmacists</li>
                  <li>Ethics Committee registration and renewal</li>
                  <li>Documents Archiving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add margin-top to create space between sections */}
      <div className="mt-64">
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default About;
