import React from 'react';
import code from '../assets/code2.png';
import code1 from '../assets/code1.png';
const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my Projects</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-16'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code})`}}
            className='bg-cover shadow-lg shadow-[#040c16] group container h-[300px] rounded-md flex justify-center items-center mx-auto'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 hover:bg-blue-500 h-[300px] flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                VIRTUAL AI BOARD
              </span>
              <p className='text-center p-4'>Python based application to enable virtual writing withot touch interfaces</p>
              <div className='pt-8 text-center'>
                
                <a target="_blank" href='https://github.com/Shrijhaa/Virtual-AI-Board'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(${code1})` }}
            className='bg-cover shadow-lg shadow-[#040c16] group h-[300px] container rounded-md flex justify-center items-center mx-auto'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100  hover:bg-blue-500 h-[300px] flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                ROADSTER UI/UX DESIGN
              </span>
              <p className='text-center'>Roadster - web based application to organize bike rally for women bikers</p>
              <div className='pt-8 text-center'>
                
                <a target="_blank" href='https://drive.google.com/file/d/1y5lw1aMS78lDZ10wf3R0LlFNHHcEanSI/view?usp=share_link'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Works;