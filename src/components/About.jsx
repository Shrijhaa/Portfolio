import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md flex flex-col justify-center items-center w-4/6 border-solid">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Shrijhaa Ramesh
              </p>
            </div>
            <div>
              <p>
                {" "}
                I love to design and develope Front-end part of web Applications using technologies like
          HTML, CSS, JS, React, Tailwind, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;