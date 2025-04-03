import React from "react";

interface DepartemencardProps {
  categories: any[];
}

const Departemencard: React.FC<DepartemencardProps> = ({ categories }) => {
  return (
    <>
      <div
        className="
      flex flex-col gap-10 w-full h-auto items-center justify-center
       md:flex-row md:flex-wrap md:justify-start
      "
      >
        {categories.map((category) => (
          <div
            className="
            bg-custom-white text-dark-blue shadow-lg shadow-mid-gray p-4 flex justify-between items-center rounded-xl rounded-tr-4xl w-[80%]
            md:w-fit md:gap-6 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out
            md:py-8 md:px-7
            "
            key={category.id}
          >
            <h2 className="md:text-xl">{category.title}</h2>
            <i className="
            [&>svg]:w-14 [&>svg]:h-14 
            md:[&>svg]:w-10 md:[&>svg]:h-10
            ">{category.icon}</i>
          </div>
        ))}
      </div>
    </>
  );
};

export default Departemencard;
