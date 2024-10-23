import React from "react";
import expertIcon from "../../assets/expert1.webp";
import expertIcon2 from "../../assets/expert2.webp";
import expertIcon3 from "../../assets/expert3.webp";

const Team = () => {
  return (
    <section className="bg-white text-center py-10 md:py-12 lg:py-14 xl:py-16 ">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 md:mb-8 lg:mb-10 xl:mb-12 px-4">
        Meet Our Experts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16 w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        {/* 1st person */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 xl:p-10 transition duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-blue-500">
          <img
            src={expertIcon}
            alt="Expert Icon"
            className="w-full h-48 md:h-56 lg:h-64 xl:h-72 object-cover object-top mb-4 rounded-t-lg"
          />
          <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
            Name
          </h3>
          <p className="text-gray-600 text-base md:text-lg lg:text-lg xl:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut
            cumque amet consequuntur sint eligendi iusto ducimus! Eaque
            voluptatum amet ab eveniet dicta qui quidem eum, expedita eos
            ducimus suscipit.
          </p>
        </div>

        {/* 2nd person */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 xl:p-10 transition duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-blue-500">
          <img
            src={expertIcon2}
            alt="Expert Icon"
            className="w-full h-48 md:h-56 lg:h-64 xl:h-72 object-cover object-top mb-4 rounded-t-lg"
          />
          <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
            Name
          </h3>
          <p className="text-gray-600 text-base md:text-lg lg:text-lg xl:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ut
            cumque amet consequuntur sint eligendi iusto ducimus! Eaque
            voluptatum amet ab eveniet dicta qui quidem eum, expedita eos
            ducimus suscipit.
          </p>
        </div>

        {/* 3rd person */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 xl:p-10 transition duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-blue-500">
          <img
            src={expertIcon3}
            alt="Expert Icon"
            className="w-full h-48 md:h-56 lg:h-64 xl:h-72 object-cover object-top mb-4 rounded-t-lg"
          />
          <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2">
            Name
          </h3>
          <p className="text-gray-600 text-base md:text-lg lg:text-lg xl:text-xl">
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