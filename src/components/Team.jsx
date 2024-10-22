import React from 'react';
import expertIcon from '../assets/expert1.webp';
import expertIcon2 from '../assets/expert2.webp';
import expertIcon3 from '../assets/expert3.webp';

const Team = () => {
  return (
    <section className="h-screen bg-white text-center">
      <h2 className="text-5xl font-semibold mb-8 pt-8">Meet Our Experts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mx-auto p-8">
        {/* 1st person */}
        <div
          className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-blue-500"
        >
          <img
            src={expertIcon}
            alt="Expert Icon"
            className="w-full h-64 object-cover mb-4 rounded-t-lg"
          />
          <h3 className="text-2xl font-bold mb-2">Name</h3>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut
            cumque amet consequuntur sint eligendi iusto ducimus! Eaque
            voluptatum amet ab eveniet dicta qui quidem eum, expedita eos
            ducimus suscipit.
          </p>
        </div>

        {/* 2nd person */}
        <div
          className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-blue-500"
        >
          <img
            src={expertIcon2}
            alt="Expert Icon"
            className="w-full h-64 object-cover mb-4 rounded-t-lg"
          />
          <h3 className="text-2xl font-bold mb-2">Name</h3>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut
            cumque amet consequuntur sint eligendi iusto ducimus! Eaque
            voluptatum amet ab eveniet dicta qui quidem eum, expedita eos
            ducimus suscipit.
          </p>
        </div>

        {/* 3rd person */}
        <div
          className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-blue-500"
        >
          <img
            src={expertIcon3}
            alt="Expert Icon"
            className="w-full h-64 object-cover mb-4 rounded-t-lg"
          />
          <h3 className="text-2xl font-bold mb-2">Name</h3>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut
            cumque amet consequuntur sint eligendi iusto ducimus! Eaque
            voluptatum amet ab eveniet dicta qui quidem eum, expedita eos
            ducimus suscipit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;