import React from 'react';

interface AboutusProps {}

const Aboutus: React.FC<AboutusProps> = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-auto items-center justify-center text-dark-gray py-10
    md:items-start md:px-50
    ">
      <h1 className="text-2xl font-bold text-dark-blue">درباره ما</h1>
      <div className="flex flex-col gap-10 w-full h-auto items-center justify-center md:items-start">
        <p className="text-center w-3/4
        md:text-justify
        ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          ipsum esse repudiandae cum dolore! Odit voluptate aperiam quas sunt
          temporibus reprehenderit commodi, vel provident et quisquam odio
          cupiditate similique optio?
        </p>
      </div>
    </div>
  );
};

export default Aboutus;